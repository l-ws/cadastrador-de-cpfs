const pessoas = require('./pessoas.json');
const pessoasCasadas = pessoas.filter((pessoa)=> pessoa.casado === true );
console.table(pessoasCasadas);

