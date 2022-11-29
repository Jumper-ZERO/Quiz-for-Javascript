export class Question {

    /**
     * 
     * @param {string} text This is the text of the question
     * @param {[]} choice this are the choices of the question
     * @param {string} answer This is the answer od the question
     * @param {string} code This is a string of code
     */

    constructor(question, choice, answer, code, descripcion) {
        this.question = question;
        this.choices = choice;
        this.answer = answer;
        this.code = code;
        this.descripcion = descripcion;
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return tre if the answer is correct
     */

    correctAnswer(choice) {
        return choice === this.answer;
    }
}