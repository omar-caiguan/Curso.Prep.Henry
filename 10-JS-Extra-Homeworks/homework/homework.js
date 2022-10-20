// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var array = [];
  for(var key in objeto) {
    array.push([key, objeto[key]])
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  // var objeto = {};
  // for ( var i = 0 ; i < string.length ; i++ ) {
  //   if ( !objeto[string[i]]){
  //     objeto[string[i]] = 1
  //   } else {
  //     objeto[string[i]]++
  //   }
  // }
  // return objeto;


  var objeto = {};

  for ( var i = 0 ; i < string.length ; i++ ) {
    if (objeto.hasOwnProperty(string[i])){
      objeto[string[i]] += 1;
    }else {
      objeto [string[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayuscula = "";
  var minuscula = "";
  for ( var i = 0 ; i < s.length ; i++ ) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula += s[i];
    } else {
      minuscula += s[i];
    }
  }
  return mayuscula + minuscula;
} 


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var fraseArray = str.split(' ');                    // separa por palabras
  for (var i = 0 ; i < fraseArray.length ; i++) { 

    // var palabraArray = fraseArray[i].split('');       // separa por letra
    // var reversePalabra = palabraArray.reverse();      // rebierte las posiciones de las letras
    // fraseArray[i] = reversePalabra.join('');          // une las letras

    fraseArray[i] = fraseArray[i].split('').reverse().join('')

  }

  return fraseArray.join(' ');                        // une las palabras mediante espacios
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let cadena = numero.toString();
  let cadenaInvertida = '';

  cadenaInvertida = cadena.split('').reverse().join('');

  if ( cadena === cadenaInvertida) return "Es capicua";
  return "No es capicua";


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí


  // --- CON FOR OF ---
  let cadena2 = '';
  // for (let element of cadena) {
  //   if ( element !== 'a' && element !== 'b' && element !== 'c') {
  //     cadena2 += element;
  //   }
  // }
  // return cadena2;

  //--- CON FOR IN ---
  for (let iterador in cadena) {
      if ( cadena[iterador] !== 'a' && cadena[iterador] !== 'b' && cadena[iterador] !== 'c') {
        cadena2 += cadena[iterador];
      }
    }
    return cadena2;



}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // for ( let i = 0 ; i < arr.length ; i++ ) {
  //   var temp = arr[i];
  //   var j = i -1;
  //   while (j >= 0 && temp.length < arr[j].length) {
  //     arr[j+1] = arr[j];
  //     j--
  //   }
  //   arr[j+1] = temp;
  // }
  // return arr;

  // ---------------------------------------

  // for (let i = 0 ; i < arr.length ; i++ ) {
  //   for (j = i+1 ; j < arr.length ; j ++) {
  //     if ( arr[i].length > arr[j].length) {
  //     let temp = arr[i];
  //     arr[i]= arr[j];
  //     arr[j]= temp;
  //     }
  //   }
  // }
  // return arr

  // ---------------------------------------


  arr.sort((a, b) =>{
    if (a.length > b.length){
      return 1;
    }
    if (a.length < b.length){
      return -1
    }
    return 0;
  });
  return arr;


}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  // let arreglo = [];
  // for (let i = 0; i < arreglo1.length; i++) {
  //   for (let j = 0; j < arreglo2.length; j++) {
  //     if (arreglo1[i] === arreglo2[j]) {
  //       arreglo.push(arreglo1[i]);
  //     }
  //   }
    
  // }
  // return arreglo;

  //------------------------------------------------

  // let arreglo = [];
  // for ( let i = 0; i < arreglo1.length; i++) {
  //   if (arreglo2.includes(arreglo1[i]));
  //   arreglo.push(arreglo1[i]);
  // }
  // return arreglo;
  //------------------------------------------------

  let arreglo = [];
  arreglo1.forEach((element) => {
    arreglo2.forEach((element2) => {
      if (element === element2) {
        arreglo.push(element);
      }
    })
  })
  return arreglo;
  //------------------------------------------------

  


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

