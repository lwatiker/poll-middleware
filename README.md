poll-middleware
===============

Middleware for mongo poll server

Simple middleware built on node.js and mongoDB to translate posts and gets to a webserver into inserts and finds in a MongoDB.

To install:
----
Install mongodb. Run on default port localhost:27017.
Start mongo server by running:
`mongod`

Install node dependencies:
`npm install`

Start node server:
`node server.js`

The node server listens for posts and gets on port `localhost:3000`. Posts changes to mongoDB running on `localhost:27017`
