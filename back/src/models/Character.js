const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Character = sequelize.define('Character', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Character.findOrCreateCharacter = async function (options) {
    const [character, created] = await this.findOrCreate(options);
    return { character, created };
  };

  return Character;
};
