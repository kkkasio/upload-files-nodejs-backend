require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

/**
 * database setup
 */

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

//habilitando o express para lidar com json
app.use(express.json());

// express consegue lidar com o padrão url encoded (facilita a parte de envio dos arquivos)
app.use(express.urlencoded({ extended: true }));

// debug das rotas
app.use(morgan('dev'));

/**
 * toda vez que acessar uma rota /files/:id , ele vai tentar acessar o arquivo
 * static = libera acesso ao arquivos estáticos
 */

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

// chamando os arquivos de rotas
app.use(require('./routes'));

app.listen(3000);
