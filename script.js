/*total space of the container div with same size for width and height (700px)*/

const initialSquareDivSize = 16;

const divContainer = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-btn");
const resizeBtn = document.querySelector("#resize-btn");

fillUpContainerDiv(initialSquareDivSize);

divContainer.addEventListener("mouseover", (e) => {
  const target = e.target;

  if (e.target !== divContainer) {
    let squareDivLightness = parseFloat(target.dataset.lightness);
    const squareDivHue = target.dataset.hue;

    if (squareDivLightness > 0) {
      squareDivLightness -= 10;
      target.dataset.lightness = squareDivLightness;

      target.style.backgroundColor = `hsl(${squareDivHue}, 100%, ${squareDivLightness}%)`;
      target.style.border = "none";
    }
  }
});

resetBtn.addEventListener("click", () => {
  divContainer.innerHTML = "";
  fillUpContainerDiv(initialSquareDivSize);
});

resizeBtn.addEventListener("click", () => {
  let isnotValid = true;
  
  while (isnotValid) {
    let userInput = prompt("Please enter a new grid size (Minimum 1 and Maximum 100):");

    if (userInput === null) {
      return;
    }

    let newSize = parseInt(userInput);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
      alert("Error: Please enter a whole number between 1 and 100");
      continue;
    }

    divContainer.innerHTML = "";
    fillUpContainerDiv(newSize);
    isnotValid = false;
  }

});

function fillUpContainerDiv(numberOfDivs) {
  const squareSize = (100 / numberOfDivs) + "%" ;

  for (let i = 0; i <= numberOfDivs * numberOfDivs; i++) {
    const squareDiv = document.createElement("div");

    squareDiv.style.width = squareSize;
    squareDiv.style.height = squareSize;

    squareDiv.style.flex = `1 1 auto`;
    squareDiv.style.boxSizing = "border-box";
    squareDiv.style.border = "1px solid rgba(0, 0, 0, 0.05)";

    squareDiv.dataset.hue = Math.floor(Math.random() * 360);
    squareDiv.dataset.lightness = 100;

    divContainer.appendChild(squareDiv);
  }
}