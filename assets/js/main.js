/*
1-L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    -addEventListener
2-Ogni cella ha un numero progressivo, da 1 a 100.
    -ciclo for
3-Ci saranno quindi 10 caselle per ognuna delle 10 righe.

4-Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    -classList.add()
    -console.log
*/


//creazione div singolo
function createDiv(elemento, classi, testo){
    let newDiv = document.createElement(elemento);
    newDiv.className = classi;
    newDiv.innerHTML = testo;
    
    return newDiv;
}

let griglia = document.querySelector('.griglia');

//funzione per il livello 1
function facile(){

    for(let i=1; i <= 100; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-1', i);
    
        box.addEventListener('click', function(){
            this.classList.toggle('blu');
            console.log(i);
        })
    
        griglia.append(box);
    }
}

//funzione per il livello 2
function medio(){

    for(let i=1; i <= 81; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-2', i);
    
        box.addEventListener('click', function(){
            this.classList.toggle('blu');
            console.log(i);
        })
    
        griglia.append(box);
    }
}

//funzione per il livello 3
function difficile(){

    for(let i=1; i <= 49; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-3', i);
    
        box.addEventListener('click', function(){
            this.classList.toggle('blu');
            console.log(i);
        })
    
        griglia.append(box);
    }
}

//selezione della difficoltà e generazione della griglia
let select = document.getElementById("select");
let opzione = select.options[select.selectedIndex].value;

select.addEventListener("change", function(){

    let htmlMain = document.querySelector('main');
    opzione = select.options[select.selectedIndex].value;

    if(opzione == 1){
        document.querySelector('#button').addEventListener('click', function(){
            griglia.innerHTML = ""
            facile()
        })
        
            
    }else if(opzione == 2){
        document.querySelector('#button').addEventListener('click', function(){
            griglia.innerHTML = ""
            medio()
        })

    }else if(opzione == 3){
        document.querySelector('#button').addEventListener('click', function(){
            griglia.innerHTML = ""
            difficile()
        })
    }

})

    


