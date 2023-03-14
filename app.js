//Parents

//buttons
let rainbow = document.getElementById("rainbow");
let defaultColor = document.getElementById("defaultColor");
let bigGrey = document.getElementById("bigGrey");
let bigRainbow = document.getElementById("bigRainbow");
let red = document.getElementById("red");
let bigRed = document.getElementById("bigRed");
let icy = document.getElementById("icy");
let bigIcy = document.getElementById("bigIcy");
let purple = document.getElementById("purple");
let bigPurple = document.getElementById("bigPurple");
let ash = document.getElementById("ash");
let bigAsh = document.getElementById("bigAsh");
let pink = document.getElementById("pink");
let bigPink = document.getElementById("bigPink");
let green = document.getElementById("green");
let bigGreen = document.getElementById("bigGreen");
let yellow = document.getElementById("yellow");
let bigYellow = document.getElementById("bigYellow");
let sky = document.getElementById("sky");
let bigSky = document.getElementById("bigSky");

//containers
let container = document.getElementById("container");
let containerTwo = document.getElementById("containerTwo");
let containerThree = document.getElementById("containerThree");
let containerFour = document.getElementById("containerFour");
let containerFive = document.getElementById("containerFive");
let containerSix = document.getElementById("containerSix");
let containerSeven = document.getElementById("containerSeven");
let containerEight = document.getElementById("containerEight");
let containerNine = document.getElementById("containerNine");
let containerTen = document.getElementById("containerTen");
let containerEleven = document.getElementById("containerEleven");
let containerTwelve = document.getElementById("containerTwelve");
let containerThirteen = document.getElementById("containerThirteen");
let containerFourteen = document.getElementById("containerFourteen");
let containerFifteen = document.getElementById("containerFifteen");
let containerSixteen = document.getElementById("containerSixteen");
let containerSeventeen = document.getElementById("containerSeventeen");
let containerEighteen = document.getElementById("containerEighteen");
let containerNinteen = document.getElementById("containerNinteen");
let containerTwenty = document.getElementById("containerTwenty");

//Allows for the button prompts to work properly

rainbow.addEventListener("click", (e) => {
  if (e.target.id === "rainbow") {
    resetToColor();
    makeColorGrid(16, 16);
  } else e.target.id === null;
});

bigRainbow.addEventListener("click", (e) => {
  if (e.target.id === "bigRainbow") {
    resetToColor();
    makeBigColorGrid(64, 64);
  }
});

defaultColor.addEventListener("click", (e) => {
  if (e.target.id === "defaultColor") {
    resetToGrayGrid();
  }
});

bigGrey.addEventListener("click", (e) => {
  if (e.target.id === "bigGrey") {
    resetToBigGrayGrid();
  }
});
red.addEventListener("click", (e) => {
  if (e.target.id === "red") {
    resetToRed();
  }
});
bigRed.addEventListener("click", (e) => {
  if (e.target.id === "bigRed") {
    resetToBigRed();
  }
});

icy.addEventListener("click", (e) => {
  if (e.target.id === "icy") {
    resetToIcy();
  }
});

bigIcy.addEventListener("click", (e) => {
  if (e.target.id === "bigIcy") {
    resetToBigIcy();
  }
});

purple.addEventListener("click", (e) => {
  if (e.target.id === "purple") {
    resetToPurple();
  }
});

bigPurple.addEventListener("click", (e) => {
  if (e.target.id === "bigPurple") {
    resetToBigPurple();
  }
});

ash.addEventListener("click", (e) => {
  if (e.target.id === "ash") {
    resetToAsh();
  }
});

bigAsh.addEventListener("click", (e) => {
  if (e.target.id === "bigAsh") {
    resetToBigAsh();
  }
});

pink.addEventListener("click", (e) => {
  if (e.target.id === "pink") {
    resetPinkGrid();
  }
});

bigPink.addEventListener("click", (e) => {
  if (e.target.id === "bigPink") {
    resetBigPink();
  }
});

