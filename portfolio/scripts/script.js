'use strict';

// BOTÃO
const botao = document.getElementById("modoClaroEscuro");

// DADOS PESSOAIS
const nome = "Josué Felipe";
let tituloProfissional = "Desenvolvedor de Sistemas";
let minhaBio = "Sou um aluno de DS pronto para aprender a cada dia";

// DATAS
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let hoje = new Date();

let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1;
let diaAtual = hoje.getDate();

// CÁLCULO DE TEMPO
let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;

// AJUSTE DOS MESES
if (meses < 0) {
  meses += 12;
  anos--;
}

// CONSOLE
console.log(botao);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof nome);

// HTML
document.getElementById("meuNome").innerText = nome;
document.getElementById("títuloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;

document.getElementById("anoFormatura").innerText =
  `Ano de formatura: ${anoFormatura}`;

// TEMPO RESTANTE
if (anos <= 0 && meses <= 0 && dias <= 0) {

  document.getElementById("temporRestante").innerText =
    "Curso Concluído";

} else {

  document.getElementById("temporRestante").innerText =
    `Faltam ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`;
}

// DIA DA SEMANA
let diaSemana = hoje.getDay();
let diaEscrito = "";

switch (diaSemana) {

  case 0:
    diaEscrito = "Domingo";
    break;

  case 1:
    diaEscrito = "Segunda-feira";
    break;

  case 2:
    diaEscrito = "Terça-feira";
    break;

  case 3:
    diaEscrito = "Quarta-feira";
    break;

  case 4:
    diaEscrito = "Quinta-feira";
    break;

  case 5:
    diaEscrito = "Sexta-feira";
    break;

  case 6:
    diaEscrito = "Sábado";
    break;

  default:
    diaEscrito = "Dia inválido";
}

document.write(`<p>Hoje é: ${diaEscrito}</p>`);

// QUIZ
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function () {

  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Tecnologias: HTML, CSS, React, Vue.
  `;
});

btnLogica.addEventListener("click", function () {

  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Tecnologias: Node.js, Python, SQL.
  `;
});

// PROJETOS
let projetos = [

  {
    nome: "Aplicação de Estacionamento",
    tecnologias: ["Python", "Tkinter", "fpdf"],
    conhecimento: ["VSCode", "GitHub", "pip"]
  },

  {
    nome: "Aplicação de Caixa Eletrônico",
    tecnologias: ["Java", "SQL"]
  }
];

// FUNÇÃO
function mostrarProjetos() {

  for (let projeto of projetos) {

    let titulo = document.createElement("h2");
    titulo.textContent = projeto.nome;

    document.body.appendChild(titulo);

    let lista = document.createElement("ul");

    for (let tecnologia of projeto.tecnologias) {

      let item = document.createElement("li");

      item.textContent = tecnologia;

      lista.appendChild(item);
    }

    document.body.appendChild(lista);
  }
}

// CHAMAR FUNÇÃO
mostrarProjetos();

