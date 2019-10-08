const mongoose = require('mongoose')
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, 
    poolSize: 5, useMongoClient: true }
const url = "mongodb://localhost:27017/mymoney"

module.exports = mongoose.connect(url, options)

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err)
})
mongoose.connection.on('disconnected', () => {
    console.log('Aplicação disconetada do banco de dados!')
})
mongoose.connection.once('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
})


