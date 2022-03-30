/*
il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

//chiedere all'utente di inserire un numero per 10 volte.
// creare il programma di sommatoria degli inserimemnti.






let somma

let numero_utente


console.log(somma, numero_utente)

for(let i = 0; i < 10; i++){
    numero_utente = parseInt(prompt("inserisci un numero 10 volte"));
    somma = parseInt(numero_utente + somma)
    somma =  somma + numero_utente
}




