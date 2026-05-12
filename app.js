alert("Hola somos Maia y Jeremías");
console.log("Hola");

document.querySelector('.title').innerHTML = "Hola a todos.";

document.querySelector("#boton").onclick = function(){
document.body.style.backgroundColor = "lightblue";
}


let tituloCurso = "Curso de Frontend";
let descripcionCurso= "Aprendemos lenguajes como Python, Java y JavaScript."
let precioCurso = 10000;
let estadoCurso = "Disponible";


document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("precioCurso").innerHTML = "El precio es: $"+precioCurso;
document.getElementById("estadoCurso").innerHTML = estadoCurso;