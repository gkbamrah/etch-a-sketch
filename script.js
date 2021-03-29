function generateGrid(dimensions) {
    let container = document.getElementById("grid-container");
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < dimensions; j++) {
            let square = document.createElement("div");
            square.classList.add("grid-square");
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
}

function main() {
    generateGrid(16);
}

main();