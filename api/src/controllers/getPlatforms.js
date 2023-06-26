require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/platforms";

const getPlatforms = async (req, res) => {
  try {
    const response = await axios.get(`${URL}?key=${API_KEY}`);
    const plataformas = response.data.results;

    res.status(200).json(plataformas);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getPlatforms;
