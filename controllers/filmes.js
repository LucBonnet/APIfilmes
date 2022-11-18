const db = require("../database/db.json");

const listaFilmes = async (req, res) => {
    let filmes = db.filmes;
    filmes = filmes.map((filme) => ({
        ...filme,
        url: `https://www.youtube.com/watch?v=${filme.id}`,
    }));

    return res.status(200).json(filmes);
};

const buscaFilmeById = async (req, res) => {
    const filmeId = req.params.filmeId;

    let filme = db.filmes.find(({ id }) => id == filmeId);
    filme = { ...filme, url: `https://www.youtube.com/watch?v=${filme.id}` };

    if (filme) {
        return res.status(200).json(filme);
    }

    return res.status(404).send(new Error("Not Found"));
};

module.exports = {
    listaFilmes,
    buscaFilmeById,
};
