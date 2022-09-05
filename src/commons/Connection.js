const mysql = require('promise-mysql');
const config = require('./Constants.js');

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.username,
    password: config.password,
    ssl: {
        rejectUnauthorized: false
    }
});

const getConnection = () =>{
    return connection
};

module.exports = {
    getConnection
};
