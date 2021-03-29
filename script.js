function generateGrid(dimensions) {
    if(document.getElementsByClassName("row").length > 0) {
        let rows = Array.prototype.slice.call(document.getElementsByClassName("row"));
        for(let row of rows) {
            row.remove();
        }
    }
    let container = document.getElementById("grid-container");
    for(let i = 0; i < dimensions; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < dimensions; j++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover", (e) => {
                e.target.classList.add("visited");
            });
            square.classList.add("grid-square");
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
}

function handleOnClick() {
    let response = prompt("How many squares per side?");
        if(response != null) {
            if(response > 100) {
                alert("Please select a smaller number");
            } else {
                //console.log()
                generateGrid(parseInt(response, 10));
            }
        }
}

function main() {
    generateGrid(16);
}

main();