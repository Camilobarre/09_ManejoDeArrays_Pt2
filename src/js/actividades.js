//Ejercicio 1
console.groupCollapsed("Ejercicio 1")
const nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Carlos", "Laura", "Diego", "Elena"];
nombres.sort()
console.table(nombres);
console.groupEnd();

//Ejercicio 2
console.groupCollapsed("Ejercicio 2")
const numeros = [2, 8, 5, 6, 7, 1, 4, 3, 9];
console.log(numeros);
console.groupEnd();

//Ejercicio 3
console.groupCollapsed("Ejercicio 3")
let suma = 0
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(suma);
console.groupEnd();

//Ejercicio 4
console.groupCollapsed("Ejercicio 4")
for (const valor in numeros) {
    console.log(numeros[valor]);
}
console.groupEnd();

//Ejercicio 5
console.groupCollapsed("Ejercicio 5")
let sumaEjercicio5 = 0;
for (const numero of numeros) {
    sumaEjercicio5 += numero;
}
console.log(sumaEjercicio5);
console.groupEnd();

//Ejercicio 6
console.groupCollapsed("Ejercicio 6")
nombres.forEach(nombre => {
    console.log(nombre);
});
console.groupEnd();

//Ejercicio 7
console.groupCollapsed("Ejercicio 7")
numerosDuplicados = numeros.map(numero => numero * 2)
console.log(numerosDuplicados);
console.groupEnd();