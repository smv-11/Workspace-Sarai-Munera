function negativo(){
    let numNegativo = document.getElementById("esNegativo");
    numNegativo = parseInt(numNegativo.value);
    if (numNegativo < 0){
        alert("Es un número negativo.");
    }
    else {
        alert("No es un número negativo.");
    }
}