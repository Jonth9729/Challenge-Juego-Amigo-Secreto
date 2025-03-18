// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
//console.log(inputAmigo);
let listaAmigosSorteados=[];
//prompt ("hola mundo");
let ulListaAmigos = document.getElementById("listaAmigos");
//console.log(ulListaAmigos);
let ulResultadoSorteo = document.getElementById("resultado");

function agregarAmigo(){
    if (inputAmigo.value === "") {
       alert("Debes ingresar un nombre");
       return;
    }
    listaAmigosSorteados.push(inputAmigo.value);
    //console.log(listaAmigosSorteados);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
//console.log("amigo");
    //listaAmigosSorteados.push(amigo);
    //console.log(listaAmigosSorteados);
    //inputAmigo.value = "";
    //mostrarAmigos();
};

//agregarAmigo();

function sortearAmigo(){
    let random = Math.floor(Math.random()*listaAmigosSorteados.length);
    let amigoSorteado = listaAmigosSorteados[random];
    //console.log(amigoSorteado);
    ulResultadoSorteo.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
    //alert("El amigo sorteado es: "+ amigoSorteado);
};

//sortearAmigo();
//amigoSorteado