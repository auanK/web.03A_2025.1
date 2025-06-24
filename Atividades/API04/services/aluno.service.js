const AlunoModel = require("../models/aluno.model");
const alunos = require("../data/alunos");

let id = alunos.length > 0 ? Math.max(...alunos.map(aluno => aluno.id)) : 0;

class AlunoService {
    static listar() {
        return alunos;
    }

    static criar(aluno) {
      const novoAluno = new AlunoModel(
        ++id,
        aluno.nome,
        aluno.curso,
        aluno.ira
      );
      alunos.push(novoAluno);
       return novoAluno;
    }

    static apagar(id) {
        const index = alunos.findIndex((aluno) => aluno.id == id);
        if (index !== -1) {
            alunos.splice(index, 1);
            return true;
        }
        return false;
    }

    static editar(id, alunoAtualizado) {
        const index = alunos.findIndex((aluno) => aluno.id == id);
        if (index !== -1) {
            alunos[index] = { ...alunos[index], ...alunoAtualizado };
            return alunos[index];
        }
        return null;
    }


}

module.exports = AlunoService
