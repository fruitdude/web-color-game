var numOfSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var header = document.getElementById('header');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode button event listeners
  setuptModeButtons();
  setupSquares();
  reset();
}

function setuptModeButtons(){
  for(var i = 0;i < modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset()
    });
  }
}

function setupSquares(){
  for(var i = 0;i < squares.length;i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked suqare
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        header.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = randomPickedColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "new colors";
  messageDisplay.textContent = "";
  //add initial colors to suqares
  for(var i = 0;i < squares.length;i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  header.style.backgroundColor = "#88CBF5";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(){
  for(var i = 0;i < squares.length;i++){
    squares[i].style.backgroundColor = pickedColor;
  }
}

function randomPickedColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var colorsArr = [];
  for(var i = 0;i < num;i++){
    colorsArr.push(randomColor());
  }
  return colorsArr;
}

function randomColor(){
  var colorR = Math.floor(Math.random() * 256);
  var colorG = Math.floor(Math.random() * 256);
  var colorB = Math.floor(Math.random() * 256);
  return "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
}
