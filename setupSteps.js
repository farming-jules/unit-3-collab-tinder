//Supplementary
npm install node-sass express-compile-sass bootstrap@4.6.0 jquery --save
npm install express-ejs-layouts --save
npm install express-validator jsdom jquery lodash --save
npm install ejs --save
npm install -g nodemon
npm install bcrypt crypto --save
npm install --save node-sass

//seed
npm install fakergem --save
npx sequelize-cli db:seed:all
//1st step:
npm init

// s3
npm install dotenv --save
npm install aws-sdk multer multer-s3 --save

//Base app Set up:
Create main.js / .gitignore
npm install express ejs morgan method-override moment --save
Add .gitignore and ignore node_modules
Create folder views, views/tweets, routes
Create files routes/index.js, routes/root.js, and routes/tweets.js
Create files views/home.ejs & views/tweets/index.ejs
Run $ git init, $ git add ., and $ git commit -m 'init'
Run $ nodemon node main.js
---------------------------------

//DB & Model Setup:
npm install sequelize sequelize-cli sequelize-auto pg --save
npx sequelize-cli init (-- force)
//In config/config.json, configure the DB
npx sequelize-cli db:create

----add to package.json------- (remember the ,)
"gen-models": "sequelize-auto -o './models/schema' -d lab_restful_api_development -h localhost -p 5432 -e postgres --cf l --sg true"
//then generate models
npx sequelize-cli model:generate --name User --attributes userId:INTEGER,email:STRING,passwordHash:STRING,firstName:STRING,dateOfBirth:STRING,gender:STRING,sexualOrientation:STRING,passion:STRING,lookingFor:STRING,location:STRING,Bio:TEXT
npx sequelize-cli model:generate --name UserImage --attributes image:STRING

npx sequelize-cli model:generate --name Like --attributes ownerId:INTEGER,targetId:INTEGER,like:BOOLEAN
npx sequelize-cli model:generate --name AuthenticityToken --attributes token:STRING


//in migration file
content: {
  allowNull: false, // Add this line
  type: Sequelize.STRING
}

npx sequelize-cli migration:generate --name add-userID-to-listeditem

//Validation & association link: https://github.com/dented-academy/fswdi-curriculum/blob/master/unit2/2.1/validations-and-associations/README.md
'use strict';
const { Model } = require('sequelize')
const WishlistSchema = require('./schema/wishlist')
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      Wishlist.WishlistItems = this.hasMany(models.WishlistItem)
    }
  }

  const { tableAttributes } = WishlistSchema(sequelize, DataTypes)
  Wishlist.init(tableAttributes, {
    sequelize,
    modelName: 'Wishlist',
  })

  return Wishlist
}
// (edit migration file) npx sequelize-cli migration:generate --name add-col-to-WLI
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('WishlistItems', 'WishlistId', { type: Sequelize.INTEGER })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('WishlistItems', 'WishlistId')
  }
};

//below gen schema
npx sequelize-cli db:migrate && npm run gen-models

// routes/file.js
const { Tweet } = require('../models')
const { Router } = require('express')
const { pullAt, isPlainObject } = require('lodash')
const router = Router()
// ...
git add .
git commit -m 'db & model setup'
nodemon node main.js
able to go to localhost:3000

//Controller Level Validation setup:
npm install express-validator jsdom jquery lodash --save
Create folder services
Create file services/validation-query.js and
const jsdom = require("jsdom")
const jQuery = require("jquery")
const _ = require("lodash")

const $ = jQuery(new jsdom.JSDOM('<!DOCTYPE html><body></body>').window)

exports.encodeArray = function(path, errors) {
  return `${path}?${$.param({ errors: errors.array() })}`
}

exports.decodeArrayToObject = function(errors) {
  const objErrors = {}

  if (errors && errors.length > 0) {
    errors.forEach(function(error) {
      _.set(objErrors, error.param, error.msg)
    })
  }

  return objErrors
}
In routes/files.js
const { body, validationResult } = require('express-validator')
const { encodeArray, decodeArrayToObject } = require('../services/validation-query')
const { like } = require('sequelize/types/lib/operators')
const { //Tweet //} = require('../models')
const { Router } = require('express')
const router = Router()
// ...

Run $ git add ., and $ git commit -m 'controller validation'

//Params & Queries set up:
//In main.js
// Parse url queries and json to object to be used in req.query and req.body
// Must be before routes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// ...


//ejs layouts link: https://github.com/dented-academy/fswdi-curriculum/blob/master/unit2/2.1/ejs-layouts/README.md
Run $ git add ., and $ git commit -m 'params & queries'

