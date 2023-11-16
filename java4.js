
/*  // Utilizzare il ciclo for per stampare tutti i nomi della lista

let nomiAlunni = [ "franco", "Gennaro", "Valerio", "Giulia", "Eugenio" ]

for (let i = 0; i < nomiAlunni.length; i++) {
    console.log(nomiAlunni[i])
}



//  Utilizzare il ciclo while per stampare tutti i nomi della lista

let nomiAlunni = [ "franco", "Gennaro", "Valerio", "Giulia", "Eugenio" ]

let i = 0;

while (i < nomiAlunni.length) {
    console.log(nomiAlunni[i])
    i++
}
*/


// Stampare tutti i numeri divisibili per 20 nell’intervallo tra 1 e 400

let numero = 1;

while (numero < 400) {

    if (numero % 20 == 0) {
        console.log("il numero " + numero + "è multiplo di 20")
    }


    numero++;
}


