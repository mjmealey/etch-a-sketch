//Parents
let container = document.getElementById("container");
let containerTwo = document.getElementById("containerTwo")
let containerThree = document.getElementById("containerThree")
let resizeButton = document.getElementById("resizeButton");
let colorButton = document.getElementById("rainbowButton");
let blackAndWhiteButton = document.getElementById("noncolorButton");
let resetButton = document.getElementById("resetButton");
let promptRows = document.getElementById("newRows");
let promptColumns = document.getElementById("newColumns");


//Allows for the button prompts to work properly
resizeButton.addEventListener("click", userPrompt)
resetButton.addEventListener("click", resetGrid)

//makes the default 16x16 grid
function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");
    container.appendChild(rows);
    rows.addEventListener("mouseover", function () {
    });
    rows.addEventListener("mouseout", function () {});
    for (let i = 0; i < columns; i++) {
      let columns = document.createElement("div");
      columns.classList.add("columns");
      rows.appendChild(columns);
      columns.addEventListener("mouseover", function () {
        columns.style.backgroundColor = "black";
      });
      columns.addEventListener("mouseout", function () {
        columns.style.backgroundColor = "grey";
      });
    }
  }
}
makeGrid(16,16)


//makes the 64x64 grid
function biggerGrid(longerRows, longerColumns){
  for (let i = 0; i < longerRows; i++) {
    let longerRows = document.createElement("div");
    longerRows.classList.add("longerRows");
    containerTwo.appendChild(longerRows);
    longerRows.addEventListener("mouseover", function () {});
    longerRows.addEventListener("mouseout", function () {});
    for (let i = 0; i < longerColumns; i++) {
      let longerColumns = document.createElement("div");
      longerColumns.classList.add("longerColumns");
      longerRows.appendChild(longerColumns);
      longerColumns.addEventListener("mouseover", function () {
        longerColumns.style.backgroundColor = "black";
      });
      longerColumns.addEventListener("mouseout", function () {
        longerColumns.style.backgroundColor = "grey";
      });
    }
  }
}


//allows the resize button to function
function userPrompt(){
  let userInput = prompt("What would you like your grid size to be? 16 or 64? (Default is 16)");
    if (userInput === "16") { 
        makeGrid(16,16)
        resetGrid()
        
} else if (userInput === "64"){
       
             
      
        resetBigGrid()
        biggerGrid(64,64)
      }       
   else (userInput === null)}



   function resetGrid(){
   container.innerHTML = ""
   containerTwo.innerHTML = ""
  
     makeGrid(16,16)
   }

function resetBigGrid(){
  container.innerHTML=""
  containerTwo.innerHTML=""
  biggerGrid()
}