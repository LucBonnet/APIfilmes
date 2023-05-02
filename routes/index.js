const Router = require("express");
const filmesController = require("../controllers/filmes.js");
const produtorasController = require("../controllers/produtoras.js");
const usuariosController = require("../controllers/usuarios.js");

const router = Router();

router.get("/", (req, res) => res.send("API de filmes alternativos"));

/**
 * Lista de todos os filmes cadastrados
 */
router.get("/filmes", filmesController.listaFilmes);

/**
 * Adicionar filme
 *
 * body: {
 *  cod: [código do video do Youtube],
 *  titulo: [título do filme],
 *  sinopse: [sinopse do filme],
 *  ano: [ano de lançamento do filme],
 *  direcao: [array com o nome dos diretores e diretoras do filme],
 *  generos: [array com os gêneros do filme],
 *  duracao: [tempo de duração em segundos]
 *  id_produtora: [id da produtora que enviou o filme]
 * }
 */
router.post("/filme", filmesController.cadastraFilme);

/**
 * Buscar filme pelo código
 *
 * filmeId: [código do video do Youtube]
 */
router.get("/filme/:filmeId", filmesController.buscaFilmeById);

router.get(
  "/filmes/produtora/:id_produtora",
  filmesController.buscaFilmesPelaProdutora
);

router.put("/filme/:filmeId", filmesController.atualizaFilme);

router.delete("/filme/:filmeId", filmesController.apagaFilme);

/**
 *  Adicionar produtora
 *
 *  nome: [nome da produtora],
 *  email: [email da produtora],
 *  senha: [senbha de acesso],
 *  cnpj: [cnpj da produtora]
 */
router.post("/produtora", produtorasController.cadastraProdutora);
router.get("/produtoras", produtorasController.listaProdutoras);
router.get("/produtora/:produtoraId", produtorasController.buscaProdutoraId);
router.put("/produtora/:produtoraId", produtorasController.atualizaProdutora);
router.delete("/produtora/:produtoraId", produtorasController.apagaProdutora);
router.delete("/produtora/login", produtorasController.login);

router.post("/usuario", usuariosController.cadastraUsuario);
router.get("/usuarios", usuariosController.listaUsuarios);
router.get("/usuario/:usuarioId", usuariosController.buscaUsuarioId);
router.put("/usuario/:usuarioId", usuariosController.atualizaUsuario);
router.put("/usuario/favorito/:usuarioId", usuariosController.adicionaFavorito);
router.delete("/usuario/:usuarioId", usuariosController.apagaUsuario);
router.delete("/usuario/login", usuariosController.login);

module.exports = router;
