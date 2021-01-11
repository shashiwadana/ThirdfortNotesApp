const { query } = require('express')
const mysql = require('mysql')
const config = require('../config/keys')

const conn = mysql.createPool(config.db)

// Executes Stores Procedures Asynchronously and returns Result
const spAsync = async (spName,inputs=[])=>{
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{conn.getConnection((err,connection)=>{
            if(err){
                connection.release();
                throw err;
            }
       
               connection.query(spName,[inputs[0],inputs[1],inputs[2],inputs[3]],(err,result)=>{
                if(!err){
                    resolve(result)
                    reject('Connection Timed Out')
                }
                else{
                    console.error(err)
                    resolve(err)
                }
            })
        })
    },1)
    })


    let result = await promise;
    return result
   
} 



module.exports.spAsync = spAsync
module.exports.mysql = mysql
module.exports.conn = conn
