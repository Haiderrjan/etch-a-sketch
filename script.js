const grid_Size = document.querySelector("#size");





const container = document.querySelector("#container")


grid_Size.addEventListener("change", function(){

let size = parseInt(this.value)


for (let i = 0; i < size; i++){
    const row = document.createElement("div");
    row.classList.add("row")
    container.appendChild(row)
    
    for(let j = 0; j < size; j++){
        const column = document.createElement("div")
        column.classList.add("column")
        row.appendChild(column)
    }

}


})





  

