var sqlite3 = require('sqlite3');
var db = new sqlite3.Database(process.env.SQL_DATABASE, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error("Getting error " + err);
        return (1);
    } else {
        if (process.env.NODE_ENV === "development") {
            console.log('access to database enabled. ', process.env.SQL_DATABASE)
        }

    }

});

const runSQL = (sql, data, next) => {
    return new Promise((resolve, reject) => {
        db.all(sql, data, (err, results) => {
            if (err) {
                next(err)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = { db, runSQL }