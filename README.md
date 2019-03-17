
# Koa Server

## Overview

### Step 01

#### 1. Initialize node project  
  * npm init / etc

#### 2. Add Koa + parser + router
  * "...an abstraction of node.js's http modules" vs a framework for node (like Express)

#### 3. Build a route
  * check it in insomnia or postman etc.

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
  * Mention this to Ryan

### 7. Create a database
  * update path in the model index
