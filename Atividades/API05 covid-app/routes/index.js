var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const API_URL = "https://covid19-brazil-api.now.sh/api/report/v1";
router.get("/api/estados", async function (req, res, next) {
  try {
    const apiResponse = await fetch(API_URL);
    const jsonData = await apiResponse.json();

    res.status(200).json(jsonData.data);
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar dados dos estados." });
  }
});

const API_URL_PAISES =
  "https://covid19-brazil-api.now.sh/api/report/v1/countries";
router.get("/api/paises", async function (req, res, next) {
  try {
    const apiResponse = await fetch(API_URL_PAISES);
    const jsonData = await apiResponse.json();
    res.json(jsonData.data);
  } catch (error) {
    res.status(500).json({ message: "Falha ao buscar dados dos países." });
  }
});

module.exports = router;
