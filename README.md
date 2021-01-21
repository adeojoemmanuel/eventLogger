Event tracking
==============

This project is a solution for the Event tracking system built with Node.js, redis, Express and DynamoDB. Deployed in a serverless way to AWS Lambda and AWS API Gateway using Claudia.js and dev local using gulp


Requirements Met
===============

- A non-relational database approched was picked so as to Handle Large Volumes of Data at High Speed  even with a Scale-Out Architecture
and also Store Unstructured, Semi-Structured, or Structured Data but most importanly for this project, it was selected to handle large data at highspeed

- The API accept the following credentials where i made use of joi validator to manage the data that are being received  to make sure they meet the required data type

```js
	{
		action_creator: 'the indentity of the person who created the action can be userid',
		receiver: 'where the event points to',
		event_type: 'the type of action that was created',
		time: 'the  time the action was performed',
		url_from: 'the url souce where the action was performed',
		agent: { a json object that carries information about the reqest, eg browser type, device type, ipaddress }
	}

```
- to handle duplicate  event we cache the last requests for each client, and For every new request we check the cache for duplicate  action and event, data would be  kept in cache for 5 minite before it expires

- Data is accessible and analysable due the way they are stored, they can be queried using one field or multiple fields, and are available in a digital, machine readable format.


Bottle Neck
===============

one of the bottle neck of this approch is getting agregate by agent type, as i didnt really cater for  that 



Endpoints
-----------

## Base URL : 'http://127.0.0.1/v1/'

- *POST* `/addEvent`

Description: this endpoint accept json in the following format

```js
{
  action_creator: required, string,
  receiver: required, string,,
  event_type: required, string,
  time: required, datetime,
  url_from: required, string,
  agent: required, json,
}
```

- *GET* `/listEvent/:action_creator?/:receiver?/:event_type?/:url_from?`

Description: this endpoint returns data in the following format

```js
{
  action_creator:  string,
  receiver:  string,
  event_type:  string,
  time:  datetime,
  url_from:  string,
  agent:  json,
}
```

- *GET* `/singleEvent/:eventid`

Description: this endpoint returns data for a specific event using its id

Architecture
------------

Simple REST API deployed to AWS lambda. The lambda persists and retrieves  data back.

Express is a minimal and flexible Node.js micro web application framework. Express provides HTTP utility methods and middleware to create quick API.

API Gateway and Lambda together provides a secure, easy and elegant way to create and deploy serverless Web applications without the overhead of managing servers.

Amazon DynamoDB is a fully managed and hosted AWS NoSQL database service.

Claudia.js is an open source Node.js deployment tool that helps automated deployment of Node.js app in a serverless function to AWS Lambda and AWS API Gateway.

![Architecture - Adeojo Emmanuel ](documents/Architecture.png)

Setting Up
-----------

The easiest way to get started is to clone the repository:

### Get the latest snapshot

```shell
git clone --depth=1 git@github.com:adeojoemmanuel/EventTracking.git eventTracking
cd eventTracking
```

### Install NPM dependencies

```shell
npm install
```

To Install Gulp commandline run

```shell
sudo npm install -g gulp
```

Start Redis Server
===============

```
redis-server
```

Start App Local
===============

Execute gulp. This invokes app.local.js under scripts. gulp-nodemon Automatically restart Node.js server on code changes.

```
gulp
```

### deployment in AWS

the application was deployed to aws using `ClaudiaJS` to deploy the app in a server-less way to AWS Lambda and AWS API Gateway.

1.	Configure awscli
2.	Create table in DynamoDB
3.	Deploy App to AWS
4.	Push changes to AWS

### Configure awscli

```shell
pip install awscli
aws configure
AWS Access Key ID [None]: XXXX
AWS Secret Access Key [None]: XXXX
Default region name [None]: us-east-1
Default output format [None]: json
```

Create Tables in DynamoDB
-------------------------

create-db is defined as task in package.json script. This executes scripts/createDB.js

```shell
npm run create-db
```

### Deploy App to AWS

Use deploy for first time deployment. deploy is defined as npm run task in package.json script

claudia create --policies policies --handler lambda.handler --deploy-proxy-api --region us-east-1

```shell
npm run deploy
```

### Push changes to AWS

Use update for update to initial deployment. update is defined as npm run task in package.json script

claudia update

```shell
npm run update
```


