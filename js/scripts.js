for (let i = 1; i <= 100; i++) {
    // ciclo che si ripete 100 volte

    
    if ( (i % 3 == 0) && (i % 5 == 0) ) {    //pongo prima la condizione più stringente
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {    //se la prima condizione non si è verificata, pongo le due condizioni meno specifiche
        console.log('Fizz');
    }
    else if (i % 5 == 0) { 
        console.log('Buz');
    }
    else {    //se nessuna delle condizioni si verifica stampo semplicemente il numero
        console.log(i);
    }

}