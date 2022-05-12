//this starts your server
const { Pool } = require('pg');

const connectionString = 'postgres://tvvvvphx:b-2own748-zTh8ROuvVcRT4svGlaoo_P@lallah.db.elephantsql.com/tvvvvphx';

const pool = new Pool({
  connectionString,
});


module.exports = {
  query: (text, parameters, callback) => {
    console.log('executed query', text);
    return pool.query(text, parameters, callback);
  }
};

