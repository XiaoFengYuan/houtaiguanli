const mysql = require('mysql');
const db = mysql.createConnection({
    host: '39.97.109.77',
    user: 'root',
    password: 'shenjianbo123456789',
    database: 'bcmanage'
});

exports.login = (loginData) => {
    const {username, password} = loginData;
    let sql = `select * from whitelist where username="${username}" and password="${password}"`
    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if(err) reject(err);
            else if(rows.length > 0) resolve(rows);
            else resolve(false);
        })
    })
}

exports.listRender = () => {
    let sql = 'select * from `class-opening-plan-test`';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            // console.log(rows);
            if(err) reject(err);
            else resolve(rows);
        })
    })
}

exports.add = (addData) => {
    let {label, batch, startDate, address, status} = addData;
    let sql = 'insert into `class-opening-plan-test`(label, batch, startDate, address, status)' + `values("${label}", "${batch}", "${startDate}", "${address}", "${status}")`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if(err) reject(err);
            else resolve(true);
        })
    })
}

exports.del = (id) => {
    let sql = 'delete from `class-opening-plan-test`' + `where id=${+id}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if(err) reject(err);
            else resolve(true);
        })
    })
}




exports.change = (changeData) => {
    let {id, label, batch, startDate, address, status} = changeData;
    let sql = 'update `class-opening-plan-test`' + `set label="${label}", batch="${batch}", startDate="${startDate}", address="${address}", status="${status}" where id="${id}"`;

    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if(err) reject(err);            
            else resolve(true);
        })
    })
}





exports.changeId = (id) => {
    let sql = 'select * from `class-opening-plan-test`' + `where id=${id}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            // console.log(rows);
            if(err) reject(err);
            else resolve(rows);
        })
    })
}
