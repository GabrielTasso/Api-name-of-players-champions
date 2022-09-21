// Importanto Bibliotecas
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes')



// Criando Servidor
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


//Ligando servidor
app.listen(61616, () =>{
    console.log(`Express started at http://localhost:61616`)
})


