const { router } = require('../routes/index');
const express = require('express');
const cors = require('cors');
const { saveApiData } = require('../controllers/saveApiData');
const { sequelize } = require('../DB_connection');
const morgan = require('morgan')
const server = express();
const PORT = process.env.PORT || 3001;

server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

sequelize
  .sync({ force: true })
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Error synchronizing database', error));

saveApiData();

server.use(express.json());
server.use(cors());
server.use('/rickandmorty/', router);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { server };
