$(function() {
  $("#b1").draggable();
  $("#b2").draggable();
  $("#b3").draggable();
  $("#b4").draggable();
  $("#b5").draggable();
  $("#b6").draggable();
});

function mouseLog() {
  // console.log("function is called")
  var x = event.pageX; // get the horiztonal coordinate
  var y = event.pageY; // get vertical coordinate
  console.log("our x value is: " + x + "and our y value is " + y);

  var cursor = document.querySelector("#cursor");

  // cursor.style.backgroundColor = "rgg(120," + x + ", 120)";

  cursor.style.left = x - 10 + "px";
  cursor.style.top = y - 10 + "px";
}

function firstFunction() {
  var firstId = document.getElementById("firstimage");
  if (firstId.style.display === "block") {
    firstId.style.display = "none";
  } else {
    firstId.style.display = "block";
  }
}

function secondFunction() {
  var firstId = document.getElementById("secondimage");
  if (firstId.style.display === "block") {
    firstId.style.display = "none";
  } else {
    firstId.style.display = "block";
  }
}

function thirdFunction() {
  var firstId = document.getElementById("thirdimage");
  if (firstId.style.display === "block") {
    firstId.style.display = "none";
  } else {
    firstId.style.display = "block";
  }
}

function backgroundFunction1() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "#1a287b";
}

function backgroundFunction2() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "";
}

function backgroundFunction3() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "#1a287b";
}

function backgroundFunction4() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "";
}

function backgroundFunction5() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "#1a287b";
}

function backgroundFunction6() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "";
}

function backgroundFunction7() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "#1a287b";
}

function backgroundFunction8() {
  var maincontainer = document.getElementById("mc");
  maincontainer.style.backgroundColor = "";
}

var i = 0;
var images = [];
var time = 3000;

images[0] =
  "https://www.mendo.nl/wp-content/uploads/2019/11/mendo-book-virgil-abloh-figures-of-speech-special-edition-studio-01-3-of-11-1500x1875-c-default.jpg";
images[1] =
  "https://www.mendo.nl/wp-content/uploads/2019/11/mendo-book-virgil-abloh-figures-of-speech-special-edition-studio-01-5-of-11-2000x2500-c-default.jpg";
images[2] =
  "https://www.mendo.nl/wp-content/uploads/2019/10/mendo-book-amsterdam-uncovered-studio-01-35-of-46-2000x2500-c-default.jpg";
images[3] =
  "https://www.mendo.nl/wp-content/uploads/2019/10/mendo-book-aesop-studio-01-5-of-5-2000x2500-c-default.jpg";
images[4] =
  "https://www.mendo.nl/wp-content/uploads/2019/06/mendo-book-camp-notes-on-fashion-studio-01-4-of-9-2000x2500-c-default.jpg";

// change image

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
