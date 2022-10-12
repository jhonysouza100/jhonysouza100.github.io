// // captura de errores con try-catch
// try{
//     console.log("en el tri se agrega el codigo a evaluar");
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


// breack continue
const num = [1,2,3,4,5,6,7,8,9,0];
for(let i=0;i<num.length;i++){
    if(i === 5){
        break;// breack se lase de la estructura
    }
    console.log(num[i]);
}

for(let i=0;i<num.length;i++){
    if(num[i]%2 !== 0 ){// salteo numero impares
        continue;// continue omite una iteracion sin salirse del bloque
    }
    console.log(num[i]);
}