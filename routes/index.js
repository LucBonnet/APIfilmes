const Router = require("express");
const filmesController = require("../controllers/filmes.js");

const router = Router();

router.get("/", (req, res) => res.send("API de filmes alternativos"));

router.get("/filmes", filmesController.listaFilmes);

// filmeId: [código do video do Youtube]
router.get("/filme/:filmeId", filmesController.buscaFilmeById);

module.exports = router;
