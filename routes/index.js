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
 *  link: [link do video do Youtube],
 *  titulo: [título do filme],
 *  sinopse: [sinopse do filme],
 *  ano: [ano de lançamento do filme],
 *  direcao: [array com o nome dos diretores e diretoras do filme],
 *  generos: [array com os gêneros do filme],
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
/**
 * Buscar filmes pelo código da produtora
 *
 * id_produtora: [código da produtora]
 */
router.get(
  "/filmes/produtora/:id_produtora",
  filmesController.buscaFilmesPelaProdutora
);
/**
 * Atualizar filme
 *
 * filmeId: [código do video do Youtube]
 */
router.put("/filme/:filmeId", filmesController.atualizaFilme);
/**
 * Excluir filme
 *
 * filmeId: [código do video do Youtube]
 */
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
/**
 * Buscar produtora pelo email e senha
 */
router.get("/produtora/login", produtorasController.login);
/**
 * Buscar todas as produtoras
 */
router.get("/produtoras", produtorasController.listaProdutoras);
/**
 * Buscar proidutora pelo id
 *
 * produtoraId: [código da produtora]
 */
router.get("/produtora/:produtoraId", produtorasController.buscaProdutoraId);
/**
 * Atualizar proidutora
 *
 * produtoraId: [código da produtora]
 */
router.put("/produtora/:produtoraId", produtorasController.atualizaProdutora);
/**
 * Excluir proidutora
 *
 * produtoraId: [código da produtora]
 */
router.delete("/produtora/:produtoraId", produtorasController.apagaProdutora);

/**
 *  Adicionar usuário
 *
 *  nome: [nome do usuário],
 *  email: [email do usuário],
 *  senha: [senbha de acesso],
 *  favoritos: [lista com o código dos filmes favoritos]
 */
router.post("/usuario", usuariosController.cadastraUsuario);
/**
 * Buscar produtora pelo email e senha
 */
router.get("/usuario/login", usuariosController.login);
/**
 * Buscar todos os usuários
 */
router.get("/usuarios", usuariosController.listaUsuarios);
/**
 * Buscar usuário pelo id
 *
 * usuarioId: [código do usuário]
 */
router.get("/usuario/:usuarioId", usuariosController.buscaUsuarioId);
/**
 * Atualizar usuário
 *
 * usuarioId: [código do usuário]
 */
router.put("/usuario/:usuarioId", usuariosController.atualizaUsuario);
/**
 * Adicionar um filme aos favoritos
 *
 * usuarioId: [código do usuário]
 *
 * body: {
 *  filmeId: [código do video do Youtube]
 * }
 */
router.put(
  "/usuario/favorito/adicionar/:usuarioId",
  usuariosController.adicionaFavorito
);
/**
 * Remover um filme dos favoritos
 *
 * usuarioId: [código do usuário]
 *
 * body: {
 *  filmeId: [código do video do Youtube]
 * }
 */
router.put(
  "/usuario/favorito/remover/:usuarioId",
  usuariosController.removeFavorito
);
/**
 * Excluir um usuário
 *
 * usuarioId: [código do usuário]
 */
router.delete("/usuario/:usuarioId", usuariosController.apagaUsuario);

module.exports = router;
