// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo_secreto = [];


function agregarAmigo (){
    let nombre = document.querySelector('#amigo');//entrada del nombre del amigo secreto
    //validar que no sea espacio en blanco
    if (nombre.value.trim ()=== "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigo_secreto.includes(nombre.value)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
        return;
    }
    //agregar el nombre al array amigo_secreto
    amigo_secreto.push(nombre.value.trim());

    alert("Nombre agregado: " + nombre.value.trim());
    //limpiar el campo de entrada
    nombre.value = "";
    actualizarLista();
    console.log(amigo_secreto);
}
function sortearAmigo() {
    //validar que haya al menos 2 amigos secretos
    if (amigo_secreto.length < 2) {
        alert("Por favor, agrega al menos dos amigos secretos para sortear.");
        return;
    }
    
    //mezclar el array amigo_secreto
    let mezclado = [...amigo_secreto].sort(() => Math.random() - 0.5);
    
    //crear un nuevo array para los resultados
    let resultados = [];
    
    //asignar cada amigo secreto a otro
    for (let i = 0; i < mezclado.length; i++) {
        let amigo = mezclado[i];
        let destinatario = mezclado[(i + 1) % mezclado.length]; // el siguiente en la lista, o el primero si es el último
        resultados.push(`${amigo} -> ${destinatario}`);
    }
    
    //mostrar los resultados
    mostrarResultados(resultados);
}
function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual
    amigo_secreto.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
 
function mostrarResultados(resultados) {
    let listaResultado = document.querySelector("#resultado");
    listaResultado.innerHTML = "";
    resultados.forEach(resultado => {
        let item = document.createElement("li");
        item.textContent = resultado;
        listaResultado.appendChild(item);
    });
}
console.log("JavaScript cargado correctamente");

