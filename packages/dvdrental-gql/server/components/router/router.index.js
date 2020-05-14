const {BaseComponent, XcUtils} = require('xc-core');
const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const KnexSessionStore = require("connect-session-knex")(session);
var multer = require('multer')

const helmet = require('helmet')

const compression = require('compression')

class Router extends BaseComponent {

  constructor(app) {
    super(app)
    this.app = app;
    this.router = express();
  }

  async init(app) {
    console.log('router.init()');
    app.$router = this.router;
    this.initMiddlewares();
  }

  initMiddlewares() {
    //this.router.use(this.apiBridge.record);
    // this.router.use(compress)
    this.router.use(bodyParser.urlencoded({extended: true}));
    this.router.use(bodyParser.json());
    this.router.use(morgan('tiny'));
    this.router.use(cors());
    this.router.use(helmet());

    // this.router.use(compression());

    this.router.use(express.static(path.join(__dirname, '../../public')));

    const apiLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100
    });

    this.router.use("/graphql", apiLimiter);


    /**************** START : multer ****************/
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, process.cwd());
      },
      filename: function (req, file, cb) {
        console.log(file);
        cb(null, Date.now() + "-" + file.originalname);
      }
    });

    this.upload = multer({storage: this.storage});
    /**************** END : multer ****************/


    /**************** START : multer routes ****************/
    this.router.post(
      "/upload",
      this.upload.single("file"),
      this.uploadFile
    );
    this.router.post(
      "/uploads",
      this.upload.array("files", 10),
      this.uploadFiles.bind(this)
    );
    this.router.get("/download", this.downloadFile);
    /**************** END : multer routes ****************/


    // Todo: Azure function app has issue with session
    if (!(this.app.$config.azure.functionApp || this.app.$config.zeit.now || this.app.$config.alibaba.functionCompute)) {
      this.router.use(
        session({
          resave: false,
          saveUninitialized: true,
          secret: "The two most important days in your life are the day you are born and the day you find out why",
          cookie: {
            maxAge: 24 * 60 * 60 * 1000 // One day
          },
          store: this._getSessionStore()
        })
      );
    }
    this.router.use(cookieParser('XGene Cloud')); //session secret - should be overriden
    this.router.use(passport.initialize());

    if (!this.app.$config.azure.functionApp) {
      this.router.use(passport.session());
    }

    this.router.get('/health', this.health)
    if (this.app.$config.monitor) {
      this.router.use(require('express-status-monitor')());
    }
  }


  health(req, res) {
    res.json(XcUtils.getHealth(req.query));
  }

  _getSessionStore() {

    const store = new KnexSessionStore({
      knex: this.app.$dbs.primaryDb,
      tablename: "sessions" // optional. Defaults to 'sessions'
    });

    return store;
  }


  async start() {
    if (!(this.app.$config.azure.functionApp || this.app.$config.aws.lambda || this.app.$config.zeit.now || this.app.$config.alibaba.functionCompute)) {
      this.router.listen(this.app.$config.port, function () {
      })
    }
  }


  downloadFile(req, res) {
    let file = path.join(process.cwd(), req.query.name);
    res.download(file);
  }

  uploadFile(req, res) {
    if (req.file) {
      console.log(req.file.path);
      res.end(req.file.path);
    } else {
      res.end("upload failed");
    }
  }

  uploadFiles(req, res) {
    if (!req.files || req.files.length === 0) {
      res.end("upload failed");
    } else {
      let files = [];
      for (let i = 0; i < req.files.length; ++i) {
        files.push(req.files[i].path);
      }

      res.end(files.toString());
    }
  }


}


module.exports = Router;