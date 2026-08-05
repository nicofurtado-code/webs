const courseData = [
    {
        id: 1,
        title: "Unidad 1: Hola Mundo y Variables",
        icon: "fa-rocket",
        theory: `
            <h2>¡Bienvenido al mundo del código! 🚀</h2>
            <p>Programar es darle instrucciones precisas a una computadora para que resuelva problemas o cree cosas geniales (como videojuegos, apps o IA).</p>
            <h3>1. La función <code>print()</code></h3>
            <p>Es la forma en que Python "habla" contigo. Muestra mensajes en la pantalla.</p>
            <h3>2. Variables: Cajas de almacenamiento</h3>
            <p>Imagina que una variable es una caja donde guardas datos. Le pones una etiqueta (nombre) y dentro guardas un valor (texto, número, etc.).</p>
            <ul>
                <li><b>Texto (String):</b> Siempre va entre comillas. Ejemplo: <code>"Hola"</code></li>
                <li><b>Números Enteros (Int):</b> Números sin decimales. Ejemplo: <code>15</code></li>
                <li><b>Decimales (Float):</b> Llevan punto. Ejemplo: <code>9.5</code></li>
            </ul>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code># Muestra un mensaje en pantalla
print("¡Hola! Bienvenido al curso de Python")

# Crear variables
nombre = "Alex"
edad = 15
altura = 1.72

print(nombre)
print("Tu edad es:", edad)</code></pre>
        `,
        exercises: [
            {
                task: "Crea una variable llamada `videojuego_favorito` con el nombre de tu juego preferido y muéstrala en pantalla con un mensaje.",
                solution: "videojuego_favorito = 'Minecraft'\nprint('Mi juego favorito es:', videojuego_favorito)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál de las siguientes líneas de código crea correctamente una variable con texto?",
                options: [
                    "mi_variable = Hola",
                    "mi_variable = 'Hola'",
                    "variable 'Hola'",
                    "print(Hola)"
                ],
                correct: 1
            },
            {
                question: "¿Qué tipo de dato es el número 15.5?",
                options: [
                    "String",
                    "Integer",
                    "Float",
                    "Boolean"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 2,
        title: "Unidad 2: Entradas y Condicionales (Toma de decisiones)",
        icon: "fa-code-branch",
        theory: `
            <h2>Haciendo programas inteligentes 🧠</h2>
            <p>Hasta ahora tus programas ejecutan líneas en orden estricto. Con las condicionales, tu programa puede <b>tomar decisiones</b> según la situación.</p>
            <h3>1. Pedir datos con <code>input()</code></h3>
            <p>Permite al usuario escribir información. Ojo: todo lo que entra por <code>input()</code> entra como texto (String).</p>
            <h3>2. Control de flujo: <code>if</code>, <code>elif</code>, <code>else</code></h3>
            <p>Permite ejecutar código solo si se cumple una condición.</p>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code>edad = int(input("¿Cuántos años tienes? "))

if edad >= 18:
    print("Eres mayor de edad. ¡Puedes votar!")
elif edad >= 13:
    print("Eres un adolescente.")
else:
    print("Eres un niño.")</code></pre>
        `,
        exercises: [
            {
                task: "Escribe un programa que pida una contraseña. Si ingresa 'python123', muestra 'Acceso concedido', de lo contrario 'Acceso denegado'.",
                solution: "pass_user = input('Ingresa clave: ')\nif pass_user == 'python123':\n    print('Acceso concedido')\nelse:\n    print('Acceso denegado')"
            }
        ],
        quiz: [
            {
                question: "¿Qué operador se utiliza para comparar si dos valores son EXACTAMENTE iguales?",
                options: [
                    "=",
                    "==",
                    "===",
                    "!="
                ],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        title: "Unidad 3: Bucles (Repetición sin cansancio)",
        icon: "fa-rotate-right",
        theory: `
            <h2>Ahorra tiempo repitiendo código 🔄</h2>
            <p>Los bucles sirven para ejecutar un bloque de código muchas veces sin tener que escribirlo una y otra vez.</p>
            <h3>1. Bucle <code>for</code></h3>
            <p>Ideal cuando sabes exactamente cuántas veces quieres repetir algo.</p>
            <h3>2. Bucle <code>while</code></h3>
            <p>Repite el código <b>mientras</b> una condición siga siendo verdadera.</p>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code># Bucle FOR para contar del 1 al 5
for i in range(1, 6):
    print("Número:", i)

# Bucle WHILE
contador = 3
while contador > 0:
    print("Cuenta regresiva:", contador)
    contador -= 1
print("¡Despegue! 🚀")</code></pre>
        `,
        exercises: [
            {
                task: "Crea un bucle 'for' que muestre la tabla de multiplicar del 5 (del 5x1 al 5x10).",
                solution: "for i in range(1, 11):\n    print('5 x', i, '=', 5 * i)"
            }
        ],
        quiz: [
            {
                question: "¿Qué pasa si la condición de un bucle 'while' nunca se vuelve falsa?",
                options: [
                    "El programa se borra",
                    "Se genera un bucle infinito y se traba el programa",
                    "Python lo corrige automáticamente",
                    "El bucle se ejecuta solo 100 veces"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "Unidad 4: Estructuras de Datos (Listas)",
        icon: "fa-list-ol",
        theory: `
            <h2>Colecciones de información 📦</h2>
            <p>Imagina que quieres guardar la lista de compras o un inventario de un juego. No crearías 50 variables separadas; usarías una <b>Lista</b>.</p>
            <h3>Propiedades de las Listas:</h3>
            <ul>
                <li>Van entre corchetes <code>[ ]</code>.</li>
                <li>Los elementos están ordenados y el primer elemento empieza en el índice <b>0</b>.</li>
                <li>Puedes agregar items con <code>.append()</code>.</li>
            </ul>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code># Crear una lista
miflores = ["Rosa", "Girasol", "Tulipán"]

# Acceder al primer elemento
print(miflores[0]) # Imprime: Rosa

# Agregar un elemento
miflores.append("Orquídea")

# Recorrer la lista
for flor in miflores:
    print("Flor:", flor)</code></pre>
        `,
        exercises: [
            {
                task: "Crea una lista llamada `amigos` con 3 nombres. Agrega un cuarto nombre usando `.append()` y muestra el total de amigos usando `len(amigos)`.",
                solution: "amigos = ['Sofía', 'Lucas', 'Mateo']\namigos.append('Valeria')\nprint('Tengo', len(amigos), 'amigos en la lista.')"
            }
        ],
        quiz: [
            {
                question: "Si tenemos la lista `frutas = ['Manzana', 'Banana', 'Uva']`, ¿cuál es el índice de 'Banana'?",
                options: [
                    "1",
                    "2",
                    "0",
                    "-1"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 5,
        title: "Unidad 5: Funciones (Tus propios comandos)",
        icon: "fa-gears",
        theory: `
            <h2>Escribe código modular y reutilizable 🛠️</h2>
            <p>Una <b>función</b> es un bloque de código con un nombre asignado que realiza una tarea específica. Solo se ejecuta cuando la "llamas".</p>
            <p>Se definen usando la palabra clave <code>def</code>.</p>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code># Definir la función
def saludar_usuario(nombre):
    print("¡Hola", nombre, "! Bienvenido a la clase.")

# Llamar a la función
saludar_usuario("Carlos")
saludar_usuario("María")

# Función que retorna un valor
def sumar(a, b):
    return a + b

resultado = sumar(10, 5)
print("Resultado:", resultado)</code></pre>
        `,
        exercises: [
            {
                task: "Crea una función llamada `es_par(numero)` que reciba un número y devuelva True si es par o False si es impar.",
                solution: "def es_par(numero):\n    if numero % 2 == 0:\n        return True\n    else:\n        return False\n\nprint(es_par(4)) # Imprime True"
            }
        ],
        quiz: [
            {
                question: "¿Qué palabra reservada se usa para devolver un valor desde una función?",
                options: [
                    "send",
                    "output",
                    "return",
                    "give"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 6,
        title: "Unidad 6: Programación Orientada a Objetos (POO)",
        icon: "fa-cubes",
        theory: `
            <h2>Modelando el mundo real 🌐</h2>
            <p>La POO es un paradigma donde creamos "moldes" llamados <b>Clases</b> para fabricar <b>Objetos</b> que contienen atributos (características) y métodos (acciones).</p>
            <p>Pensalo como un personaje de videojuego: tiene atributos (vida, fuerza) y métodos (atacar, saltar).</p>
        `,
        examples: `
            <h3>Ejemplos de Código:</h3>
            <pre><code>class Personaje:
    def __init__(self, nombre, fuerza):
        self.nombre = nombre
        self.fuerza = fuerza
        self.vida = 100

    def atacar(self):
        print(self.nombre, "ataca causando", self.fuerza, "de daño.")

# Crear objetos (Instanciación)
jugador1 = Personaje("Goku", 50)
jugador1.atacar()</code></pre>
        `,
        exercises: [
            {
                task: "Crea una clase `Mascota` con atributo `nombre` y un método `ladrar()` que imprima '¡Guau guau!'.",
                solution: "class Mascota:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    def ladrar(self):\n        print(self.nombre, 'dice: ¡Guau guau!')\n\nmi_perro = Mascota('Firulais')\nmi_perro.ladrar()"
            }
        ],
        quiz: [
            {
                question: "¿Qué método especial se ejecuta automáticamente cuando se crea un nuevo objeto en una clase?",
                options: [
                    "def start()",
                    "def __init__()",
                    "def main()",
                    "def create()"
                ],
                correct: 1
            }
        ]
    }
];

// Lógica de Renderizado
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("unit-menu");
    const contentContainer = document.getElementById("unit-content");
    const unitTitle = document.getElementById("unit-title");
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    // Generar Botones del Menú
    courseData.forEach((unit, index) => {
        const btn = document.createElement("button");
        btn.classList.add("unit-btn");
        if (index === 0) btn.classList.add("active");
        btn.innerHTML = `<i class="fa-solid ${unit.icon}"></i> ${unit.title}`;
        btn.onclick = () => selectUnit(index);
        menuContainer.appendChild(btn);
    });

    // Cargar la Primera Unidad por defecto
    loadUnit(0);

    function selectUnit(index) {
        document.querySelectorAll(".unit-btn").forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
        loadUnit(index);
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
        }
    }

    function loadUnit(index) {
        const unit = courseData[index];
        unitTitle.textContent = unit.title;

        let html = `
            <div class="section-block">
                ${unit.theory}
            </div>

            <div class="section-block">
                ${unit.examples}
            </div>

            <div class="section-block">
                <h2><i class="fa-solid fa-pen-to-square"></i> Ejercicios Prácticos</h2>
                ${unit.exercises.map((ex, i) => `
                    <div class="exercise-box">
                        <p><b>Reto ${i + 1}:</b> ${ex.task}</p>
                        <button class="solution-btn" onclick="toggleSolution(${i})">Ver Solución</button>
                        <pre id="sol-${i}" style="display:none; margin-top:10px;"><code>${ex.solution}</code></pre>
                    </div>
                `).join('')}
            </div>

            <div class="section-block">
                <h2><i class="fa-solid fa-circle-question"></i> Autoevaluación Rápida</h2>
                ${unit.quiz.map((q, qIndex) => `
                    <div style="margin-bottom: 20px;">
                        <p><b>${qIndex + 1}. ${q.question}</b></p>
                        ${q.options.map((opt, optIndex) => `
                            <button class="quiz-option" id="q-${qIndex}-opt-${optIndex}" onclick="checkAnswer(${index}, ${qIndex}, ${optIndex})">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;

        contentContainer.innerHTML = html;
        contentContainer.scrollTop = 0;
    }

    // Toggle menú móvil
    menuToggle.onclick = () => {
        sidebar.classList.toggle("active");
    };
});

// Función Global para desplegar soluciones
function toggleSolution(id) {
    const sol = document.getElementById(`sol-${id}`);
    sol.style.display = sol.style.display === "none" ? "block" : "none";
}

// Lógica de Validación de Quiz
function checkAnswer(unitIndex, questionIndex, selectedOption) {
    const questionData = courseData[unitIndex].quiz[questionIndex];
    const isCorrect = selectedOption === questionData.correct;

    questionData.options.forEach((_, optIndex) => {
        const btn = document.getElementById(`q-${questionIndex}-opt-${optIndex}`);
        btn.disabled = true;
        if (optIndex === questionData.correct) {
            btn.classList.add("correct");
        } else if (optIndex === selectedOption) {
            btn.classList.add("incorrect");
        }
    });
}
