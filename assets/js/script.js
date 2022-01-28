//Función para solicitar el número y validar que se encuentre entre 1 y 20
let pedirNumeroUsuario = () => {
    const numero = (parseInt(prompt("Ingrese un número entre 1 y 20", "")));
    if (numero < 1 || numero > 20){
        console.log("número fuera de rango")
    }else{
        return numero;
    }
};

const numeroUsuario = pedirNumeroUsuario(); //Constante que llama a la función para conseguir el número que ingresa el usuario

//Ciclo para conseguir tabla de multiplicación
for (let index = 1; index <= numeroUsuario; index++) {
    console.log(`${index} x ${numeroUsuario} = ${index * numeroUsuario}`);
}

//Ciclo anidado para conseguir Factorial
for (let factorial = 1; factorial <= numeroUsuario; factorial++) {
    let producto = 1;
    for (let factorialAnidado = 1; factorialAnidado <= factorial; factorialAnidado++) {
       producto = producto * factorialAnidado;
    }
    console.log(`Factorial de ${factorial} es: ${producto}`);
}