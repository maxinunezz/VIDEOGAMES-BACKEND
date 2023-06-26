require("dotenv").config();
const { Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/genres";

const getGenres = async (req, res) => {
  try {
    const response = await axios.get(`${URL}?key=${API_KEY}`);
    const filteredGenres = response.data.results.reduce((acc, el) => {
      if (
        el.name !== "RPG" &&
        el.name !== "Massively Multiplayer" &&
        el.name !== "Board Games"
      ) {
        acc.push(el);
      }
      return acc;
    }, []);

    for (const genre of filteredGenres) {
      await Genre.findOrCreate({
        where: {
          id: genre.id,
          name: genre.name,
        },
      });
    }
    const allGenres = await Genre.findAll();

    res.status(200).json(allGenres);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getGenres;
