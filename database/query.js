// require
const db = require('./connection.js')

// export variable
let query = function(){
  db.connect() //connect to db
}

// add customer info to db
query.prototype.add_customer = function(customer, callback=() => {}){
  db.query("INSERT customer(visit_date, sex, age) VALUES(?, ?, ?);",
           [customer.visit_date, customer.sex, customer.age],
           (err) => {
             if(err){
               // error handling
               console.error(err)
             }
             callback()
           })
}

query.prototype.remove_customer = function(id, callback=() => {}){
  db.query("DELETE FROM customer WHERE id = ?;",
           [id],
           (err) => {
             if(err){
               // error handling
               console.error(err)
             }
             callback()
           })
}

// exports
module.exports = query

