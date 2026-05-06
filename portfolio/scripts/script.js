const NOME = "Josué Felipe";
let tituloProfissional = "nada";
let minhaBio = "Sou um aluno de DS pronto para aprender a cada dia";



let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvimento de Sistemas",
        semestre: 3,
            disciplinaAtual: "Linguagem de Programação"
            };

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;



let hoje = new Date(); //dia atual
let mesAtual = hoje.getMonth() + 1; // mes atual (0-11 por isso o +1)
let anoAtual = hoje.getFullYear(); //ano atual
let diaAtual = hoje.getDate();  //dia atual




let numeroMesFormatura = 12;
let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;












if (meses <= 0 && dias <= 0 && anos <= 0) {
    document.getElementById("tempoRestante").innerText = 'Curso já concluído';
}
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestante").innerText = '-';
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestante").innerText = `Tempo restante: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestante").innerText = `Tempo restante: ${anoFormatura - anoAtual} anos`;
}



document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.write(`<p> Ano de Ingresso: ${anoIngresso}</p>`);


let diaSemana = hoje.getDay() + 1;

let diaescrito;

switch (diaSemana) {
    case 1: diaescrito = "Segunda-feira"; break;
    case 2: diaescrito = "Terça-feira"; break; 
    case 3: diaescrito = "Quarta-feira"; break;
    case 4: diaescrito = "Quinta-feira"; break;
    case 5: diaescrito = "Sexta-feira"; break;
    case 6: diaescrito = "Sábado"; break;
    case 7: diaescrito = "Domingo"; break;
    default: diaescrito = "Dia inválido"; 

}


document.write(`<p> Hoje é ${diaescrito} </p>`);