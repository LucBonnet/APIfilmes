// const db = require("../database/db.json");
const models = require("../database/models");

const cadastraProdutora = async (req, res) => {
  try {
    const produtora = await models.Produtora.create(req.body);
    return res.status(201).json(produtora);
  } catch (error) {
    const produtora_obj = Object.keys(models.Produtora.rawAttributes)
      .filter((key) => !models.Produtora.rawAttributes[key]._autoGenerated)
      .map((key) => {
        return {
          field: models.Produtora.rawAttributes[key].field,
          type: models.Produtora.rawAttributes[key].type.key,
          optional: models.Produtora.rawAttributes[key].allowNull !== false,
        };
      });
    if (error instanceof models.Sequelize.DatabaseError) {
      return res.status(400).json({
        error: error.message,
        expected_json: produtora_obj,
      });
    } else {
      throw new Error(error);
    }
  }
};

const listaProdutoras = async (req, res) => {
  const data = await models.Produtora.findAll({});

  const produtoras = data.map((produtora) => {
    return produtora.dataValues;
  });

  return res.status(200).json(produtoras);
};

const buscaProdutoraId = async (req, res) => {
  const produtoraId = req.params.produtoraId;

  const data = await models.Produtora.findOne({ id: produtoraId });

  const produtora = data.dataValues;

  if (produtora) {
    return res.status(200).json(produtora);
  }

  return res.status(404).send(new Error("Not Found"));
};

const atualizaProdutora = async (req, res) => {
  const produtoraId = req.params.produtoraId;

  try {
    await models.Produtora.update(
      { ...req.body },
      { where: { id: produtoraId } }
    );
    return res.status(200).json();
  } catch (error) {
    const produtora_obj = Object.keys(models.Produtora.rawAttributes)
      .filter((key) => !models.Produtora.rawAttributes[key]._autoGenerated)
      .map((key) => {
        return {
          field: models.Produtora.rawAttributes[key].field,
          type: models.Produtora.rawAttributes[key].type.key,
          optional: models.Produtora.rawAttributes[key].allowNull !== false,
        };
      });
    if (error instanceof models.Sequelize.DatabaseError) {
      return res.status(400).json({
        error: error.message,
        expected_json: produtora_obj,
      });
    } else {
      throw new Error(error);
    }
  }
};

const apagaProdutora = async (req, res) => {
  const produtoraId = req.params.produtoraId;

  try {
    await models.Produtora.destroy({
      where: { id: produtoraId },
    });
    return res.status(200).json();
  } catch (error) {
    const produtora_obj = Object.keys(models.Produtora.rawAttributes)
      .filter((key) => !models.Produtora.rawAttributes[key]._autoGenerated)
      .map((key) => {
        return {
          field: models.Produtora.rawAttributes[key].field,
          type: models.Produtora.rawAttributes[key].type.key,
          optional: models.Produtora.rawAttributes[key].allowNull !== false,
        };
      });
    if (error instanceof models.Sequelize.DatabaseError) {
      return res.status(400).json({
        error: error.message,
        expected_json: produtora_obj,
      });
    } else {
      throw new Error(error);
    }
  }
};

module.exports = {
  cadastraProdutora,
  listaProdutoras,
  buscaProdutoraId,
  atualizaProdutora,
  apagaProdutora,
};
