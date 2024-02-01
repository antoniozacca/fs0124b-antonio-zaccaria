/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(base,altezza){
    return base*altezza;
}
let base= 10
let altezza= 5
let a= area(base,altezza)
console.log(a);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2){
    
    if(numero1===numero2){
        return (numero1+numero2)*3
    }
    else {
        return numero1+numero2;
    }
}
let numero1 =1;
let numero2 =2;
console.log(crazySum(numero1, numero2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero3){
    if(numero3>19){
        return Math.abs(numero3-19)*3  }
        else {
            Math.abs(numero3-19)
        }
}
numero3=20
console.log(crazyDiff(numero3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if (n>=20 && n<=100 || n===400) {
        return true
    } else {
        return false
    }
}
let n = 77
console.log(boundary(n))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa){
    if (stringa.startsWith ("EPICODE")) {
        return stringa
    } else {
        return "EPICODE"+ stringa
    }
}
let stringa= "EPICODE"
console.log(epify(stringa))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numpositivo){
if (numpositivo%3==0 || numpositivo%7==0) {
    return true
} else {
    return false
}
}
numpositivo= 1
console.log(check3and7(numpositivo))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(inverti){
    let splitstring= inverti.split("")
    let reversearray= splitstring.reverse()
    let joinarray= reversearray.join("")
    return joinarray
}

let inverti="EPICODE"
console.log(reverseString(inverti))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(diverseparole){
    let parole = diverseparole.split("")
    let paroleMaiuscole=[]
    for(let parola of parole){
    let primaLettera = parola[0].toUpperCase();
    let restoParola= parola.slice(1).toLowerCase();
    let parolaMaiuscola= primaLettera+ restoParola
     paroleMaiuscole.push(parolaMaiuscola)
    }
    let stringaMaiuscola = paroleMaiuscole.join("")
    return stringaMaiuscola
}
let diverseparole = "ciao"
console.log (upperFirst(diverseparole))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(tagliastringa){
    if (tagliastringa.length >=2) {
        let nuovastringa= tagliastringa.slice(1,-1)
        return nuovastringa
    } else {
        return tagliastringa
    }
}
let tagliastringa= "antonio zaccaria"
console.log(cutString(tagliastringa))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let numericasuali =[]
    for(let i=0; i<n; i++){
        let numerocasuale= (Math.floorMath.random()*11)
        numericasuali.push(numerocasuale)
    }
    return numericasuali
}
console.log(giveMeRandom(n))
