const express = require('express');
const mongoose = require('mongoose');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.pwlmzmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro na conexão:', err));

app.use('/produto', produtoRoutes);

app.listen(3000, () => console.log('Servidor online em http://localhost:3000'));
