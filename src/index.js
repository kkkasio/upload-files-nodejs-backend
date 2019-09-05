const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

/**
 * database setup
 */

mongoose.connect(
  'mongodb+srv://kasio:88222547@cluster0-vqqf3.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

const app = express();

//habilitando o express para lidar com json
app.use(express.json());

// express consegue lidar com o padrão url encoded (facilita a parte de envio dos arquivos)
app.use(express.urlencoded({ extended: true }));

// debug das rotas
app.use(morgan('dev'));

// chamando os arquivos de rotas
app.use(require('./routes'));

app.listen(3000);
