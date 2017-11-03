// require
const db = require('./connection.js')

// export variable
let query = function(){
  db.connect() //connect to db
}

// get all customer info from db
query.prototype.get_all_customer = function(callback = () => {}){
  db.query("SELECT * FROM customer;",
           (err, rows) => {
             if(err){
               // error handling
               console.error(err)
             }
             callback(rows)
           })
}

// add customer info to db
query.prototype.add_customer = function(customer, callback = () => {}){
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

// remove customer info from db
query.prototype.remove_customer = function(id, callback = () => {}){
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

