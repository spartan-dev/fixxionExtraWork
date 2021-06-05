/**
 * preguntas desde objeto
 * seleccionar la respuesta
 * mostrar el score
 * recursos
 * https://www.uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924
 * https://fonts.google.com/
 * https://www.eggradients.com/
 * https://coolors.co/
 * instalar TabNine
 *
 * tarea poner las respuestas corectas en el final 💀 💀
 */

//1.-globales
const quizData = [
  {
    question: "quien es el presidente de mexico",
    a: "pato donald",
    b: "goku",
    c: "el cabecita de algodon",
    d: "bugs bunny",
    correct: "c",
  },
  {
    question: "cual es el lenguaje mas usado de programacion",
    a: "Javascript",
    b: "Java",
    c: "c#",
    d: "Python",
    correct: "a",
  },
  {
    question: "Cual es la mejor banda de metal",
    a: "Metallica",
    b: "Slayer",
    c: "Cepillin",
    d: "Comander",
    correct: "d",
  },
  {
    question: "Cual es la mejor cerveza",
    a: "Victoria",
    b: "Modelo",
    c: "Indio",
    d: "Corona",
    correct: "a",
  },
  {
    question: "Quien le gano a goku en el torneo de las artes marciales",
    a: "Roshi",
    b: "Cell",
    c: "krilin",
    d: "Bulma",
    correct: "a",
  },
];

let currentQuiz = 0;
let score = 0;
const quiz = document.querySelector("#quiz");
const questionElement = document.querySelector("#question");
const answerElements = document.querySelectorAll(".answer");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
//crear preguntas
//2.-maquetado
// en html una parte container / h2 / boton submit checks ul>li*4>input+label
//estilos y clases
//3.-colocacion
//4.-funciones
loadQuiz();
function loadQuiz() {
  deleteAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

const getSelected = () => {
  let answer = undefined;
  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};
function deleteAnswers() {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

//5.-listeners
submitBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 10;
    }
    currentQuiz++;
    console.log(currentQuiz, "score", score);
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Has responsido todas las preguntas </h2>
        <div><h2>Tu score: ${score}</h2> <h2> De ${quizData.length} Preguntas</h2>  </div>
        <button onclick="location.reload()">Recargar</button>
      `;
    }
  }
});
//6.-invocaciones
