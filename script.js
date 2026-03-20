/*total space of the container div with same size for width and height (700px)*/

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
    squareDiv.style.border = "1px solid rgba(0, 0, 0, 0.05)";

    squareDiv.dataset.hue = Math.floor(Math.random() * 360);
    squareDiv.dataset.lightness = 100;

    divContainer.appendChild(squareDiv);
  }
}


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