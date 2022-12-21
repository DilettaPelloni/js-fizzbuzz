//metto la box in una costante per poterla chiamare
const box = document.getElementById('box');

// ciclo che si ripete 100 volte e crea square con i numeri
for (let i = 1; i <= 100; i++) {
    console.log(i); //debug

    //creo un <div> e lo metto in una costante
    const square = document.createElement('div');

    //do al <div> la classe square
    square.className = 'square';

    //aggiungo uno sqare alla box
    box.append(square);

    //creo la variabile content e ci metto dentro il valore di i
    let content = i;

    if ( (i % 3 == 0) && (i % 5 == 0) ) {
        content = 'FizzBuzz';
    }
    else if (i % 3 == 0) {    //se la prima condizione non si è verificata, pongo le due condizioni meno specifiche
        content = 'Fizz';
    }
    else if (i % 5 == 0) { 
        content = 'Buzz';
    }

    square.innerHTML = '<p class="content">' + content + '</p>';

}