//1 - Funciones de declaracion

//A
function saludar() {
  return "¡Hola, bienvenido!";
}
console.log(saludar());

//B
function saludarPersona(nombre) {
  return `¡Hola ${nombre}, bienvenido!`;
}
console.log(saludarPersona("Valentin"));

//C
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayorDeEdad(19));

//2 - Funciones de flecha

//A
let esMayorDeEdad2 = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(esMayorDeEdad2(16));

//B
let comparacionNumeros = (n1, n2) => {
  if (n1 < n2) {
    return `El número ${n1} es menor que ${n2}`;
  } else if (n1 == n2) {
    return `El número ${n1} es igual que ${n2}`;
  } else {
    return `El número ${n1} es mayor que ${n2}`;
  }
};

for (let i = 0; i <= 10; i++) {
  console.log(comparacionNumeros(i, 5));
}

//3 - Funciones Callback

//A
function suma(n1, n2) {
  const resultado = n1 + n2;
  console.log(`El resultado de la suma es ${resultado}`);
}
function resta(n1, n2) {
  const resultado = n1 - n2;
  console.log(`El resultado de la resta es ${resultado}`);
}

let operacion = (n1, n2, callback) => {
  callback(n1, n2);
};

operacion(7, 5, resta);

//B


let operacion2 = (n1, n2, callback) => {
  if (typeof n1 == "number" && typeof n2 == "number") {
    callback(n1, n2);
  }
  else{
    console.log("Debe ingresar solo números.");
  }
}

operacion2("hola", 5, suma);
