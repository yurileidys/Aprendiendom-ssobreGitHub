alert ("Bienvenido a esta página de aprendizaje :)")


var boton = document.getElementById("btnalegria");

boton.addEventListener("click", function() {
    document.getElementById("mensaje").textContent =
        "¡Has hecho clic en el botón!";
});


var boton = document.getElementById("btnfeliz");   

boton.addEventListener("click", function() {
    alert (":)")
});

var boton = document.getElementById("btncolor");

boton.addEventListener("click", function() {
    boton.classList.toggle("click");
});