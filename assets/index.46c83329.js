var u=Object.defineProperty;var m=(n,e,a)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var c=(n,e,a)=>(m(n,typeof e!="symbol"?e+"":e,a),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();class p{constructor(e,a,r,o,s){this.question=e,this.choices=a,this.answer=r,this.code=o,this.descripcion=s}correctAnswer(e){return e===this.answer}}const f=[{num:1,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",code:`
    function sayHi() {
      console.log(name);
      console.log(age);
      var name = "Lydia";
      let age = 21;
    }
    
    sayHi();
    `,choices:{A:"Lydia y undefined",B:"Lydia y ReferenceError",C:"ReferenceError y 21",D:"undefined y ReferenceError"},answer:"D",descripcion:`Dentro de la funci\xF3n, primero declaramos la variable name con la palabra reservada var. Esto significa que la variable se eleva (el espacio de memoria se configura durante la fase de creaci\xF3n. Hace referencia al termino hoisting) con el valor predeterminado de indefinido, hasta que realmente llegamos a la l\xEDnea donde definimos la variable. A\xFAn no hemos definido la variable en la l\xEDnea donde intentamos registrar la variable name, por lo que a\xFAn mantiene el valor de undefined.

    Las variables con la palabra clave let (y const) se elevan, pero a diferencia de var, no se inicializa . No son accesibles antes de la l\xEDnea que los declaramos (inicializamos). Esto se llama la "zona muerta temporal". Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un`},{num:2,question:"Que lenguaje no es orientado a objetos",choices:{A:"Lydia y undefined",B:"Lydia y ReferenceError",C:"3 3 3 y 0 1 2"},code:`
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    `,answer:"C",descripcion:`Debido a la cola de eventos en JavaScript, la funci\xF3n setTimeout se llama una vez el ciclo se ha ejecutado. Dado que la variable i en el primer bucle se declar\xF3 utilizando la palabra reservada var, este valor es global. Durante el bucle, incrementamos el valor de i en 1 cada vez, utilizando el operador unario ++. Cuando se invoc\xF3 la funci\xF3n setTimeout, i era igual a 3 en el primer ejemplo.

    En el segundo bucle, la variable i se declar\xF3 utilizando la palabra reservada let: las variables declaradas con la palabra reservada let (y const) tienen un \xE1mbito de bloque (un bloque es lo que se encuentra entre {}). Durante cada iteraci\xF3n, i tendr\xE1 un nuevo valor, y cada valor se encuentra dentro del bucle.`},{num:3,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",code:`
    const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius
    };
    
    shape.diameter();
    shape.perimeter();
    `,choices:{A:"20 y 62.83185307179586",B:"20 y NaN",C:"20 y 63",D:"NaN y 63"},answer:"B",descripcion:`Hay que tener en cuenta aqui que el valor de di\xE1metro es una funci\xF3n regular o normal, mientras que el valor de per\xEDmetro es una funci\xF3n de flecha.

    Con las funciones de flecha, la palabra clave this se refiere a su \xE1mbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "per\xEDmetro", no se refiere al objeto en s\xED mismo, sino a su \xE1mbito circundante (ventana por ejemplo).
    
    No hay valor radius en ese objeto, que devuelve undefined.`},{num:4,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",code:`
    +true;
    !"Lydia";
    `,choices:{A:"1 y false",B:"false y NaN",C:"false y false"},answer:"A",descripcion:`En el primera caso se intenta convertir un operando en un n\xFAmero. true es 1, y false es 0.

    En el segundo caso la cadena 'Lydia' es un valor verdadero. Lo que realmente estamos preguntando es "\xBFes este verdadero valor falso?". Esto devuelve false.`},{num:5,question:"\xBFCu\xE1l NO es v\xE1lida?",choices:{A:"mouse.bird.size",B:"mouse[bird.size]",C:'mouse[bird["size"]]',D:"Todas son correctas"},code:`
    const bird = {
      size: "small"
    };
    
    const mouse = {
      name: "Mickey",
      small: true
    };
    `,answer:"A",descripcion:`En JavaScript, todas las keys son cadenas (a menos que sea un s\xEDmbolo). A pesar de que no podr\xEDamos escribirlos como cadenas, siempre funcionan como cadenas de manera interna.

    JavaScript interpreta declaraciones. Cuando usamos la notaci\xF3n de corchetes, ve el corchete de apertura [ y contin\xFAa hasta que encuentra el corchete de cierre ]. Solo de esta manera se evaluar\xE1 la afirmaci\xF3n.
    
    mouse [bird.size]: Primero eval\xFAa bird.size, que es"small". mouse ["small"] devuelve true
    
    Sin embargo, con la notaci\xF3n de puntos, esto no sucede. mouse no tiene una clave llamada bird, lo que significa que mouse.bird es undefined. Luego, pedimos el tama\xF1o usando la notaci\xF3n de puntos: mouse.bird.size. Como mouse.bird es undefined, en realidad estamos preguntando undefined.size. Esto no es v\xE1lido y generar\xE1 un error similar al Cannot read property "size" of undefined`},{num:6,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",choices:{A:"Hello",B:"undefined",C:"ReferenceError",D:"TypeError"},code:`
    let c = { greeting: "Hey!" };
    let d;

    d = c;
    c.greeting = "Hello";
    console.log(d.greeting);
    `,answer:"A",descripcion:`
    En JavaScript, TODOS los objetos interact\xFAan por referencia, de modo que cuando se establecen iguales o pasan a una funci\xF3n, todos apuntan a la misma ubicaci\xF3n. De esta manera cuando cambia un objeto, los cambia a todos.

Primero, la variable c tiene un valor para un objeto. M\xE1s tarde, asignamos d con la misma referencia que c tiene al objeto.
    `},{num:7,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",choices:{A:"true false true",B:"false false true",C:"true false false",D:"false true true"},answer:"C",code:`
    let a = 3;
    let b = new Number(3);
    let c = 3;
    
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
    `,descripcion:`
    new Number () es un constructor de funciones incorporado. Aunque parece un n\xFAmero, no es realmente un n\xFAmero: tiene muchas caracter\xEDsticas adicionales y es un objeto.

Cuando usamos el operador ==, solo verifica si tiene el mismo valor. Ambos tienen el valor de 3, por lo que devuelve true.

Sin embargo, cuando usamos el operador ===, tanto el valor como el tipo deben ser iguales. Entonces: new Number () no es un n\xFAmero, es un objeto. Ambos devuelven "false".
    `},{num:8,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",code:`
    class Chameleon {
      static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
      }
    
      constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
      }
    }
    
    const freddie = new Chameleon({ newColor: "purple" });
    freddie.colorChange("orange");
    `,choices:{A:"`orange`",B:"`purple`",C:"`green`",D:"`TypeError`"},answer:"D",descripcion:"La funci\xF3n `colorChange` es est\xE1tica. Los m\xE9todos est\xE1ticos est\xE1n dise\xF1ados para _vivir_ solo en el constructor en el que se crean y no se pueden transmitir a ning\xFAn elemento secundario. Como `freddie` es un ni\xF1o, la funci\xF3n no se transmite y no est\xE1 disponible en la instancia de `freddie`: por lo tanto se lanza un `TypeError`."},{num:9,question:"\xBFQu\xE9 devuelve la siguiente funci\xF3n?",code:`
    let greeting;
    greetign = {}; // Typo!
    console.log(greetign);
    `,choices:{A:"`{}`",B:"`ReferenceError: greetign is not defined`",C:"`undefined`"},answer:"A",descripcion:`
    Lo que hace JS aqu\xED es registrar el objeto debido a que acabamos de crear un objeto vac\xEDo en el objeto global. Cuando escribimos err\xF3neamente greeting como greetign, el int\xE9rprete de JS ve esto como global.greetign = {} (o window.greetign = {} en un navegador).

    Para evitar esto, podemos usar el ["uso estricto"]. Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.
    `},{num:10,question:"\xBFQu\xE9 ocurre cuando hacemos esto?",code:`
    function bark() {
      console.log("Woof!");
    }
    
    bark.animal = "dog";
    `,choices:{A:"No pasa nada, es totalmente correcto.",B:"`SyntaxError`. No es posible agregar propiedades a una funci\xF3n de esta manera.",C:"`undefined`",D:"`ReferenceError`"},answer:"A",descripcion:`
    Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: **todo** aparte de los tipos primitivos son objetos en JS)

    Una funci\xF3n es un tipo especial de objeto. El c\xF3digo que escribes t\xFA mismo no es la funci\xF3n real. La funci\xF3n es un objeto con propiedades. Esta propiedad es invocable.
    `}],d=f.map(n=>new p(n.question,n.choices,n.answer,n.code,n.descripcion));class g{constructor(e){c(this,"questionIndex",0);c(this,"score",0);this.questions=e}getQuestionIndex(){return this.questions[this.questionIndex]}isEnded(){return this.questions.length===this.questionIndex}guess(e){console.log(e),this.getQuestionIndex().correctAnswer(e)&&this.score++,this.questionIndex++}}class v{constructor(){}showQuestion(e){const a=document.getElementById("question");a.innerText=e}showChoices(e,a){const r=document.getElementById("choices");r.innerText="";for(let o=0;o<Object.keys(e).length;o++){const s=document.createElement("button");s.className="button",s.innerText=Object.values(e)[o],s.addEventListener("click",()=>a(Object.keys(e)[o])),r.appendChild(s)}}showScores(e){document.getElementById("app").innerHTML=`
    <div class="score">
      <h1>Result</h1>
      <h2>Your Score: ${e}</h2>
    </div>
    `}showProgress(e,a){const r=document.getElementById("progress");r.innerHTML=`Question ${e} of ${a}`}showCode(e){const a=document.querySelector("#code");a.innerHTML=e,hljs.highlightElement(document.querySelector("pre"))}showDescripcion(e,a){const r=document.querySelector("#app");r.innerHTML="";let o=document.createElement("h2"),s=document.createElement("p"),i=document.createElement("div"),t=document.createElement("button");o.innerText="Respuesta",i.className="containerDescripcion",t.className="buttonDescripcion",t.innerText="Siguiente",t.addEventListener("click",()=>a(r)),s.className="descripcion",s.innerHTML=e,r.appendChild(o),r.appendChild(i),i.appendChild(s),i.appendChild(t)}}const l=(n,e)=>{n.isEnded()?e.showScores(n.score):(e.showQuestion(n.getQuestionIndex().question),e.showCode(n.getQuestionIndex().code),e.showChoices(n.getQuestionIndex().choices,a=>{n.getQuestionIndex().correctAnswer(a)?(n.guess(a),l(n,e)):e.showDescripcion(n.getQuestionIndex().descripcion,r=>{r.innerHTML=`
          <h1>Quiz</h1>
          <h2 id="question"></h2>
          <pre class="language-javascript" id="code"></pre>
          <div id="choices"></div>
          <footer>
            <p id="progress"></p>
          </footer>
          `,n.questionIndex++,l(n,e)})}),e.showProgress(n.questionIndex+1,d.length))};function b(){const n=new g(d),e=new v;l(n,e)}b();
