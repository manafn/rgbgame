var numOfSquares = 6;
var colors = colorGenerator(numOfSquares); ///colors array
var squares = document.querySelectorAll(".square"); /// selecting divs
var backgrd = document.querySelector("h1"); /// selecting h1 background
var colorPicked = colorPick(); /// the chosen color
var colorDisplay = document.querySelector(".colorDisplay") /// selecting h1 rgb 
colorDisplay.textContent = colorPicked; /// change the the h1 rgb to the selected color

var result = document.querySelector(".result"); /// selecting h3 for saying correct or try again

////////
var easyBtn = document.querySelector(".easybtn");
var hardBtn = document.querySelector(".hardbtn");
//////// easy and hard button
easyBtn.addEventListener("click", function () {
    numOfSquares = 3;
    colors = colorGenerator(numOfSquares);
    colorPicked = colorPick();
    colorDisplay.textContent = colorPicked;
    result.style.color = "black";
    backgrd.style.background = "steelblue";
    result.textContent = "";
    result.style.color = "black";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    for (var i = 0; i < squares.length; i++) {
        if (i < 3) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
})

hardBtn.addEventListener("click", function () {
    numOfSquares = 6;
    colors = colorGenerator(numOfSquares);
    colorPicked = colorPick();
    colorDisplay.textContent = colorPicked;
    backgrd.style.background = "steelblue";
    result.style.color = "black";
    result.textContent = "";

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";

    }
})
///////////////////////////
////reseting button
var reset = document.querySelector(".reset");


reset.addEventListener("click", function () {
    colors = colorGenerator(numOfSquares);
    colorPicked = colorPick();
    result.textContent = "";
    result.style.color = "black";
    setTimeout(rgbBack1, 200);
    reset.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) { ///////////////same loop down

        squares[i].style.background = colors[i];



        squares[i].addEventListener("click", function () {
            var colorClicked = this.style.background;
            if (colorClicked === colorPicked) {
                result.textContent = "Correct";
                changeColor();
                reset.textContent = "Play again";

            } else {
                this.style.background = "rgb(53, 53, 54)";
                result.textContent = "Try again";

            }
        })

    }


})
//////////////// main mechanism





for (var i = 0; i < squares.length; i++) {
    /// add intial color to squares
    squares[i].style.background = colors[i]; /// loop and change the divs color to the same number color
    /// add click listiner


    squares[i].addEventListener("click", function () {
        var colorClicked = this.style.background;
        if (colorClicked === colorPicked) {
            result.textContent = "Correct";
            changeColor();
            reset.textContent = "Play again";
            setTimeout(rgbBack2, 100);
            result.style.color = colorPicked;

        } else {
            this.style.background = "rgb(53, 53, 54)";
            result.textContent = "Try again";

        }
    })

}
////// change the colors to the picked color after selecting the right one

function changeColor() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colorPicked;

    };



}

///// to generate random number of color array elements  for pickedcolor
function colorPick() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
///// loop to prduce number of colors throught generator factory and return ot

function colorGenerator(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(colorGener());
    }
    return arr;

}
///// generate random number 

function colorGener() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
////////////////// change h1 background to green
function rgbBack2() {
    backgrd.style.background = "rgb(23, 228, 40)";
}
//////////////////change h1 background to blue and linked color display with it for same timeout
function rgbBack1() {
    backgrd.style.background = "steelblue";
    colorDisplay.textContent = colorPicked;
}
