//trovo bottone nell'html
const btnCreateGridEl = document.querySelector(".btn-create-grid");
console.log(btnCreateGridEl);

//trovo contenitore griglia:
const gridContainerEl = document.querySelector(".grid-container");
console.log(gridContainerEl);


//creo evento al click del bottone
btnCreateGridEl.addEventListener("click", function() {
    // //BONUS:

         const selectEL = document.querySelector(".select-hardle");
         console.log(selectEL);
         const opzione = Math.sqrt(+selectEL.value);
         console.log(opzione)
         console.log(typeof(+selectEL.value))
       
         createGrid(opzione, gridContainerEl)

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


        cellEL.addEventListener("click", function(){
            //mostro numero all'interno della cella:
            cellEL.innerHTML= i;

            this.classList.toggle("bg-primary");
        });


        //inserisco elemento creato nel contenitore griglia:
        containerGrid.append(cellEL);

    }
}

//creo function per generare 16 numeri casuali: usando come numero minimo 1 e massimo il numero delle celle => select.value


//generro tramite function un array di bombe con 16 elementi 
//creo una variabile let per l'array che salvo globalmente per poterlo richiamare all'esterno
//all'interno delle function aggiungo condizione per evitare che nell'array vengano stampati due numeri uguali
//uso .includes



//salvo array nel evento click del bottone che genera la grigla, richiamandono con la let
//in questo modo anche l'array verrà generato contemporaneamente.



//creo un attributo personalizzato per individuare il numero della cella
//successivamete creare condizione in  base alla quale se il numero della cella è incluso (.inculudes)
//nell'array allora ha trovato una bomba
//altrimenti può continuare a giocare.
        

