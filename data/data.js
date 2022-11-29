export const data = [
  {
    num: 1,
    question: "¿Qué devuelve la siguiente función?",
    code: `
    function sayHi() {
      console.log(name);
      console.log(age);
      var name = "Lydia";
      let age = 21;
    }
    
    sayHi();
    `,
    choices: {
      A: "Lydia y undefined",
      B: "Lydia y ReferenceError",
      C: "ReferenceError y 21",
      D: "undefined y ReferenceError",
    },
    answer: "D",
    descripcion: `Dentro de la función, primero declaramos la variable name con la palabra reservada var. Esto significa que la variable se eleva (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino hoisting) con el valor predeterminado de indefinido, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable name, por lo que aún mantiene el valor de undefined.

    Las variables con la palabra clave let (y const) se elevan, pero a diferencia de var, no se inicializa . No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la "zona muerta temporal". Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un`,
  },
  {
    num: 2,
    question: "Que lenguaje no es orientado a objetos",
    choices: {
      A: "Lydia y undefined",
      B: "Lydia y ReferenceError",
      C: "3 3 3 y 0 1 2",
    },
    code: `
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
    }
    `,
    answer: "C",
    descripcion: `Debido a la cola de eventos en JavaScript, la función setTimeout se llama una vez el ciclo se ha ejecutado. Dado que la variable i en el primer bucle se declaró utilizando la palabra reservada var, este valor es global. Durante el bucle, incrementamos el valor de i en 1 cada vez, utilizando el operador unario ++. Cuando se invocó la función setTimeout, i era igual a 3 en el primer ejemplo.

    En el segundo bucle, la variable i se declaró utilizando la palabra reservada let: las variables declaradas con la palabra reservada let (y const) tienen un ámbito de bloque (un bloque es lo que se encuentra entre {}). Durante cada iteración, i tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.`,
  },
  {
    num: 3,
    question: "¿Qué devuelve la siguiente función?",
    code: `
    const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius
    };
    
    shape.diameter();
    shape.perimeter();
    `,
    choices: {
      A: "20 y 62.83185307179586",
      B: "20 y NaN",
      C: "20 y 63",
      D: "NaN y 63",
    },
    answer: "B",
    descripcion: `Hay que tener en cuenta aqui que el valor de diámetro es una función regular o normal, mientras que el valor de perímetro es una función de flecha.

    Con las funciones de flecha, la palabra clave this se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).
    
    No hay valor radius en ese objeto, que devuelve undefined.`,
  },
  {
    num: 4,
    question: "¿Qué devuelve la siguiente función?",
    code: `
    +true;
    !"Lydia";
    `,
    choices: {
      A: "1 y false",
      B: "false y NaN",
      C: "false y false",
    },
    answer: "A",
    descripcion: `En el primera caso se intenta convertir un operando en un número. true es 1, y false es 0.

    En el segundo caso la cadena 'Lydia' es un valor verdadero. Lo que realmente estamos preguntando es "¿es este verdadero valor falso?". Esto devuelve false.`,
  },
  {
    num: 5,
    question: "¿Cuál NO es válida?",
    choices: {
      A: "mouse.bird.size",
      B: "mouse[bird.size]",
      C: 'mouse[bird["size"]]',
      D: "Todas son correctas",
    },
    code: `
    const bird = {
      size: "small"
    };
    
    const mouse = {
      name: "Mickey",
      small: true
    };
    `,
    answer: "A",
    descripcion: `En JavaScript, todas las keys son cadenas (a menos que sea un símbolo). A pesar de que no podríamos escribirlos como cadenas, siempre funcionan como cadenas de manera interna.

    JavaScript interpreta declaraciones. Cuando usamos la notación de corchetes, ve el corchete de apertura [ y continúa hasta que encuentra el corchete de cierre ]. Solo de esta manera se evaluará la afirmación.
    
    mouse [bird.size]: Primero evalúa bird.size, que es"small". mouse ["small"] devuelve true
    
    Sin embargo, con la notación de puntos, esto no sucede. mouse no tiene una clave llamada bird, lo que significa que mouse.bird es undefined. Luego, pedimos el tamaño usando la notación de puntos: mouse.bird.size. Como mouse.bird es undefined, en realidad estamos preguntando undefined.size. Esto no es válido y generará un error similar al Cannot read property "size" of undefined`,
  },
  {
    num: 6,
    question: "¿Qué devuelve la siguiente función?",
    choices: {
      A: "Hello",
      B: "undefined",
      C: "ReferenceError",
      D: "TypeError",
    },
    code: `
    let c = { greeting: "Hey!" };
    let d;

    d = c;
    c.greeting = "Hello";
    console.log(d.greeting);
    `,
    answer: "A",
    descripcion: `
    En JavaScript, TODOS los objetos interactúan por referencia, de modo que cuando se establecen iguales o pasan a una función, todos apuntan a la misma ubicación. De esta manera cuando cambia un objeto, los cambia a todos.

Primero, la variable c tiene un valor para un objeto. Más tarde, asignamos d con la misma referencia que c tiene al objeto.
    `,
  },
  {
    num: 7,
    question: "¿Qué devuelve la siguiente función?",
    choices: {
      A: "true false true",
      B: "false false true",
      C: "true false false",
      D: "false true true",
    },
    answer: "C",
    code: `
    let a = 3;
    let b = new Number(3);
    let c = 3;
    
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);
    `,
    descripcion: `
    new Number () es un constructor de funciones incorporado. Aunque parece un número, no es realmente un número: tiene muchas características adicionales y es un objeto.

Cuando usamos el operador ==, solo verifica si tiene el mismo valor. Ambos tienen el valor de 3, por lo que devuelve true.

Sin embargo, cuando usamos el operador ===, tanto el valor como el tipo deben ser iguales. Entonces: new Number () no es un número, es un objeto. Ambos devuelven "false".
    `,
  },
  {
    num: 8,
    question: "¿Qué devuelve la siguiente función?",
    code: `
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
    `,
    choices: {
      A: "`orange`",
      B: "`purple`",
      C: "`green`",
      D: "`TypeError`",
    },
    answer: "D",
    descripcion: "La función `colorChange` es estática. Los métodos estáticos están diseñados para _vivir_ solo en el constructor en el que se crean y no se pueden transmitir a ningún elemento secundario. Como `freddie` es un niño, la función no se transmite y no está disponible en la instancia de `freddie`: por lo tanto se lanza un `TypeError`."
  },
  {
    num: 9,
    question: "¿Qué devuelve la siguiente función?",
    code: `
    let greeting;
    greetign = {}; // Typo!
    console.log(greetign);
    `,
    choices: {
      A: "`{}`",
      B: "`ReferenceError: greetign is not defined`",
      C: "`undefined`"
    },
    answer: "A",
    descripcion: `
    Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente greeting como greetign, el intérprete de JS ve esto como global.greetign = {} (o window.greetign = {} en un navegador).

    Para evitar esto, podemos usar el ["uso estricto"]. Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.
    `,
  },
  {
    num: 10,
    question: "¿Qué ocurre cuando hacemos esto?",
    code: `
    function bark() {
      console.log("Woof!");
    }
    
    bark.animal = "dog";
    `,
    choices: {
      A: "No pasa nada, es totalmente correcto.",
      B: "`SyntaxError`. No es posible agregar propiedades a una función de esta manera.",
      C: "`undefined`",
      D: "`ReferenceError`"
    },
    answer: "A",
    descripcion: `
    Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: **todo** aparte de los tipos primitivos son objetos en JS)

    Una función es un tipo especial de objeto. El código que escribes tú mismo no es la función real. La función es un objeto con propiedades. Esta propiedad es invocable.
    `
  }
];
