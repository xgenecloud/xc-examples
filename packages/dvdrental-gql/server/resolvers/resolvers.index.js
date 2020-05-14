const path = require('path');
const glob = require('glob');
const passport = require('passport');
const expressGraphql = require('express-graphql');
const {buildSchema, execute} = require('graphql');
const merger = require('merge-graphql-schemas')
const mergeTypes = merger.mergeTypes
const mergeResolvers = merger.mergeResolvers
const {BaseComponent} = require('xc-core');

class Controller extends BaseComponent {
  
  constructor(app) {
    
    super(app);
    this.resolvers = {};
    app['$resolvers'] = this;
    this._apisCount = 0;
    
  }
  
  apisCount() {
    return this._apisCount;
  }
  
  
  async init(app) {
    
    console.log('api.init()');
    
    let _types = [];
    let _resolvers = [];
    
    try {
      
      const crudResolversPath = [];
      const dbTypesPath = [];
      const crudMiddlewarePaths = app.$config.dbs.map(({meta: {dbAlias}}) => path.join(__dirname, dbAlias, '**'));
      
      glob.sync(path.join(__dirname, '**', '*.middleware.js'), {ignore: crudMiddlewarePaths}).forEach(file => {
        const mw = require(file);
        app.$middlewares[mw.name] = new mw(app);
      });
      
      _types = [];
      
      /* get crud {resolvers,schema,types} */
      for (const {meta: {dbAlias}} of app.$config.dbs) {
        
        app.$middlewares[dbAlias] = app.$middlewares[dbAlias] || {};
        
        glob.sync(path.join(__dirname, dbAlias, '**', '*.middleware.js')).forEach(file => {
          const mw = require(file);
          app.$middlewares[dbAlias][mw.name] = new mw(app);
        });
        
        const resolverPath = path.join(__dirname, dbAlias, '**', '*.resolver.js');
        app['$resolvers'][dbAlias] = app['$resolvers'][dbAlias] || {};
        
        glob.sync(resolverPath).forEach(file => {
          let resolver = require(file)
          let _resolver = app['$resolvers'][dbAlias][resolver.name] = new resolver(app);
          _resolvers.push(_resolver.resolvers())
          this._apisCount += Object.keys(_resolver.resolvers()).length;
        });
        
        crudResolversPath.push(resolverPath)
        
        let typePath = path.join(__dirname, '..', 'graphql', dbAlias, 'schema', '*.schema.js');
        
        glob.sync(typePath).forEach((file) => {
          _types.push(require(file))
        });
        
        dbTypesPath.push(typePath);
        
      }
      
      /* get non-crud {resolvers, schema, types} */
      glob.sync(path.join(__dirname, '**', '*.resolver.js'), {ignore: crudResolversPath}).forEach(file => {
        let resolver = require(file)
        let _resolver = app['$resolvers'][resolver.name] = new resolver(app);
        _resolvers.push(_resolver.resolvers())
        this._apisCount += Object.keys(_resolver.resolvers()).length;
      });
      
      glob.sync(path.join(__dirname, '..', 'graphql', 'schema', '*.schema.js'), {ignore: dbTypesPath}).forEach((file) => {
        _types.push(require(file))
      });
      
      const types = mergeTypes(_types);
      const rootValue = mergeResolvers(_resolvers);
      const schema = buildSchema(types);
      
      
      /**************** google auth ****************/
      app.$router.get('/api/v1/auth/google',
        passport.authenticate('google', {scope: ['profile', 'email']}));
      
      app.$router.get('/api/v1/auth/google/callback',
        passport.authenticate('google', {failureRedirect: '/login'}),
        function (req, res) {
          // Successful authentication, redirect home.
          res.redirect('/');
        });
      
      /**************** facebook auth ****************/
      app.$router.get('/api/v1/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
      
      app.$router.get('/api/v1/auth/facebook/callback',
        passport.authenticate('facebook', {
          successRedirect: '/',
          failureRedirect: '/login'
        }));
      
      
      /**************** START : finally, load graphl schema ****************/
      app.$router.use('/graphql', (req, res, next) => expressGraphql({
        schema,
        rootValue: rootValue,
        graphiql: true,
        context: ({req, res, next}),
        customExecuteFn(args) {
          // global middleware can be implemented here
          return execute(args);
        }
      })(req, res, next));
      
      
    } catch (e) {
      console.log(e);
      throw e;
    }
    
  }
  
  
}


module.exports = Controller;
