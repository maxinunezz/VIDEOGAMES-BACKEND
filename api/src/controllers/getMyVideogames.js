const { Videogame, Genre } = require("../db");

const getMyVideogame = async (req, res) => {
  try {
    const myVideogames = await Videogame.findAll({
      include: [{ model: Genre }], //get a la db de mis videojuegos y le incluye el model genre, osea busca una relacion
    });
    res.status(200).json(myVideogames);
  } catch (error) {
    res.status(500).send("Error to get the videogame");
  }
};

module.exports = getMyVideogame;
