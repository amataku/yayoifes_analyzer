// require
const request = require('request')

request({
  url: 'http://localhost:8000/api/customer',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify({
    sex: 'female',
    age: 10
  })
}, (error, res, body) => {
  console.log(`status: ${res.statusCode}`)
})

