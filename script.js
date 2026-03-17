/*total space of the container div with same size for width and height (700px)*/
const containerSize = 700;
const initialSquareDivSize = 16;

const divContainer = document.querySelector(".container");


fillUpContainerDiv(initialSquareDivSize);



function fillUpContainerDiv(numberOfDivs) {
  const squareSize = (100 / numberOfDivs) + "%" ;

  for (let i = 0; i <= numberOfDivs * numberOfDivs; i++) {
    const squareDiv = document.createElement("div");

    squareDiv.style.width = squareSize;
    squareDiv.style.height = squareSize;

    squareDiv.style.flex = `1 1 auto`;
    squareDiv.style.boxSizing = "border-box";
    squareDiv.style.border = "1px solid black";

    divContainer.appendChild(squareDiv);
  }
}