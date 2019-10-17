//dichiaro le variabili
var km, eta, prezzolordo;
//chiedo all'utente il numero di km
km = prompt("inserisci il numero di km da percorrere");

//chiedo all'utente l'età

eta = prompt("inserisci la tua età");

//definisco il prezzo totale del viaggio (moltiplico i km per 0,21$)
prezzolordo= (km * 0.21);

console.log(prezzolordo);
//condizione if minorenni con sconto del 20% e condizione if over 65 con sconto del 40%

if (eta < 18){
  prezzolordo = prezzolordo * (1-0.20);
}

else if (eta >65) {
prezzolordo = prezzolordo * (1-0.40);
}

document.writeln(prezzolordo);
