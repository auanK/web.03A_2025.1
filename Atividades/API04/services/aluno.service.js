const AlunoModel = require("../models/aluno.model");
const alunos = require("../data/alunos");

class AlunoService {
    static listar() {
        return alunos;
    }
}

module.exports = AlunoService
