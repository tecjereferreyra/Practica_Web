alert("Hola somos Maia y Jeremías");
console.log("Hola");

document.querySelector("#boton").onclick = function(){
 document.body.style.background = "lightblue";
 
   document.querySelector('input[type="text"]').value = "";

    document.querySelector('input[type="email"]').value = "";

    document.querySelector("textarea").value = "";
}

let tituloCurso = "Curso de Frontend";
let descripcionCurso= "Aprendemos lenguajes como Python, Java y JavaScript."
let precioCurso = 10000;
let estadoCurso = "Disponible";


document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("precioCurso").innerHTML = "El precio es: $"+precioCurso;
document.getElementById("estadoCurso").innerHTML = estadoCurso;