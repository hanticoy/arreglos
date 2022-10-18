console.log('1. Siempre hambriento.');
function validaAlimento(myArr) {
    let existeComida = false;
    let valor = ""


    if (myArr.length > 0) {
        for (i = 0; i < myArr.length; i++) {
            if (myArr[i] == "comida") {
                console.log("delicioso");
                existeComida = true;
            }
        }
    }
    if (existeComida != true) {
        console.log("Tengo hambre");

    }
}

console.log('Existe:');
validaAlimento([10, "comid", "pastel", true, "comida"]);
console.log('NO existe:');
validaAlimento([10, "comid", "pastel", true, "no hay"]);
console.log('');


console.log('2. Filtro paso alto.');
function seleccioneValores(myArr, cutoff) {
    let newArr = [];

    if (myArr.length > 0) {
        for (i = 0; i < myArr.length; i++) {
            if (myArr[i] > cutoff) {
                newArr.push(myArr[i])
            }
        }
    }

    return newArr
}

console.log('Ejecucion:let resultado = seleccioneValores([1,2,3,4,5,6,7,8,9],4)');
let resultado = seleccioneValores([1,2,3,4,5,6,7,8,9],4)
console.log(resultado);
console.log('');



console.log('3. Mejor que el promedio:');
function mejorQueElPromedio(myArr) {
    let suma = 0;
    let promedio = 0;
    let numeroMayor = 0
    let valor = 0;

    if (myArr.length > 0) {

        for (i = 0; i < myArr.length - 1; i++) {
            suma = suma + parseInt(myArr[i]);
        }

        promedio = suma / myArr.length;

        promedio = Math.round(promedio)

        for (i = 0; i < myArr.length - 1; i++) {
            valor = parseInt(myArr[i])
           
            if ((valor > promedio) && (valor > numeroMayor)) {
                numeroMayor = valor;
            }
        }
    }
    return numeroMayor
}

let masMayor = mejorQueElPromedio(["11", "20", "100", "45", "5", "680", "7", "80", "9"])
console.log('Ejecucion:let masMayor = mejorQueElPromedio(["11", "20", "100", "45", "5", "680", "7", "80", "9"])');
console.log(masMayor);
console.log('');



console.log('4. Arreglo invertido');
function arrReverse(myArr){
    return myArr.reverse()
}

let myArrReverse = arrReverse(["11", "20", "100", "45", "5", "680", "7", "80", "9"])
console.log('Ejecucion:let myArrReverse = arrReverse(["11", "20", "100", "45", "5", "680", "7", "80", "9"])');
console.log(myArrReverse);
console.log('');


console.log('5. Arreglo de Fibonacci');
function arrFibonacci(numero){
let num1 = 0, num2 = 1, proximo;
let newArr=[];

    
    for (let i = 1; i <= numero; i++) {
        newArr.push(num1);
       
        proximo = num1 + num2;
        num1 = num2;
        num2 = proximo;
    }

    return newArr
}


let myfibo = arrFibonacci(4)
console.log('let myfibo = arrFibonacci(4)');
console.log(myfibo);
console.log('');