const express = require("express");
const router = express.Router();
const alunoService = require("../services/aluno.service");

router.get("/", (req, res) => {
  const alunos = alunoService.listar();
  res.status(200).json(alunos);
});

module.exports = router;
