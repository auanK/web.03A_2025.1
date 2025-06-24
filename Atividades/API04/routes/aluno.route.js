const express = require("express");
const router = express.Router();
const alunoService = require("../services/aluno.service");
const AlunoService = require("../services/aluno.service");

router.get("/listar", (req, res) => {
  const alunos = alunoService.listar();
  res.status(200).json(alunos);
});

router.post("/criar", (req, res) => {
  const aluno = AlunoService.criar(req.body);
  if (aluno) {
    res.status(201).json(aluno);
  } else {
    res.status(400).json({ message: "Erro ao criar aluno." });
  }
});

router.delete("/apagar/:id", (req, res) => {
  const aluno = alunoService.apagar(req.params.id);
  if (aluno) {
    res.status(200).json({ message: "Aluno excluído com sucesso." });
  } else {
    res.status(404).json({ message: "Aluno não encontrado." });
  }
});

router.put("/editar/:id", (req, res) => {
  const alunoAtualizado = alunoService.editar(req.params.id, req.body);
  if (alunoAtualizado) {
    res.status(200).json(alunoAtualizado);
  } else {
    res.status(404).json({ message: "Aluno não encontrado." });
  }
});


module.exports = router;
