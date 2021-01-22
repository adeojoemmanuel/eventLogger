'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./src/')

const server = awsServerlessExpress.createServer(app, null)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
