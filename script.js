// VARIABLES


// SELECTORS
const grid_size = document.querySelector("#size");
const btn = document.querySelector("#reset")
const outer = document.querySelector("#outer");
const btn_change = document.querySelector("#changecolour")


// CREATED ELEMENTS
const column = document.createElement("div")
const container = document.createElement("div");



// ADDING A CONTAINER DIV 

container.classList.add("container");
outer.appendChild(container)




// ADDS THE SQUARES IN THE DIV CONTAINER
for (let i = 0; i < 8; i++){
    const row = document.createElement("div");
    row.classList.add("row")
    container.appendChild(row)
    
    for(let j = 0; j < 8; j++){
        const column = document.createElement("div")
        column.classList.add("column")
        row.appendChild(column)

        column.addEventListener("mouseenter", (event) => {
column.style.backgroundColor = "grey"
})

    }

}


// WHEN USER CLICKS ANOTHER GRID VIA DROP DOWN LIST 

grid_size.addEventListener("change", function(){

let size = parseInt(this.value)

    const existingContainer = document.querySelector(".container")

    if (existingContainer) {
        existingContainer.remove()
    }

const container = document.createElement("div");
container.classList.add("container");
outer.appendChild(container)

for (let i = 0; i < size; i++){
    const row = document.createElement("div");
    row.classList.add("row")
    container.appendChild(row)
    
    for(let j = 0; j < size; j++){
        const column = document.createElement("div")
        column.classList.add("column")
        row.appendChild(column)


         column.addEventListener("mouseenter", (event) => {

column.style.backgroundColor = "#BACBD9"
})
    }
}
})



// CLEANS THE GRID OF COLOURS
btn.addEventListener("click", function(){

cleaningGrid();
})



// CHANGES THE COLOUR 
    btn_change.addEventListener("click", function(){
        cleaningGrid();
        
        const newColour = randomColour();
        console.log(newColour)

  const columns = document.querySelectorAll(".column");
        
columns.forEach((column) => {
    column.addEventListener("mouseenter", () => {
      column.style.backgroundColor = newColour;
    });
  });
});
     

// FUNCTION FOR THE CLEANING GRID 
function cleaningGrid(){

     let columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    column.style.backgroundColor = "white"
})

}



// FUNCTON FOR GETTING RANDOM COLOURS 
const randomColour = ()  => {
const R = Math.floor(Math.random() * 255) + 1;
const G = Math.floor(Math.random() * 255) + 1;
const B = Math.floor(Math.random() * 255) + 1;

return `rgb(${R}, ${G}, ${B})`;
}



    