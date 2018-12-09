# node-lexical-density-api

## Available Scripts

In the client and server project directory, you can run:

### `npm install`

Install the necessary packages.

### `npm start`

Runs the app in the development mode.<br>
To make requests to server, you can use [http://localhost:5500](http://localhost:5500) 

### `npm test`

Launches the test runner in the interactive watch mode.<br>


##   Features:

- Calculate lexical density of text
- Calculate lexical density of text in verbose mode
- Add non lexical word


##   Design Specifications :

### Server Side Specifications

In server side, Rest API has been written. Also, in that API, layered architecture pattern is used. In Middleware layer, validate( to validate input requests) , log( to log incoming requests) middlewares have been written. In route layer, routes and controllers of specified routes are assessed. In business layer, some lexical density calculations and access to db modals has been managed. In Data layer, some mongo modals and validation modals created. In db layer connection to mongo db is handled.

##   Dependencies:

- expressjs - The server for handling and routing HTTP requests
- express-validation - to validate post requests
- joi - to write validation rules 
- mongoose - to make connection to mongo db and do some jobs in mongo modals. 
- body-parser - to parse json requests
- babel * - to use es6 in node.js 
- mocha, expect, supertest: packages that are used to write server test cases                      

##   Application Structure:

- server/ - server side is contained in that folder
- server/index.js -  this file defines our express server and  requires the routes we'll be using in the application. The entry point to our - application.
- server/config/ -  configuration variables for our server are contained in this folder
- server/routes/ -  the route definitions for our API are contained in this folder
- server/middleware/ - Middlewares that handle requests with data and validation rules for our request are contained in this folder
- server/models/ -  the schema definitions for our mongo models and validation models are contained in this folder
- server/business - lexical density calculator and manager are contained in this folder
- server/db - connection to mongodb with mongoose are contained in this folder

##   API


### Get complexity of text  [POST] [/complexity]

+ Request (application/json)
        
            {
                "text": "kim loves going to the cinema"
            }


+ Response 200 (application/json)
        
            {
                "data": {
                    "overall_ld": 0.67
                }
            }

### Get complexity of text in verbose mode  [POST] [/complexity?mode=verbose]


+ Request (application/json)
        
            {
                "text": "kim loves going to the cinema. kim loves going to the cinema "
            }

+ Response 200 (application/json)
        
            {
                "data": {
                    "sentence_ld": [
                        0.67,
                        0.67
                    ],
                    "overall_ld": 0.67
                }
            }


## Error Messages

+ Response 400 (application/json)
        
            {
                "message": "Validation error",
            }

+ Response 500 (application/json)
        
            {
                "message": "Error occured",
            }
