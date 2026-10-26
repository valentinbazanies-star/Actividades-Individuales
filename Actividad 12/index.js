//Consola y sintaxis basica

//1- Arrays
//A
// let numeros = [];

// for(let i = 0; i < 5; i++){
//     let numeroIngresado = Number(prompt("Ingrese sus 5 digitos"));
//     numeros.push(numeroIngresado);
// }

// console.log(numeros);

//B 
// let numeros = [];

// for(let i = 0; i < 5; i++){
//     let numeroIngresado = prompt("Ingrese sus 5 digitos")
//     if(numeroIngresado % 2 !== 0){
//         numeros.push(numeroIngresado);
//     }
// }

// console.log(numeros)

//C

// let frutas = ["pera","manzana","banana","durazno"];

// frutas.forEach((fruta, indice) =>{
//     frutas[indice] = fruta.toUpperCase();
// })

// console.log(frutas)

//D
// let frutas = ["pera","manzana","banana","durazno"];

// let frutasNuevo = frutas.map(fruta =>{

//     return fruta.toUpperCase();
// })

// console.log(frutasNuevo)

//E

// let frutas = ["pera","manzana","banana","durazno"];

// let frutasFiltradas = frutas.filter(fruta =>{
//     return fruta.includes("na")
// })

// console.log(frutasFiltradas);

//2- Objetos

//A
// const indumentarias = {
//     nombre: "Remera",
//     precio: 5000,
//     stock: 22,
//     talles:["S","M","L"],
// }

//B
const producto1 = {
    nombre: "Remera",
    precio: 5000,
    stock: 22,
    talles:["S","M","L"],
}
const producto2 = {
    nombre: "Pantalon",
    precio: 3500,
    stock: 4,
    talles:["S","M","L"],
}
const producto3 = {
    nombre: "Camisa",
    precio: 8000,
    stock: 3,
    talles:["S","M","L"],
}
const producto4 = {
    nombre: "Medias",
    precio: 500,
    stock: 18,
    talles:["S","M","L"],
}

let inventario = [producto1, producto2, producto3, producto4]

// inventario.forEach((producto)=>{
//     if(producto.stock < 5){
//         console.log(producto)
//     }
// })

// C

//utilice ia aca en el return para el formato de la devolucion ...producto,precio: de esto porque me estanque un rato en esta parte
//y no supe como seguir. entiendo que no se podia usar pero no lograba que me devolviera el producto denuevo con el precio actualizado
//me devolvia esto  
// {
//     producto: { nombre: 'Medias', precio: 500, stock: 18, talles: [Array] },
//     precio: 450
// }
// lo demas lo estoy haciendo todo con la ayuda de mdn y el texto de estudio


// let descuentoAplicado = inventario.map(producto =>{
//     return {
//         ...producto,precio: producto.precio - (producto.precio *0.10)
//     }
// })
// console.log(descuentoAplicado)


// D

// let inventarioFiltrado = inventario.filter(producto =>{
//     return producto.stock > 10
// })

// console.log(inventarioFiltrado)