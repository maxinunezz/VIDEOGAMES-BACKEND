require("dotenv").config();

const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games";

const getVideogames = async (req, res) => {
  try {
    const { name, page, genres } = req.query;

    const response = await axios.get(
      `${URL}?key=${API_KEY}&page=${page}&page_size=${name ? "15" : "20"}${
        name ? `&search=${name}` : ""
      }${genres ? `&genres=${genres}` : ""}`
    );

    if (response.data.results.lenght == 0) throw Error("Videogames not found");
    res.status(200).json({
      count: response.data.results.length,
      results: response.data.results,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getVideogames;
