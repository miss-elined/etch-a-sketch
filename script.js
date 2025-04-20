const container = document.querySelector(".container");
const btn = document.querySelector("button");
let dimension = 0;
const canvasSize = 500;

btn.addEventListener("click", getDimension);

function getDimension() {
  dimension = Number(prompt("Type in square side:"));
  if (dimension > 100) {
    alert("That's too large. Please enter a number below 100");
    getDimension();
  } else {
    container.querySelectorAll(".sq").forEach((square) => square.remove());
    createCanvas();
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "rgb(40, 40, 40)";
}

function createCanvas() {
  let sqSide = canvasSize / dimension;
  for (let i = 0; i < dimension; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    for (let j = 0; j < dimension; j++) {
      let sq = document.createElement("div");
      sq.setAttribute("class", "sq");
      sq.style.width = sqSide + "px";
      sq.style.height = sqSide + "px";
      row.appendChild(sq);
    }
  }

  const sq = document.querySelectorAll(".sq");
  sq.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
  });
}
