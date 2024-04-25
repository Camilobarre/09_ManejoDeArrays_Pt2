console.groupCollapsed("Metodo Map")
//MAP -> El map permite retornar element a diferencia del for each

const array1 = ["lucas", "pablo", "maria", "pedro"]
let array2 = []

array2 = array1.map(function (nombre) {
    return nombre.toUpperCase()
})

array2 = array1.map(function (nombre) { return nombre.toUpperCase() })

array2 = array1.map(nombre => nombre.toUpperCase())

array1.forEach(nombre => {
    array2.push(nombre.toUpperCase())
});

console.log(array1);
console.log(array2);

console.groupEnd();

console.groupCollapsed("Metodo Reverse y toReverse")
//REVERSE -> Pone de forma inversa una lista, altera la original
//tOREVERSED -> mantiene la lista original intacta

const alphabet = ['A', 'B', 'C', 'D', 'E']
console.log(alphabet);

//toReverse no altera el original (alphabet), Reverse si altera el original (alphabet)
const alphabetInvertido = alphabet.toReversed()

alphabet.reverse()

console.log(alphabet);
console.log(alphabetInvertido);

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
];
console.log(alfabetoMilitar);

let alfabetoMilitarInvertido = alfabetoMilitar.toReversed()

alfabetoMilitar.reverse()
console.log(alfabetoMilitar);

console.log(alfabetoMilitarInvertido);

console.groupEnd();

console.groupCollapsed("Metodo Sort")

let nombreCoders = [
    "santiago",
    "reykon",
    "ana",
    "narciris",
    "pablo",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "ignacio",
    "esteban",
    "shirly"
]

console.table(nombreCoders);
nombreCoders.sort()

let codersOrdenados = nombreCoders.toSorted().toReversed()

console.table(nombreCoders);
console.table(codersOrdenados);

let listaDeSupermercado = [
    "Papel aluminio",
    "Bolsas para almacenamiento de alimentos",
    "Espátula de cocina",
    "Cucharón",
    "Cuchillo de cocina",
    "Tabla de cortar",
    "Tijeras de cocina",
    "Pelador de papas y vegetales",
    "Rallador de queso",
    "Colador"
];

console.table(listaDeSupermercado);
listaDeSupermercado = listaDeSupermercado.sort()
console.table(listaDeSupermercado);

let listaInversa = listaDeSupermercado.toSorted().toReversed()
console.table(listaInversa);

console.groupEnd();

console.groupCollapsed("Metodo Filter")

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0
})
console.log(numerosPares);

let numerosImpares = numeros.filter(numero => numero % 2 !== 0)
console.log(numerosImpares);

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    } else {
        numerosImpares.push(numero)
    }
})

console.log(numerosPares);
console.log(numerosImpares);

nombresVocal = nombreCoders.filter(function (nombre) {
    return /^[aeiou]/i.test(nombre);
})
console.log(nombresVocal);

nombresSinVocal = nombreCoders.filter(function (nombre) {
    return /^[^aeiou]/i.test(nombre);
})
console.log(nombresSinVocal);

const codersVocales = codersOrdenados.filter(function (coder) {
    if (coder.startsWith("a") ||
        coder.startsWith("e") ||
        coder.startsWith("i") ||
        coder.startsWith("o") ||
        coder.startsWith("u")) {
        return coder
    }
})

console.log(codersVocales);

console.groupEnd();

console.groupCollapsed("Metodo Every")
//EVERY-> Obliga a que todos cumplan con la condicion
//SOME -> Cumple con al menos uno que cumplca con la condicion 

let numerosNaturales = [-23, -55, -44, -3, -5, 3, -2]

const respuesta = numerosNaturales.every(element => element > 0)
const respuesta2 = numerosNaturales.some(element => element > 0)

console.log(respuesta);
console.log(respuesta2);

console.groupEnd();