green.addEventListener("click", (e) => {
  if (e.target.id === "green") {
    resetGreen();
  }
});

bigGreen.addEventListener("click", (e) => {
  if (e.target.id === "bigGreen") {
    resetBigGreen();
  }
});

yellow.addEventListener("click", (e) => {
  if (e.target.id === "yellow") {
    resetYellow();
  }
});

bigYellow.addEventListener("click", (e) => {
  if (e.target.id === "bigYellow") {
    resetBigYellow();
  }
});
sky.addEventListener("click", (e) => {
  if (e.target.id === "sky") {
    resetSky();
  }
});

bigSky.addEventListener("click", (e) => {
  if (e.target.id === "bigSky") {
    resetBigSky();
  }
});

makeGrid(16, 16);

//makes the default 16x16 grid
function makeGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");
    container.appendChild(rows);
    rows.addEventListener("mouseover", function () {});
    rows.addEventListener("mouseout", function () {});
    for (let i = 0; i < columns; i++) {
      let columns = document.createElement("div");
      columns.classList.add("columns");
      rows.appendChild(columns);
      columns.addEventListener("mouseenter", function () {
        columns.style.backgroundColor = "black";
      });
      columns.addEventListener("mouseout", function () {
        columns.style.backgroundColor = "grey";
      });
    }
  }
}

//makes the 64x64 grid
function biggerGrid(longerRows, longerColumns) {
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

function makeColorGrid(colorRows, colorColumns) {
  for (let i = 0; i < colorRows; i++) {
    let colorRows = document.createElement("div");
    colorRows.classList.add("colorRows");
    containerThree.appendChild(colorRows);
    colorRows.addEventListener("mouseenter", function () {});
    for (let i = 0; i < colorColumns; i++) {
      let colorColumns = document.createElement("div");
      colorColumns.classList.add("colorColumns");
      colorRows.appendChild(colorColumns);
      colorColumns.addEventListener("mouseenter", function () {
        let changeColors = [Math.floor(Math.random() * 16777215).toString(16)];
        colorColumns.style.backgroundColor = "#" + changeColors;
      });
    }
  }
}

function makeBigColorGrid(bigColorRows, bigColorColumns) {
  for (let i = 0; i < bigColorRows; i++) {
    let bigColorRows = document.createElement("div");
    bigColorRows.classList.add("bigColorRows");
    containerFour.appendChild(bigColorRows);
    bigColorRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigColorColumns; i++) {
      let bigColorColumns = document.createElement("div");
      bigColorColumns.classList.add("bigColorColumns");
      bigColorRows.appendChild(bigColorColumns);
      bigColorColumns.addEventListener("mouseenter", function () {
        let changeBigColors = [
          Math.floor(Math.random() * 16777215).toString(16),
        ];
        bigColorColumns.style.backgroundColor = "#" + changeBigColors;
      });
    }
  }
}

//allows the resize button to function
function userPrompt() {
  let userInput = prompt(
    "What would you like your grid size to be? 16 or 64? (Default is 16)"
  );
  if (userInput === "16") {
    makeGrid(16, 16);
    resetGrid();
  } else if (userInput === "64") {
    resetBigGrid();
    biggerGrid(64, 64);
  } else userInput === null;
}

function dragonGrid(dragonRows, dragonColumns) {
  for (let i = 0; i < dragonRows; i++) {
    let dragonRows = document.createElement("div");
    dragonRows.classList.add("dragonRows");
    containerFive.appendChild(dragonRows);
    dragonRows.addEventListener("mouseenter", function () {
      dragonRows.style.backgroundColor = "brown";
    });

    for (let i = 0; i < dragonColumns; i++) {
      let dragonColumns = document.createElement("div");
      dragonColumns.classList.add("dragonColumns");
      dragonRows.appendChild(dragonColumns);
      dragonColumns.addEventListener("mouseenter", function () {
        dragonColumns.style.backgroundColor = "crimson";
      });
    }
  }
}

