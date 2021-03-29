let frases= ["1 rojo", "2 azul", "3 verde", "4 amarillo", "5 rosa", "6 negro", "7 blanco", "8 naranja", "9 marrón", "10 violeta"];


const generate = () => { 
    let num =  Math.floor(Math.random()*10);
    return num
};

const cargarFrases = (frase) => {
    document.getElementById ("contenedor").innerHTML = frase;
};


let boton = document.getElementById("boton");
boton.addEventListener ("click", function() {
    let random = generate();
    cargarFrases(frases[random]);
});






