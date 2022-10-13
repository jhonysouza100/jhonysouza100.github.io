// // captura de errores con try-catch
// try{
//     console.log("en el tri se agrega el codigo num evaluar");
//     varErronea;
//     console.log("otro mensaje en el try");
// }catch(error){
//     console.log("catch captura qualquier error seguido o lansado en el try")
//     console.log(error);
// }finally{

//     console.log("el bloqur finally se ejecutara siempre al fianl de un bloque try-catch");
// }

// try{
// let num = "z";
// if(isNaN(num)){// funcion que averigua si el valor es un numero
//     throw new Error("let num no es un numero");
// }
// console.log(num * num);
// }catch(e){
//  console.log(`se produjo el siguiente error: ${e}`);
// }


// // breack continue
// const num = [1,2,3,4,5,6,7,8,9,0];
// for(let i=0;i<num.length;i++){
//     if(i === 5){
//         break;// breack se lase de la estructura
//     }
//     console.log(num[i]);
// }

// for(let i=0;i<num.length;i++){
//     if(num[i]%2 !== 0 ){// salteo numero impares
//         continue;// continue omite una iteracion sin salirse del bloque
//     }
//     console.log(num[i]);
// }

// // destructuracion
// const num = [1, 2, 3];
// //sin destructuracion
// let uno = num[0], dos = num[1], tres = num[2];
// console.log(uno, dos, tres);
// //con destructuration
// const [one, two, three] = num;
// console.log(one, two, three);

// const obj = {
//     nombre: "joni",
//     edad: 27,
//     profesion: "desarrollador"
// };
//  const {nombre, edad, profesion} = obj;//en base al nombre de propriedad se asignan los valores a la variable
// console.log(nombre, edad, profesion);// la variable qu pretendo crear debe ser igaul a la propriedad que quiero ahislar

// // objetos literales
// let nombre = "Kea", edad = 7;
// const perro = {
//     nombre: nombre,
//     edad: edad,
//     ladrar: function (){
//         console.log("guauu-guauuuu");
//     }
// }
// console.log(perro);
// perro.ladrar();

// //literales
// const dog ={
//     nombre,
//     edad,
//     raza: "Callejero",
//     ladrar(){
//         console.log("guauuu-guaaa");
//     }
// }
// console.log(perro);
// dog.ladrar();

// // parametros REST y operador SPREAD
// // rest
// function sumar(a,b, ...c){// rest ...c puede ser infinito
//     let resultado = a + b;
//     c.forEach(function(value){
//         resultado += value; 
//     });
//     return resultado;
// };
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4,5,6));
// console.log(sumar(1,2,3,4,5,6,7,8,9));
// // spread
// const arr1 = [0,1,2,3,4];
// const arr2 = [5,6,7,8,9];
// console.log(arr1, arr2);
// const arr3 = [...arr1,...arr2];// basicamento los concatena o los fusiona
// console.log(arr3);

// // arrow functions
// //funcion expresada: se asigana una fancion a una variable;
// const saludar = function(){
//     console.log("Hola funcion expresada");
// }
// //funcion declarada: la funcion puede ser llamada inclusive antes de ser creada, porque se encuentra en un hambito global
// function saludar2 (){
//     console.log("Hola funcion declarada");
// }
// //Arrow function
// const saludar3 = ()=>{// se expresa la funcion a una variable quitando la palabra reservada "function"
//     console.log("Hola arrow function");
// }
// // si solo posee una linea de instruccion
// const saludar4 = ()=> console.log("Hola arrow function abreviada en una sola linea");
// // recibe parametros
// const saludar5 = (nombre)=> console.log(`Hola ${nombre} como estas?`);
// // si resibe solo un parametro no es nesesario los parentesis
// const saludar6 = nombre => console.log(`Hola ${nombre}`);
// // no requiere return
// const sumar = (a,b) => a +b;
// console.log(sumar(1,2));
// // vs ejemplos
// const numeros = ["zero","uno","dos","tres"];
// numeros.forEach((value,index)=> console.log(`El elemento ${value} esta en la posicion ${index}`));
// // capturan el objeto.this del ambito donde se encuentran
// const perro = {
//     nombre: "spike",
//     ladrar:() =>{
//         console.log(this);// captura el contexto del ambito donde se necuentra 
//         console.log(this.nombre);// ingnora "nombre"
//     },
//     ladrar2(){// forma correcta de crear una funcion para un objeto
//         console.log(`${this.nombre} guauu-guauuu`)
//     }
// };
// perro.ladrar();
// perro.ladrar2();
