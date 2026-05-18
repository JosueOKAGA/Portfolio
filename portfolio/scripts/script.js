'use strict';

// =========================
// BOTÃO MODO CLARO/ESCURO
// =========================

const botao = document.getElementById("modoClaroEscuro");

botao.addEventListener("click", function () {

  document.body.classList.toggle("modo-claro");

  if (document.body.classList.contains("modo-claro")) {

    botao.innerText = "🌙 Modo Escuro";

  } else {

    botao.innerText = "☀️ Modo Claro";
  }
});

// =========================
// DADOS PESSOAIS
// =========================

const nome = "Josué Felipe";

let tituloProfissional =
  "Desenvolvedor de Sistemas";

let minhaBio =
  "Sou um aluno de DS pronto para aprender a cada dia.";

// =========================
// DATAS
// =========================

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let hoje = new Date();

let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1;
let diaAtual = hoje.getDate();

// =========================
// CÁLCULO DE TEMPO
// =========================

let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;

// AJUSTE DOS MESES

if (meses < 0) {

  meses += 12;
  anos--;
}

// =========================
// MOSTRAR DADOS NO HTML
// =========================

document.getElementById("meuNome").innerText =
  nome;

document.getElementById("tituloProfissional").innerText =
  tituloProfissional;

document.getElementById("minhaBio").innerText =
  minhaBio;

document.getElementById("anoFormatura").innerText =
  `Ano de formatura: ${anoFormatura}`;

// =========================
// TEMPO RESTANTE
// =========================

if (anos <= 0 && meses <= 0 && dias <= 0) {

  document.getElementById("tempoRestante").innerText =
    "✅ Curso concluído!";

} else {

  document.getElementById("tempoRestante").innerText =
    `⏳ Faltam ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}

// =========================
// DIA DA SEMANA
// =========================

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

document.getElementById("diaSemana").innerText =
  `📅 Hoje é: ${diaEscrito}`;

// =========================
// QUIZ
// =========================

const btnVisual =
  document.getElementById("btn-visual");

const btnLogica =
  document.getElementById("btn-logica");

const resultadoQuiz =
  document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function () {

  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Tecnologias: HTML, CSS, React.
  `;
});

btnLogica.addEventListener("click", function () {

  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Tecnologias: Node.js, Python, SQL.
  `;
});

// =========================
// LINGUAGEM FAVORITA
// =========================

const linguagem =
  document.getElementById("linguagem");

const btnLinguagem =
  document.getElementById("btnLinguagem");

const resultadoLinguagem =
  document.getElementById("resultadoLinguagem");

btnLinguagem.addEventListener("click", function () {

  let valor = linguagem.value;

  if (valor === "") {

    resultadoLinguagem.innerText =
      "⚠️ Escolha uma linguagem.";

  } else if (valor === "Java") {

    resultadoLinguagem.innerText =
      "☕ Você gosta de Back-End robusto!";

  } else if (valor === "Python") {

    resultadoLinguagem.innerText =
      "🐍 Você gosta de automação e IA!";

  } else {

    resultadoLinguagem.innerText =
      "💻 Você gosta de desenvolvimento Web!";
  }
});

// =========================
// VALIDAÇÃO DE NOME
// =========================

const inputNome =
  document.getElementById("inputNome");

const btnValidar =
  document.getElementById("btnValidar");

const resultadoNome =
  document.getElementById("resultadoNome");

btnValidar.addEventListener("click", function () {

  let nomeDigitado = inputNome.value;

  if (nomeDigitado === "") {

    resultadoNome.innerText =
      "⚠️ Digite um nome.";

  } else if (nomeDigitado.length < 3) {

    resultadoNome.innerText =
      "⚠️ Nome muito curto.";

  } else if (!isNaN(nomeDigitado)) {

    resultadoNome.innerText =
      "⚠️ Nome inválido.";

  } else {

    resultadoNome.innerText =
      `✅ Olá, ${nomeDigitado}!`;
  }
});

// =========================
// PROJETOS
// =========================

let projetos = [

  {
    nome: "Aplicação de Estacionamento",

    tecnologias: [
      "Python",
      "Tkinter",
      "fpdf"
    ]
  },

  {
    nome: "Aplicação de Caixa Eletrônico",

    tecnologias: [
      "Java",
      "SQL"
    ]
  }
];

// =========================
// MOSTRAR PROJETOS
// =========================

function mostrarProjetos() {

  const listaProjetos =
    document.getElementById("listaProjetos");

  for (let projeto of projetos) {

    let titulo =
      document.createElement("h3");

    titulo.textContent =
      `${projeto.nome} (${projeto.tecnologias.length} tecnologias)`;

    listaProjetos.appendChild(titulo);

    let lista =
      document.createElement("ul");

    for (let tecnologia of projeto.tecnologias) {

      let item =
        document.createElement("li");

      item.textContent = tecnologia;

      lista.appendChild(item);
    }

    listaProjetos.appendChild(lista);
  }
}

mostrarProjetos();