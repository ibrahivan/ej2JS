// Asignar al cargar la página las funciones correspondientes a cada elemento del menú
let alumnos = ["Perico", "Aurelio", "Boromir", "Witiza", "David"];
let profesores = ["Lolo", "JM", "Juan", "Pablo"];;
let cursos = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];
let personal = ["Pepe", "Juan", "Pedro"]



// Funciones
// Versión básica: crear una función para cada elemento del menú
// Versión avanzada: crear una sola función cambiando el parámetro (que será la lista correspoondiente)
// Ver Alumnos
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");

let anadir = document.querySelector(".row1");

function mostrarLista(lista){

    anadir.innerHTML = "";
    const ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorre el array de alumnos y crea elementos <li> para cada uno
    alumnos.forEach((alumno) => {
        const li = document.createElement("li");
        li.innerText = alumno;
        li.classList = "list-group-item"; // Agrega la clase Bootstrap "list-group-item"

        // Agrega el elemento <li> a la lista <ul>
        ul.appendChild(li);
    });

    // Agrega la lista <ul> al contenedor
    anadir.appendChild(ul);

}

// Agrega eventos de clic a los botones para mostrar las listas
boton1.addEventListener("click", () => {
    mostrarLista(alumnos);
});

boton2.addEventListener("click", () => {
    mostrarLista(profesores);
});

boton3.addEventListener("click", () => {
    mostrarLista(cursos);
});
boton4.addEventListener("click", () => {
    mostrarLista(personal);
});
/**


function verAlumnos() {
    // Array de 5 alumnos
    let alumnos = ["Perico", "Aurelio", "Boromir", "Witiza", "David"]
    // Mostrar con lista de bootstrap los alumnos de la lista
    let anadir = document.querySelector(".row1");
    const ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorre el array de alumnos y crea elementos <li> para cada uno
    alumnos.forEach((alumno) => {
        const li = document.createElement("li");
        li.innerText = alumno;
        li.classList = "list-group-item"; // Agrega la clase Bootstrap "list-group-item"

        // Agrega el elemento <li> a la lista <ul>
        ul.appendChild(li);
    });

    // Agrega la lista <ul> al contenedor
    anadir.appendChild(ul);
}

function verProfesores() {
    // Array de 4 profesores
    let alumnos = ["Lolo", "JM", "Juan", "Pablo"]
    // Mostrar con lista de bootstrap los profesores de la lista
    let anadir = document.querySelector(".row1");
    const ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorre el array de alumnos y crea elementos <li> para cada uno
    alumnos.forEach((alumno) => {
        const li = document.createElement("li");
        li.innerText = alumno;
        li.classList = "list-group-item"; // Agrega la clase Bootstrap "list-group-item"

        // Agrega el elemento <li> a la lista <ul>
        ul.appendChild(li);
    });

    // Agrega la lista <ul> al contenedor
    anadir.appendChild(ul);
}

function verCursos() {
    // Array de 5 cursos
    let alumnos = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"]
    // Mostrar con lista de bootstrap los cursos de la lista
    let anadir = document.querySelector(".row1");
    const ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorre el array de alumnos y crea elementos <li> para cada uno
    alumnos.forEach((alumno) => {
        const li = document.createElement("li");
        li.innerText = alumno;
        li.classList = "list-group-item"; // Agrega la clase Bootstrap "list-group-item"

        // Agrega el elemento <li> a la lista <ul>
        ul.appendChild(li);
    });

    // Agrega la lista <ul> al contenedor
    anadir.appendChild(ul);
}

function verPersonal() {
    // Array de 3 nombres de personal
    let alumnos = ["Pepe", "Juan", "Pedro"]
    // Mostrar con lista de bootstrap los nombres de la lista
    let anadir = document.querySelector(".row1");
    const ul = document.createElement("ul");
    ul.classList = "list-group";

    // Recorre el array de alumnos y crea elementos <li> para cada uno
    alumnos.forEach((alumno) => {
        const li = document.createElement("li");
        li.innerText = alumno;
        li.classList = "list-group-item"; // Agrega la clase Bootstrap "list-group-item"

        // Agrega el elemento <li> a la lista <ul>
        ul.appendChild(li);
    });

    // Agrega la lista <ul> al contenedor
    anadir.appendChild(ul);
} */