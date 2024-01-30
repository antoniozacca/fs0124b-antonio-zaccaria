/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a= 3
let b= 5
if (a>b) {
 console.log("il numero più grande è: ",a);
} else {
  console.log("il numero più grande è: ",b)
  
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let c= 7
if (c!=5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let d= 10
if (d%5==0) {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let e= 8
let f= 1
if (e==8) {
  console.log("il valore inserito è 8")
} else {
  if (f==8) {
    console.log("il valore inserito è 8")
  }
}
if (e+f==8) {
  console.log("la loro somma è 8")
} else {
  if (e-f==8) {
    console.log("la loro sottrazione è 8")
  }
  else{
    console.log("la loro somma non è 8. la loro sottrazione non è 8")
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

totalShoppingCart=33-[(33*20)/100]
if (totalShoppingCart>50) {
  console.log("hai diritto alla spedizione gratuita! il costo totale ammonta a: ",totalShoppingCart)
} else {
  console.log("non hai diritto alla spedizione gratuita. il costo totale ammonta a: ",totalShoppingCart+10)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let g= 1
let h= 2
let i=3
let arr = [g,h,i]
{
  let ordina= [i,g,h]
ordina.sort(function(i, g, h) {
  return i-g-h;
})

}
console.log(arr)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let l= 9
console.log(typeof l);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (l%2==0) {
  console.log("il numero è pari")
} else {
  console.log("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

const mecity = Object.assign(me,{city: 'Toronto'});
console.log(mecity);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const menolast = Object.assign(me);
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const menoskills = Object.assign(me);
delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let num =[1,2,3,4,5,6,7,8,9,10]
 
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
let sost =num.indexOf(10)
if(sost !==-1){
  num.splice(sost,1,100)
}
console.log(num);