function bigDragonGrid(bigDragonRows, bigDragonColumns) {
  for (let i = 0; i < bigDragonRows; i++) {
    let bigDragonRows = document.createElement("div");
    bigDragonRows.classList.add("bigDragonRows");
    containerSeven.appendChild(bigDragonRows);
    bigDragonRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigDragonColumns; i++) {
      let bigDragonColumns = document.createElement("div");
      bigDragonColumns.classList.add("bigDragonColumns");
      bigDragonRows.appendChild(bigDragonColumns);
      bigDragonColumns.addEventListener("mouseenter", function () {
        bigDragonColumns.style.backgroundColor = "crimson";
      });
    }
  }
}

function icyGrid(icyRows, icyColumns) {
  for (let i = 0; i < icyRows; i++) {
    let icyRows = document.createElement("div");
    icyRows.classList.add("icyRows");
    containerSix.appendChild(icyRows);
    icyRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < icyColumns; i++) {
      let icyColumns = document.createElement("div");
      icyColumns.classList.add("icyColumns");
      icyRows.appendChild(icyColumns);
      icyColumns.addEventListener("mouseenter", function () {
        icyColumns.style.backgroundColor = "#368bc1";
      });
    }
  }
}

function bigIcyGrid(bigIcyRows, bigIcyColumns) {
  for (let i = 0; i < bigIcyRows; i++) {
    let bigIcyRows = document.createElement("div");
    bigIcyRows.classList.add("bigIcyRows");
    containerEight.appendChild(bigIcyRows);
    bigIcyRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigIcyColumns; i++) {
      let bigIcyColumns = document.createElement("div");
      bigIcyColumns.classList.add("bigIcyColumns");
      bigIcyRows.appendChild(bigIcyColumns);
      bigIcyColumns.addEventListener("mouseenter", function () {
        bigIcyColumns.style.backgroundColor = "#368bc1";
        bigIcyColumns.style.color = "black";
      });
    }
  }
}

//16x16 purple grid
function purpleGrid(purpleRows, purpleColumns) {
  for (let i = 0; i < purpleRows; i++) {
    let purpleRows = document.createElement("div");
    purpleRows.classList.add("purpleRows");
    containerNine.appendChild(purpleRows);
    purpleRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < purpleColumns; i++) {
      let purpleColumns = document.createElement("div");
      purpleColumns.classList.add("purpleColumns");
      purpleRows.appendChild(purpleColumns);
      purpleColumns.addEventListener("mouseenter", function () {
        purpleColumns.style.backgroundColor = "purple";
      });
    }
  }
}

function bigPurpleGrid(bigPurpleRows, bigPurpleColumns) {
  for (let i = 0; i < bigPurpleRows; i++) {
    let bigPurpleRows = document.createElement("div");
    bigPurpleRows.classList.add("bigPurpleRows");
    containerTen.appendChild(bigPurpleRows);
    bigPurpleRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigPurpleColumns; i++) {
      let bigPurpleColumns = document.createElement("div");
      bigPurpleColumns.classList.add("bigPurpleColumns");
      bigPurpleRows.appendChild(bigPurpleColumns);
      bigPurpleColumns.addEventListener("mouseenter", function () {
        bigPurpleColumns.style.backgroundColor = "purple";
      });
    }
  }
}

function ashGrid(ashRows, ashColumns) {
  for (let i = 0; i < ashRows; i++) {
    let ashRows = document.createElement("div");
    ashRows.classList.add("ashRows");
    containerEleven.appendChild(ashRows);
    ashRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < ashColumns; i++) {
      let ashColumns = document.createElement("div");
      ashColumns.classList.add("ashColumns");
      ashRows.appendChild(ashColumns);
      ashColumns.addEventListener("mouseenter", function () {
        ashColumns.style.backgroundColor = "#e9e4d4";
      });
    }
  }
}

