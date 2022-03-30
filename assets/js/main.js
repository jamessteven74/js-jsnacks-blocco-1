/*
SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

//chiedere all'utente due numeri da inserire con un prompt

// creo primo prompt.

/*
 const user_1 = parseInt(prompt("inserisci il primo numero"))
 const user_2 = parseInt(prompt("inserisci il secondo numero"))

 if( user_1 > user_2){
     console.log("è maggiore")
 }else {
     user_1 < user_2
     console.log("è minore")
 }

 */


 /*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


// chiedere all'utente due parole in successione con un propmt.
// stampare la parola più corta e poi la più'


const word_one = prompt("inserisci una parola corta");
const word_two = prompt("inserisci una parola lunga");
console.log(word_one, word_two);

if(word_one > word_two){
    console.log("hai inserito la parola lunga")
}else {
    word_one < word_two;
    console.log("hai inserito la parola più corta")
}
 