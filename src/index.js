const express = require('express');
const { json } = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


mongoose.connect('mongodb+srv://goweek:goweek123@cluster0-llxps.mongodb.net/goweek-10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Métopos HTTP: GET, POST, PUT, DELETE

// Tipos de Parametros:
// Query Params: request.query (Filtros, Ordenacao, Paginacao, ...) (GET)
// Route Params: request.params (Identificar um recurso na alteracao ou remocao) (PUT, DELETE)
// Body: request.body (Dados para criacao ou alteracao de um registro) (POST, PUT)

app.listen(3333);