function bigAshGrid(bigAshRows, bigAshColumns) {
  for (let i = 0; i < bigAshRows; i++) {
    let bigAshRows = document.createElement("div");
    bigAshRows.classList.add("bigAshRows");
    containerTwelve.appendChild(bigAshRows);
    bigAshRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigAshColumns; i++) {
      let bigAshColumns = document.createElement("div");
      bigAshColumns.classList.add("bigAshColumns");
      bigAshRows.appendChild(bigAshColumns);
      bigAshColumns.addEventListener("mouseenter", function () {
        bigAshColumns.style.backgroundColor = "#e9e4d4";
      });
    }
  }
}

function pinkGrid(pinkRows, pinkColumns) {
  for (let i = 0; i < pinkRows; i++) {
    let pinkRows = document.createElement("div");
    pinkRows.classList.add("pinkRows");
    containerThirteen.appendChild(pinkRows);
    pinkRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < pinkColumns; i++) {
      let pinkColumns = document.createElement("div");
      pinkColumns.classList.add("pinkColumns");
      pinkRows.appendChild(pinkColumns);
      pinkColumns.addEventListener("mouseenter", function () {
        pinkColumns.style.backgroundColor = "pink";
      });
    }
  }
}

function bigPinkGrid(bigPinkRows, bigPinkColumns) {
  for (let i = 0; i < bigPinkRows; i++) {
    let bigPinkRows = document.createElement("div");
    bigPinkRows.classList.add("bigPinkRows");
    containerFourteen.appendChild(bigPinkRows);
    bigPinkRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigPinkColumns; i++) {
      let bigPinkColumns = document.createElement("div");
      bigPinkColumns.classList.add("bigPinkColumns");
      bigPinkRows.appendChild(bigPinkColumns);
      bigPinkColumns.addEventListener("mouseenter", function () {
        bigPinkColumns.style.backgroundColor = "pink";
      });
    }
  }
}

function greenGrid(greenRows, greenColumns) {
  for (let i = 0; i < greenRows; i++) {
    let greenRows = document.createElement("div");
    greenRows.classList.add("greenRows");
    containerFifteen.appendChild(greenRows);
    greenRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < greenColumns; i++) {
      let greenColumns = document.createElement("div");
      greenColumns.classList.add("greenColumns");
      greenRows.appendChild(greenColumns);
      greenColumns.addEventListener("mouseenter", function () {
        greenColumns.style.backgroundColor = "green";
      });
    }
  }
}

function bigGreenGrid(bigGreenRows, bigGreenColumns) {
  for (let i = 0; i < bigGreenRows; i++) {
    let bigGreenRows = document.createElement("div");
    bigGreenRows.classList.add("bigGreenRows");
    containerSixteen.appendChild(bigGreenRows);
    bigGreenRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigGreenColumns; i++) {
      let bigGreenColumns = document.createElement("div");
      bigGreenColumns.classList.add("bigGreenColumns");
      bigGreenRows.appendChild(bigGreenColumns);
      bigGreenColumns.addEventListener("mouseenter", function () {
        bigGreenColumns.style.backgroundColor = "green";
      });
    }
  }
}

function yellowGrid(yellowRows, yellowColumns) {
  for (let i = 0; i < yellowRows; i++) {
    let yellowRows = document.createElement("div");
    yellowRows.classList.add("yellowRows");
    containerSeventeen.appendChild(yellowRows);
    yellowRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < yellowColumns; i++) {
      let yellowColumns = document.createElement("div");
      yellowColumns.classList.add("yellowColumns");
      yellowRows.appendChild(yellowColumns);
      yellowColumns.addEventListener("mouseenter", function () {
        yellowColumns.style.backgroundColor = "yellow";
      });
    }
  }
}

