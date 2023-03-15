const { router } = require('../routes/index');
const express = require('express');
const cors = require('cors');
const { saveApiData } = require('../controllers/saveApiData');
const { sequelize } = require('../DB_connection');
const server = express();
const PORT = 3001;

sequelize.sync({ force: true })
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

