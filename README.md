
# Koa Server

## Overview

### Step 01

#### 1. Initialize node project  
  * npm init / etc

#### 2. Add Koa + parser + router
  * "...an abstraction of node.js's http modules" vs a framework for node (like Express)

#### 3. Build a route
  * check it in insomnia or postman etc.
  * application/vnd.api+json - for headers ContentType and Accept

#### 4. Extract the route into another file
  * check it in insomnia or postman etc.

#### 5. Check out .env and config options
  * use 'port' as an example


### Step 02

#### 1. Add Sequelize (ORM) http://docs.sequelizejs.com

#### 2. Add PostgreSQL stuff
  * https://www.postgresql.org/about
  * Add pg and pg-hstore
  * https://node-postgres.com
  * https://github.com/scarney81/pg-hstore

#### 3. Add sequelize CLI
  * https://github.com/rtablada/sequelize-cli-esm/blob/master/README.md
  * regular sequelize + esm

#### 4. Initialize a database
  * `yarn sequelize-esm init` (note / the use of `yarn` might be new here)

#### 5. Change default config to something more obvious
  * db - or database.js
  * make it a .js file

#### 6. Make sure you have postgres installed
  * At this point I got `ERROR: connect ECONNREFUSED 127.0.0.1:5432` when I tried to db:create
  * Which means postgress isn't running
  * Options:
    `--version` 
    `--help`

#### 7. Create a database
  * update path in the model index


### Step 03
  * Create a migration `yarn sequelize-esm migration:generate --name=your-migration-name` (note yarn)
  * Fill out this new migration. (camelCase column names)
  * Create a model for the resourse
  * .... got a little whacky in here
  * ... I'm not sure why 'thing' isn't able to post to the db
  * .. authors works... : /
  * I put in some quick little try catch blocks / but these should be abstracted away

### Step 4
  * Create custom errors
  * Create findOrFail request to use instead of findByPk
  * use error there / simplify

### Step 5
  * 26 Creating sequelize models and relationships
  * try this new command / to generate a model & a migration
    * `yarn sequelize-esm model:generate --name Book --attributes 
    title:string,isbn:string,publishData:data`  (no spaces inbetween ,)
    * note - I wrote data instead of date / and things went whacky... find out what that sets and how that makes things confused. Why I can't just ammend those three places by hand? Maybe I didn't migrate
  * add Author reference
  * `yarn sequelize-esm db:migrate`
  * check out .associate(models) 
  * - little exploration of the interactive terminal.
  * - `node -r esm`  - what is `-r`?
  * - - starts interactive shell - / node with es6 stuffs
  * - - 



## When getting back into the project... what do you need to remember?

* gotta have the database stuff running... 
* you can't just type `sequelize-esm`... you need to use `yarn` for some reason (find out reason...)

### Trying to get the interactive shell part ot work... 

Full Stack Ember with Node.js
10:55:20 | 61 videos

Creating Sequelize Models and Relationships

.........

I've revisited this a few times / and I never found out what the problem was... - so, I could have had postress stop running... or messed up a migration... / but it's all working this 4th time around... / so, - I wont dwell on it.


