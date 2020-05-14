# Cloud run Deployment

[Refer](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)

- Add `start` entry in `package.json` script.

    eg : `"start" : "cross-env NODE_ENV=production node server/app.js"`

- Create a simple `Dockerfile`
        
        # Use the official lightweight Node.js 12 image.
        # https://hub.docker.com/_/node
        FROM node:12-slim
        
        # Create and change to the app directory.
        WORKDIR /usr/src/app
        
        # Copy application dependency manifests to the container image.
        # A wildcard is used to ensure both package.json AND package-lock.json are copied.
        # Copying this separately prevents re-running npm install on every code change.
        COPY package*.json ./
        
        # Install production dependencies.
        RUN npm install --only=production
        
        # Copy local code to the container image.
        COPY . ./
        
        # Run the web service on container startup.
        CMD [ "npm", "start" ]

- Create `.dockerignore` and add files to ignore in docker image.

        Dockerfile
        README.md
        node_modules
        npm-debug.log
        
- Deploy the image

      gcloud builds submit --tag gcr.io/PROJECT-ID/CLOUD-RUN-NAME 
      
- Run the docker as a container

      gcloud run deploy --image gcr.io/PROJECT-ID/CLOUD-RUN-NAME  --platform managed  --add-cloudsql-instances INSTANCE_CONNECTION_NAME --update-env-vars INSTANCE_CONNECTION_NAME="INSTANCE_CONNECTION_NAME" 

- For updating 



# Fargate deployment

[Refer](https://medium.com/@ariklevliber/aws-fargate-from-start-to-finish-for-a-nodejs-app-9a0e5fbf6361)




# Custom package install script

```
const ora = require('ora')
// spinner.prefixText = '';]
const clear = require('clear');
const shell = require('shelljs');
clear();

var exec = require('child_process').exec;

function execute(command) {
  return new Promise((resolve, reject) => {
    try {
      exec(command, function (error, stdout, stderr) {
        if (stderr) return reject(stderr);
        resolve(stdout);
      });
    } catch (e) {
      reject(e)
    }
  })
}

let count = 0;

function showBanner(spinner) {
  // spinner.text = 'progress ' + ++count


  const boxen = require('boxen')
  require('colors')


  spinner.text ='Executing \n' + boxen(`Progress ${++count}`.bold.green, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    align:'center'
  })
}


(async function () {

  const commands = [
    'npm i --silent --ignore-scripts'
  ]

  for (let cmd of commands) {

    const spinner = ora({text: 'Executing ' + cmd, spinner: 'dots2', color: 'green'}).start();

    const interval = setInterval(() => showBanner(spinner), 1000);
    try {

      const out = await execute(cmd);
      // const out = shell.exec(cmd);

      spinner.succeed('Done : ' + cmd);
      console.log(out)
    } catch (e) {
      spinner.succeed('Done : ' + cmd);
      console.log(e)
    }
    clearInterval(interval)

  }

})().catch(e => {
  console.log(e);
  throw e
})



```


###   With terminal output of child process

```
const ora = require('ora')
// spinner.prefixText = '';]
const clear = require('clear');
clear();

var exec = require('child_process').exec;
var spinner;

function execute(command) {
  return new Promise((resolve, reject) => {
    try {
      // const child_proc = exec(command, function (error, stdout, stderr) {
      //   if (stderr) return reject(stderr);
      //   resolve(stdout);
      // });
      //
      // child_proc.stdout.on('data', (data) => {
      //   console.log(`${data}`);
      // });


      const { spawn } = require('child_process');
      const ls = spawn('npm' , ['install']);

      ls.stdout.on('data', (data) => {
       spinner.text += (`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        spinner.text+=(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        resolve(code);
      });



    } catch (e) {
      reject(e)
    }
  })
}

let count = 0;

function showBanner(spinner) {
  // spinner.text = 'progress ' + ++count


  const boxen = require('boxen')
  require('colors')


  spinner.text ='Executing \n' + boxen(`Progress ${++count}`.bold.green, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    align:'center'
  })
}


(async function () {

  const commands = [
    'npm i '
  ]

  for (let cmd of commands) {

     spinner = ora({text: 'Executing ' + cmd, spinner: 'dots2', color: 'green'}).start();

    // const interval = setInterval(() => showBanner(spinner), 1000);
    try {

      const out = await execute(cmd);
      // const out = shell.exec(cmd);

      spinner.succeed(spinner.text);
      // console.log(out)
    } catch (e) {
      spinner.succeed(spinner.text);
      // console.log(e)
    }
    // clearInterval(interval)

  }

})().catch(e => {
  // console.log(e);
  throw e
})

```

config for each component

# paragon
```
trigger every monday
perform all db operations
send msg on slack
send msg on email
```


npm install --save xc-component-notification
npm install --save xc-component-storage
npm install --save xc-component-job
npm install --save xc-component-cache

# model cross compatibility
- 

# component installation
- nis xc-auth
- xc ci xc-auth
    - install packages
    - copy config
    - copy model
    - make migrations
    - copy router
    - copy service
    
    
    
    
    
    
    
    
    