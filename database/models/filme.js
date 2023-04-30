"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Filme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Filme.init(
    {
      cod: DataTypes.STRING,
      titulo: DataTypes.STRING,
      sinopse: DataTypes.TEXT,
      ano: DataTypes.INTEGER,
      direcao: DataTypes.ARRAY(DataTypes.STRING),
      generos: DataTypes.ARRAY(DataTypes.STRING),
      duracao: DataTypes.INTEGER,
      id_produtora: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Filme",
    }
  );
  return Filme;
};
