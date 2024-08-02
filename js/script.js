console.log('JS OK');

/*
MILESTONE 1
Creo le variabili const per "Fizz" e "Buzz" 
Creo un ciclo che vada da 1 a 100
Per ogni iterazione controllo che il numero corrente sia multiplo di 3 e di 5
Se il numero non è multiplo lo stampo, se è multiplo di 3 stampo Fizz, se è multiplo di 5 stampo Buzz
*/


/*
MILESTONE 2:
Recupero l'elemento dal DOM
Creo una lista
Per ogni iterazione del Ciclo aggiungo un elemento alla lista con l'output generato dall'iterazione
*/

const resultElement = document.getElementById('fizz-buzz');

const multipleOf3 = 'Fizz';
const multipleOf5 = 'Buzz';

let list = '<ul>';

for(i=1; i<=100; i++){
    let n = '';

    if(i % 3 === 0){
        n += multipleOf3;
    }
    if(i % 5 === 0){
        n += multipleOf5;
    }
    if(!n){
        n = i;
    }

    list += '<li>' + n + '</li>';
}

list += '</ul>'

resultElement.innerHTML = list;