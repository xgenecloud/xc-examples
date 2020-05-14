const ServerComponents = require('xc-core').Components;

/* Serverless related */
const getRawBody = require('raw-body');
const createHandler = require("azure-function-express").createHandler;
const awsServerlessExpress = require('aws-serverless-express')
const AliServer = require('@webserverless/fc-express').Server;

/* variables */
let serverComponents = {};
let appSingleton = null;

async function start() {

  try {

    console.time('Server started in');

    /* Create server components in app.components.js */
    serverComponents = new ServerComponents(require('./app.components'));

    /* Init all server components */
    await serverComponents.init();

    /* Start the server */
    serverComponents.router.start();

    printBanner(serverComponents)

  } catch (e) {
    console.log(e);
  }

}


const init = new Promise((resolve, reject) => {
  if (!appSingleton) {
    start().then(() => {
      if (serverComponents.$config.aws.lambda) {
        /* Serverless : AWS Lambda */
        resolve(appSingleton = awsServerlessExpress.createServer(serverComponents.router.router))
      } else if (serverComponents.$config.azure.functionApp) {
        /* Serverless : Azure Function App */
        resolve(appSingleton = serverComponents.router.router);
      } else if (serverComponents.$config.gcp.cloudFunction) {
        /* Serverless : GCP Cloud Function */
        resolve(appSingleton = serverComponents.router.router);
      } else if (serverComponents.$config.zeit.now) {
        /* Serverless : Zeit Now */
        resolve(appSingleton = serverComponents.router.router);
      } else if (serverComponents.$config.alibaba.functionCompute) {
        /* Serverless : Alibaba Function Compute */
        resolve(appSingleton = new AliServer(serverComponents.router.router));
      } else {
        /* Serverless : Server */
        resolve(appSingleton = serverComponents.router.router);
      }
    }).catch((e) => reject(e))
  } else {
    resolve(appSingleton);
  }
})


module.exports = (...args) => {
  init.then((appServer) => {
    createHandler(appServer)(...args);
  })
}


module.exports.lambda = (event, context) => {
  init.then((appLambda) => {
    awsServerlessExpress.proxy(appLambda, event, context)
  })
}


module.exports.app = async function (...args) {
  const appServer = await init;
  return appServer(...args)
}


module.exports.zeit = function (req, res) {
  init.then(app => {
    app(req, res);
  })
}

module.exports.ali = async function (req, res, context) {
  req.body = await getRawBody(req);
  const server = await init;
  server.httpProxy(req, res, context)
}

function printBanner(server) {
  /**************** START : print welcome banner ****************/
  // const clear = require('clear');
  const Table = require('cli-table');

  // instantiate
  let table = new Table({
    head: ['Code Type', 'Code Path'],
    colWidths: [30, 60]
  });

  // table is an Array, so you can `push`, `unshift`, `splice` and friends
  table.push(
    ['GQL Schemas', './server/resolvers/**/*.schema.gen.js'],
    ['GQL Types', './server/resolvers/**/*.type.js'],
    ['GQL Resolvers', './server/resolvers/**/*.resolver.js'],
    ['Services', './server/services/**/*.service.js'],
    ['Models', './server/components/databases/**/*.model.js'],
    ['GQL Server Endpoint', `http://localhost:${server.$config.port}/graphql`],
  );

  // clear();
  console.log(`\n\n\t\tGenerating GraphQL APIs at the speed of your thought..\n`.green);
  console.log(table.toString());
  console.log('\n');
  console.log(`\t\t\tTotal APIs Created : ${server.resolvers.apisCount()}\n\n\n\n`.green);

  console.timeEnd('Server started in');
  /**************** END : print welcome banner ****************/
}
