// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja(){
    document.querySelector("#amigo").value = ""; 
}
function recorreLista(amigos){
    let ul =  document.getElementById("listaAmigos");
    ul.innerHTML="";

    for(let i=0; i<amigos.length; i++){
        let li= document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();
    if (amigo == ""){
        alert("porfavor ingrese un nombre");
    }else{
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        recorreLista(amigos);
    }
}

function sortearAmigo(){
    if (amigos.length===0){
        alert("agregue amigos")
    }else{
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSeleccionado = amigos[indice];
        document.getElementById("listaAmigos").innerHTML = `El amigo elegido es: ${amigoSeleccionado}`
    }
}