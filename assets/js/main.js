//dichiaro le variabili
var nome,cognome,sesso,data,km,eta,prezzolordo,battuta;

//chiedo all'utente il nome
nome = prompt("inserisci il tuo nome");

//chiedo all'utente il cognome
cognome = prompt("inserisci il tuo cognome");

sesso = prompt("sei maschio o femmina");

//chiedo all'utente il numero di km
km = prompt("inserisci il numero di km da percorrere");


//chiedo all'utente l'età

eta = parseInt(prompt("inserisci la tua età"));

data = new Date()

if (eta > 65) {
battuta ="di la verità ti piace guardare i cantieri";

}
else {
battuta =" ";
}

//definisco il prezzo totale del viaggio (moltiplico i km per 0,21$)
prezzolordo= (km * 0.21);

console.log(prezzolordo);
//condizione if minorenni con sconto del 20% e condizione if over 65 con sconto del 40%

if (eta < 18){
  prezzolordo = prezzolordo * (1-0.20);
  prezzolordo= prezzolordo.toFixed(2);
}

else if (eta >65) {
prezzolordo = prezzolordo * (1-0.40);
prezzolordo= prezzolordo.toFixed(2);
}

document.getElementById('nome').innerHTML= nome;
document.getElementById('cognome').innerHTML= cognome;
document.getElementById('sesso').innerHTML= sesso ;
document.getElementById('giorno').innerHTML= data ;
document.getElementById('anni').innerHTML=("la tua età è " + eta + "anni   " + battuta);
document.getElementById('percorso').innerHTML=("il tuo percorso è lungo " + km + "Km");
document.getElementById('mioid').innerHTML=("il costo del tuo biglietto è  " + prezzolordo + "Euro");
