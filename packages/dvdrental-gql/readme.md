[![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.com/github/xgenecloud/xc-seed-gql) 





https://gist.github.com/taion/1cfe1595a32b89ea4265679b38eee7b9


# Deploy to GCP Cloud Run 

```
# Add sql connection parameters for production environment

./xc.config.json

```

```
 "envs": {
    "production": {
      "db": [
        {
          "client": "mysql",
          "connection": {
            "host": "localhost",
            "port": "3306",
            "user": "root",
            "password": "password",
            "database": "sakila"
          },
          "meta": {
            "tableName": "_evolutions",
            "dbAlias": "primary"
          }
        }
      ],
      "api" : {}
    }
  },
```


[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)



# AWS Lambda Deployment

- Open `server/config/default.config.js` and set `aws.lambda` to true and change other cloud serverless platform values as `false`.
- Install AWS cli & authenticate

    Refer : https://docs.aws.amazon.com/cli/index.html
    
- Open `serverless.yml` file and do  the  necessary changes.
- `npm run aws:lambda`

# Azure Function App

- Install Azure cli and login.
- `npm install -g azure-functions-core-tools`
- `npm run azure:deploy`

# GCP Cloud Function

- Install Google Cloud cli and authenticate.
- `npm run gcp:fn`


# Zeit Now


- Install Zeit now library and authenticate using email.
- Add `production` environment in `config.xc.json`
 
    ```
    "envs": {
        "production": {
          "db": [
            {
              "client": "mysql",
              "connection": {
                "host": "localhost",
                "port": "3306",
                "user": "root",
                "password": "password",
                "database": "sakila"
              },
              "meta": {
                "tableName": "_evolutions",
                "dbAlias": "primary"
              }
            }
          ],
          "api" : {}
        }
      },
    ```
- `npm run zeit:now`

# Performance





- test

    ```
    xc-examples-$autocannon -p 20 -c 50 -d 10 -m POST -H 'Content-Type: application/json'  -b '{"query":"{ CountryList { country }}","variables":{}}' http://localhost:8080/graphql 
    Running 10s test @ http://localhost:8080/graphql
    50 connections with 20 pipelining factor
    
    ┌─────────┬──────┬──────┬─────────┬─────────┬──────────┬───────────┬────────────┐
    │ Stat    │ 2.5% │ 50%  │ 97.5%   │ 99%     │ Avg      │ Stdev     │ Max        │
    ├─────────┼──────┼──────┼─────────┼─────────┼──────────┼───────────┼────────────┤
    │ Latency │ 0 ms │ 0 ms │ 1009 ms │ 1729 ms │ 63.74 ms │ 288.24 ms │ 2185.45 ms │
    └─────────┴──────┴──────┴─────────┴─────────┴──────────┴───────────┴────────────┘
    ┌───────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
    │ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev  │ Min    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
    │ Req/Sec   │ 270    │ 270    │ 594    │ 1140   │ 712.9  │ 310.08 │ 270    │
    ├───────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
    │ Bytes/Sec │ 235 kB │ 235 kB │ 516 kB │ 990 kB │ 619 kB │ 270 kB │ 235 kB │
    └───────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘
    
    Req/Bytes counts sampled once per second.
    
    7k requests in 10.09s, 6.19 MB read
      
      
    xc-examples-$autocannon -p 20 -c 50 -d 10 -m POST -H 'Content-Type: application/json'  -b '{"query":"{ CountryList { country\n CityList { city } }}","variables":{}}' http://localhost:8080/graphql 
    Running 10s test @ http://localhost:8080/graphql
    50 connections with 20 pipelining factor
    
    ┌─────────┬──────┬──────┬─────────┬─────────┬──────────┬───────────┬────────────┐
    │ Stat    │ 2.5% │ 50%  │ 97.5%   │ 99%     │ Avg      │ Stdev     │ Max        │
    ├─────────┼──────┼──────┼─────────┼─────────┼──────────┼───────────┼────────────┤
    │ Latency │ 0 ms │ 0 ms │ 1071 ms │ 1274 ms │ 59.26 ms │ 260.84 ms │ 2071.28 ms │
    └─────────┴──────┴──────┴─────────┴─────────┴──────────┴───────────┴────────────┘
    ┌───────────┬─────┬──────┬─────────┬─────────┬─────────┬────────┬─────────┐
    │ Stat      │ 1%  │ 2.5% │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
    ├───────────┼─────┼──────┼─────────┼─────────┼─────────┼────────┼─────────┤
    │ Req/Sec   │ 0   │ 0    │ 910     │ 1000    │ 800     │ 295.93 │ 608     │
    ├───────────┼─────┼──────┼─────────┼─────────┼─────────┼────────┼─────────┤
    │ Bytes/Sec │ 0 B │ 0 B  │ 1.53 MB │ 1.68 MB │ 1.34 MB │ 497 kB │ 1.02 MB │
    └───────────┴─────┴──────┴─────────┴─────────┴─────────┴────────┴─────────┘
    
    Req/Bytes counts sampled once per second.
    
    8k requests in 10.07s, 13.4 MB read

    
    ```


#Folder Structure Explained

[Click Here](https://xgenecloud.com/project-structure-gql)





# AWS Lambda CLI deployment


- CLI Setup
    - https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html
    - `$ aws iam create-role --role-name xc-rest-lambda --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'`
    - Add default policies `aws iam attach-role-policy --role-name xc-rest-lambda --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole`
- CLI Deploy
    - Zip the project 
        - In unix system use  `npm run lambda:zip`
        - For windows `npm run lambda:zip:win`
    - Deploy to AWS Lambda using following command
        ```
        aws lambda create-function --function-name xc-rest-serverless-app --zip-file fileb://lambda.zip --handler server/app.lambda --runtime nodejs12.x --role arn:aws:iam::249717198246:role/xc-rest-lambda --publish --timeout 180
        ```
    - Invoke the function using 
        ```
        aws lambda invoke --function-name xc-rest-serverless-app  out --log-type Tail --query 'LogResult' --output text |  base64 -D
        ```
- AWS API Gateway Setup
    - Add a trigger `API Gateway` to the `xc-rest-serverless-app` using AWS web console.
        - Open API Gateway page in aws console
        - Create `rest api` gateway
        - In resources add `ANY` as method to accept all the HTTP method
        - Add `/{proxy+}` as resource to match all the sub-paths
        - Under `/{proxy+}` add `ANY` as method to accept all the HTTP method
        - Now map the method to lambda function by clicking on `ANY`. On the right side within `Lambda Function` text field enter the lambda function name and save.
        - Now deploy the api gateway by clicking deploy option from the action dropdown
        - For detailed [documentation visit here](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-getting-started-with-rest-apis.html)
  
# #Alibaba Function Compute 

- Install `fun` cli tool `npm install @alicloud/fun -g`
- Setup alibaba account configuration in cli using `fun config` ( https://www.alibabacloud.com/help/doc-detail/64204.htm )
- Run 
    - `npm run ali:fn:compute`
    - or `fun deploy`