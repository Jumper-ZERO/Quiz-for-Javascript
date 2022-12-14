import { Question } from "./Question";
import hljs from 'highlight.js';

export class UI {
  constructor() {}

  /**
   *
   * @param {string} text question to render
   */

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {Question[]} choices the choices of the question
   * @param {function(string)} callback function to addListener
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerText = "";
    for (let i = 0; i < Object.keys(choices).length; i++) {
      const button = document.createElement("button");
      button.className = "button";
      button.innerText = Object.values(choices)[i];
      button.addEventListener("click", () => callback(Object.keys(choices)[i]));

      choicesContainer.appendChild(button);
    }
  }

  /**
   * 
   * @param {number} score the total score
   */

  showScores(score) {
    document.getElementById("app").innerHTML = `
    <div class="score">
      <h1>Result</h1>
      <h2>Your Score: ${score}</h2>
    </div>
    `;
  }

  /**
   * 
   * @param {number} currentChoice The current index of the quiz
   * @param {number} total The total of the quiz
   */

  showProgress(currentChoice, total) {
    const element = document.getElementById("progress")
    element.innerHTML = `Question ${currentChoice} of ${total}`
  }

  showCode(coding) {
    const code = document.querySelector('#code');
    code.innerHTML = coding;
    hljs.highlightElement(document.querySelector('pre'));
  }

  showDescripcion(descripcion, callback)  {
    const app = document.querySelector('#app');
    app.innerHTML = "";
    let title = document.createElement('h2');
    let descripcionElem = document.createElement("p");
    let devContainer = document.createElement('div');
    let buttonDescripcion = document.createElement("button");
    title.innerText = "Respuesta";
    devContainer.className = "containerDescripcion"
    buttonDescripcion.className = "buttonDescripcion";
    buttonDescripcion.innerText = "Siguiente";
    buttonDescripcion.addEventListener('click', () => callback(app));
    descripcionElem.className = "descripcion"
    descripcionElem.innerHTML = descripcion;
    app.appendChild(title);
    app.appendChild(devContainer);
    devContainer.appendChild(descripcionElem)
    devContainer.appendChild(buttonDescripcion)
  }
}