function bigYellowGrid(bigYellowRows, bigYellowColumns) {
  for (let i = 0; i < bigYellowRows; i++) {
    let bigYellowRows = document.createElement("div");
    bigYellowRows.classList.add("bigYellowRows");
    containerEighteen.appendChild(bigYellowRows);
    bigYellowRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigYellowColumns; i++) {
      let bigYellowColumns = document.createElement("div");
      bigYellowColumns.classList.add("bigYellowColumns");
      bigYellowRows.appendChild(bigYellowColumns);
      bigYellowColumns.addEventListener("mouseenter", function () {
        bigYellowColumns.style.backgroundColor = "yellow";
      });
    }
  }
}

function skyGrid(skyRows, skyColumns) {
  for (let i = 0; i < skyRows; i++) {
    let skyRows = document.createElement("div");
    skyRows.classList.add("skyRows");
    containerNinteen.appendChild(skyRows);
    skyRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < skyColumns; i++) {
      let skyColumns = document.createElement("div");
      skyColumns.classList.add("skyColumns");
      skyRows.appendChild(skyColumns);
      skyColumns.addEventListener("mouseenter", function () {
        skyColumns.style.backgroundColor = "lightblue";
      });
    }
  }
}

function bigSkyGrid(bigSkyRows, bigSkyColumns) {
  for (let i = 0; i < bigSkyRows; i++) {
    let bigSkyRows = document.createElement("div");
    bigSkyRows.classList.add("bigSkyRows");
    containerTwenty.appendChild(bigSkyRows);
    bigSkyRows.addEventListener("mouseenter", function () {});

    for (let i = 0; i < bigSkyColumns; i++) {
      let bigSkyColumns = document.createElement("div");
      bigSkyColumns.classList.add("bigSkyColumns");
      bigSkyRows.appendChild(bigSkyColumns);
      bigSkyColumns.addEventListener("mouseenter", function () {
        bigSkyColumns.style.backgroundColor = "lightblue";
      });
    }
  }
}

function resetBigGrid() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  biggerGrid();
}

function resetToGrayGrid() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  makeGrid(16, 16);
}

function resetToBigGrayGrid() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  biggerGrid(64, 64);
}
function resetToColor() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
}
function resetToBigColor() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  makeBigColorGrid(64, 64);
}
function resetToRed() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  dragonGrid(16, 16);
}

function resetToBigRed() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigDragonGrid(64, 64);
}

function resetToIcy() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  icyGrid(16, 16);
}

function resetToBigIcy() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigIcyGrid(64, 64);
}

function resetToPurple() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  purpleGrid(16, 16);
}

function resetToBigPurple() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigPurpleGrid(64, 64);
}

function resetToAsh() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  ashGrid(16, 16);
}

function resetToBigAsh() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigAshGrid(64, 64);
}

function resetPinkGrid() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  pinkGrid(16, 16);
}

function resetBigPink() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigPinkGrid(64, 64);
}

function resetGreen() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  greenGrid(16,16);
}

function resetBigGreen() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigGreenGrid(64,64);
}

function resetYellow() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  yellowGrid(16, 16);
}

function resetBigYellow() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigYellowGrid(64, 64);
}

function resetSky() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  skyGrid(16, 16);
}

function resetBigSky() {
  container.innerHTML = null;
  containerTwo.innerHTML = null;
  containerThree.innerHTML = null;
  containerFour.innerHTML = null;
  containerFive.innerHTML = null;
  containerSix.innerHTML = null;
  containerSeven.innerHTML = null;
  containerEight.innerHTML = null;
  containerNine.innerHTML = null;
  containerTen.innerHTML = null;
  containerEleven.innerHTML = null;
  containerTwelve.innerHTML = null;
  containerThirteen.innerHTML = null;
  containerFourteen.innerHTML = null;
  containerFifteen.innerHTML = null;
  containerSixteen.innerHTML = null;
  containerSeventeen.innerHTML = null;
  containerEighteen.innerHTML = null;
  containerNinteen.innerHTML = null;
  containerTwenty.innerHTML = null;
  bigSkyGrid(64, 64);
}
