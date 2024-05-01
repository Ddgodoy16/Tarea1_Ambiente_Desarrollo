var colors = require("colors");
const Libro = require("./model/libros")


function suma(num1, num2, num3) {
    return num1 + num2 * num3;
  }

  
  console.log(Libro)
  
  console.log("El resultado es:".bgGreen)
  console.log(suma(5, 3, 4).toString().red.underline)