// @ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz Quiz object
 * @param {UI} ui UI object
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showCode(quiz.getQuestionIndex().code);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      if (quiz.getQuestionIndex().correctAnswer(currentChoice)) {
        quiz.guess(currentChoice);
        renderPage(quiz, ui);
      } else {
        ui.showDescripcion(quiz.getQuestionIndex().descripcion, (/** @type {{ innerHTML: string; }} */ app) => {
          app.innerHTML = `
          <h1>Quiz</h1>
          <h2 id="question"></h2>
          <pre class="language-javascript" id="code"></pre>
          <div id="choices"></div>
          <footer>
            <p id="progress"></p>
          </footer>
          `;
          quiz.questionIndex++
          renderPage(quiz, ui)
        });
      };
    });
    ui.showProgress(quiz.questionIndex + 1, questions.length)
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
