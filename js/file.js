//trovo bottone nell'html
const btnCreateGridEl = document.querySelector(".btn-create-grid");
console.log(btnCreateGridEl);

//trovo contenitore griglia:
const gridContainerEl = document.querySelector(".grid-container");
console.log(gridContainerEl);



//arrayBombe:
let bombs;

//creo evento al click del bottone
btnCreateGridEl.addEventListener("click", function() {

        const selectEL = document.querySelector(".select-hardle");
        console.log(selectEL);

        const opzione = Math.sqrt(+selectEL.value);
        console.log(opzione);

        const valueSelect = +selectEL.value;
        console.log(valueSelect);

        const bombsList = createBombs(valueSelect);
        console.log(bombsList);
        
        createGrid(opzione, gridContainerEl);

    //createGrid(10, gridContainerEl);
} );


/**
 * Crea celle della griglia:
 * @param {number} numcells 
 * @param {Element} containerGrid
 */
function createGrid (numcells, containerGrid ){

    //riazzero il contenuto del mio container:
    containerGrid.innerHTML = "";

    // Al suo interno quante celle voglio creare? 
    //numero totale di celle alla seconda
    totalCells = Math.pow(numcells,2);

    //uso ciclo for per creare le singole celle:
    for (let i  = 1; i  < totalCells + 1 ; i ++) {

        //creo cella:
        const cellEL = document.createElement("div");
        console.log(cellEL)
        
        //attribuisco clssi e proprietà:
        cellEL.classList.add("cell");
        cellEL.style.flexBasis = `calc(100% / ${numcells})`;
        // cellEL.style.border = `1px solid darkolivegreen`;

        //aggiungo dataset alle singole celle:  mostro numero sono nell'html:
        cellEL.dataset.myNumCell = i;
        
        //evento al click sulla Cella:
        cellEL.addEventListener("click", function(){
            //mostro numero all'interno della cella:
            //cellEL.innerHTML= i;

            //leggo numero cella:
            const numCell = +cellEL.dataset.myNumCell;


            //se il mio array contiene  il numero della cella allora
            if ( bombs.includes(numCell)){
                alert("Hai trovato una bomba!");
                this.classList.add("bg-danger");

                // //creo elemento con amimazione:
                // const bombEL = document.createElement("div");
                //  console.log(bombEL);
        
                // //attribuisco clssi e proprietà:
                // bombEL.classList.add("bomb");

                // //inserisco elemento creato nel contenitore cellEL:
                // cellEL.append(bombEL);

                 this.style.backgroundImage = "url('img/1.svg')";
                 this.style.backgroundPosition = "center";
                this.style.backgroundRepeat ="no-repeat"
                
                alert("Ricarica la pagina e prova ancora!");
                gridContainerEl.style.pointerEvents ="none";
            } else{ 
                this.classList.toggle("bg-primary");

            }
 
        });

         //inserisco elemento creato nel contenitore griglia:
        containerGrid.append(cellEL);
    }
}

//se non funzione il selectEl.value allora salvo una variabile e la uso
/**
 * creo function per generare 16 numeri casuali: usando come numero minimo 1 e massimo il numero delle celle => select.value
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function createNumRandom( min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

//generro tramite function un array di bombe con 16 elementi 
//creo una variabile let per l'array che salvo globalmente per poterlo richiamare all'esterno
//all'interno delle function aggiungo condizione per evitare che nell'array vengano stampati due numeri uguali
//uso .includes

/**
 * genero un array di 16 bombe corrispondenti a numeri diversi.
 * @param {number} numcells 
 * @returns {Array}
 */
function createBombs( numcells ) {

    bombs=[];

    while( bombs.length < 16){

       //creo costante richiamando funzione genera numero random:
        const numRandom = createNumRandom(1, numcells);
        
        if (!bombs.includes(numRandom)) {
            bombs.push(numRandom)
        } 
    }
    return bombs;
}

//salvo array nel evento click del bottone che genera la grigla, richiamandono con la let
//in questo modo anche l'array verrà generato contemporaneamente.



//creo un attributo personalizzato per individuare il numero della cella
//successivamete creare condizione in  base alla quale se il numero della cella è incluso (.inculudes)
//nell'array allora ha trovato una bomba
//altrimenti può continuare a giocare.
        

