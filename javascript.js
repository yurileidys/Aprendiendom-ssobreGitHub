alert ("Bienvenido a esta página de aprendizaje :)")


var boton = document.getElementById("btnalegria");

boton.addEventListener("click", function() {
    document.getElementById("mensaje").textContent =
        "¡Hiciste clickkkk en el botón!";
});


var boton = document.getElementById("btnfeliz");   

boton.addEventListener("click", function() {
    alert (":)")
});




var botonColor = document.getElementById("btncolor");

botonColor.addEventListener("click", function() {
    botonColor.classList.toggle("click");
});



var boton = document.getElementById("btnimg");

boton.addEventListener("click", function() {

    document.getElementById("img").innerHTML = '<img src="img/image.png">';

});