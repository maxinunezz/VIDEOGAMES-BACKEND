const { Router } = require("express");
const router = Router();
const getVideogames = require("../controllers/getVideogames");
const getVideogamesById = require("../controllers/getVideogameById");
const getGenres = require("../controllers/getGenres");
const postVideogames = require("../controllers/postVideogames");
const getMyVideogame = require("../controllers/getMyVideogames");
const getPlatforms = require("../controllers/getPlatforms");

// Ejemplo: const authRouter = require('./auth.js');
router.get("/videogames", getVideogames);
router.get("/videogames/:idVideogame", getVideogamesById);
router.get("/genres", getGenres);
router.post("/myvideogames", postVideogames);
router.get("/myvideogames", getMyVideogame);
router.get("/platforms", getPlatforms);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
