require("dotenv").config();

const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games";

const getVideogamesById = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    const response = await axios.get(`${URL}/${idVideogame}?key=${API_KEY}`);

    if (response.data.results === 0) throw Error("Videogame not found");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getVideogamesById;
