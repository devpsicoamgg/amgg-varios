let word = "MONDEWIE" // palabra a adivinar
let wordToBeShow = [];
let tries = 5;
let length = word.length; // 

function guessTheWord(letter) { 
// CODIGO PARA MOSTRAR LA PALABRA INCOMPLETA CON UN % DEL 60 DE LETRAS OMITIDAS 
let percent = (word.length * 60) / 100  // 60%  
for (var i = 0; i < word.length; i ++) {
  if (i/2%1 && wordToBeShow.lentgh !== percent) {
    wordToBeShow.push(word[i])
  } else (wordToBeShow.push("_"))     
}
return wordToBeShow
// CODIGO PARA IR INGRESANDO LAS LETRAS Y DETERMINAR SI VA A LA PALABRA
}

function compareIndexVsletter(letra) { 
if (letra.length>1) { 
return `ingresaste más de una letra`;
} else { 
let found = false;
for (let j = 0 ; j < word.length ; j ++ ) { 
if (wordToBeShow[j] === "_" && word[j] === letra) { 
console.log(`Esto es ${j}`)
 wordToBeShow[j] = word[j];
 found = true;
 
} 
}

 if (found) {
   return `Muy bien, la letra ${letra} se encuentra en la palabra ${wordToBeShow}`;
 } else {
   tries--;
   return `Has fallado, te quedan ${tries} intentos`
 }
}
}


console.log(guessTheWord("PALABRA"))
//console.log(compareIndexVsletter("M"))
console.log(compareIndexVsletter("M"))
console.log(compareIndexVsletter("I"))
console.log(compareIndexVsletter("A"))














