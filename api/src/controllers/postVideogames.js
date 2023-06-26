const { Genre, Videogame } = require("../db");

const postVideogames = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.name ||
      !body.description ||
      !body.platforms ||
      !body.image ||
      !body.releaseDate ||
      !body.rating ||
      !body.genre
    )
      return res.status(401).send("I need more information");
    //busca en la db un genero donde el name coincida con el genre que le paso por body
    const existingGenres = await Genre.findAll({
      where: {
        name: body.genre,
      },
    });

    if (!existingGenres) {
      return res.status(404).send("Genre do not exist");
    }
    const videogame = await Videogame.create({
      name: body.name,
      description: body.description,
      platforms: body.platforms.join(","),
      image: body.image,
      releaseDate: body.releaseDate,
      rating: body.rating,
    });

    //ahi se establece la relacion entre el videjuego creado y el genro encontrado anteriormente
    await videogame.addGenres(existingGenres);

    res.status(200).send("Videogame created");
  } catch (error) {
    console.log(error);
    res.status(404).send("we cannot crate the videogame");
  }
};

module.exports = postVideogames;
