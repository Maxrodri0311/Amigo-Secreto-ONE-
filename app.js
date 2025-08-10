//variables
let amigos = [];

//funciones
function agregarAmigo() {
    
    let nombre = document.getElementById("amigo").value; //captura el valor de la entrada

    if (nombre === "") {
        alert("Por favor, ingresa un nombre."); //mensaje de error si el campo esta vacio
        return;
    } else {
        amigos.push(nombre);
    }
    limpiarCaja();
    console.log(amigos); //muestra el array en la consola
    mostratAmigos();
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function mostratAmigos() {
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpia
    amigos.sort(); //ordena alfabeticamente

    //Bucle forEach para recorrer el array de amigos
   amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);          //podemos ordenar la lista alfabeticamente
    });
}

function sortearAmigo() {
    
    // Veriifica si hay amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para ordenar.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); //numero aleatorio entre 0 y los valores contenido en el array
    let amigoSorteado = amigos[indiceAleatorio]; //amigo al azar
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

}
