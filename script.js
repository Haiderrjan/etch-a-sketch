const grid_Size = document.querySelector("#size");
const btn = document.querySelector("#reset")
const outer = document.querySelector("#outer");




const btn_2 = document.querySelector("#changecolour")


const column = document.createElement("div")


const container = document.createElement("div");
container.classList.add("container");
outer.appendChild(container)
// document.body.appendChild(container)



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




grid_Size.addEventListener("change", function(){


let size = parseInt(this.value)





    const existingContainer = document.querySelector(".container")

    if (existingContainer) {
        existingContainer.remove()
    }

const container = document.createElement("div");
container.classList.add("container");
outer.appendChild(container)

//  document.body.appendChild(container)


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




btn.addEventListener("click", function(){

cleaningGrid();
})




    btn_2.addEventListener("click", function(){
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
     

function cleaningGrid(){

     let columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    column.style.backgroundColor = "white"

})

}




const randomColour = ()  => {
const R = Math.floor(Math.random() * 255) + 1;
const G = Math.floor(Math.random() * 255) + 1;
const B = Math.floor(Math.random() * 255) + 1;

return `rgb(${R}, ${G}, ${B})`;
}



    