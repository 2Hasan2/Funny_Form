    // Get the eye elements
const leftEye = document.getElementById('leftEye');
const rightEye = document.getElementById('rightEye');
const closeLeft=document.getElementById("closeLeft")
const closeRight=document.getElementById("closeRight")
const openLeft=document.getElementById("openLeft")
const openRight=document.getElementById("openRight")

const EyebrowUpDown=document.getElementById("Eyebrow/Up-Down")
const EyebrowDefault=document.getElementById("Eyebrow/Default")



//Get form elements
const user=document.querySelector("#Name"),
pass=document.querySelector("#Password"),
date=document.querySelector("#date"),
email=document.querySelector("#Email"),
array=[user,pass,date,email];
var va;



var intervalId;

function startInterval() {
  intervalId = setInterval(() => {
    openLeft.style.display = "none";
    openRight.style.display = "none";
    closeLeft.style.display = "block";
    closeRight.style.display = "block";

    setTimeout(() => {
      openLeft.style.display = "block";
      openRight.style.display = "block";
      closeLeft.style.display = "none";
      closeRight.style.display = "none";
    }, Math.floor(Math.random() * (100 - 10 + 1)) + 100);
  }, Math.floor(Math.random() * (4000 - 3500 + 1)) + 3500);
};startInterval();




array.forEach((e) => {
    e.addEventListener("beforeinput",()=>{
            if (va!=e.value) {
            va=e.value
            moveEyes(e)
    } 
    })
    e.addEventListener("click",()=>{
        clearInterval(intervalId);
        if (e==pass) {
            openLeft.style.display="none"
            openRight.style.display="none"
            closeLeft.style.display="block"
            closeRight.style.display="block"
            EyebrowDefault.style.display="none"
            EyebrowUpDown.style.display="block"
        }else{
            openLeft.style.display="block"
            openRight.style.display="block"
            closeLeft.style.display="none"
            closeRight.style.display="none"
            EyebrowDefault.style.display="block"
            EyebrowUpDown.style.display="none"
            startInterval();
        }
            if (va!=e.value) {
            va=e.value
            moveEyes(e)
           } 
    })
});

function moveEyes(input) {
    // console.log(user.value.length);
    var leftEyeRect = leftEye.getBoundingClientRect();
    var rightEyeRect = rightEye.getBoundingClientRect();
    
    // The origin point (center) of the eyes
var origin={
Lx:leftEyeRect.left+(leftEyeRect.width/2),
Ly:leftEyeRect.top+(leftEyeRect.height/2),
Rx:rightEyeRect.left+(rightEyeRect.width/2),
Ry:rightEyeRect.top+(rightEyeRect.height/2),
} 
length

var mouseX = input.getBoundingClientRect().left+input.value.length*25;
var mouseY = input.getBoundingClientRect().bottom;
console.log(mouseX,mouseY);
var offset=5;

var delta = {
    R:{x:mouseX-origin.Rx,y:mouseY-origin.Ry},
    L:{x:mouseX-origin.Lx,y:mouseY-origin.Ly},
}


var angle = {
    R:Math.atan2(delta.R.y, delta.R.x),
    L:Math.atan2(delta.L.y, delta.L.x),
}

var coordinatesL = calculateCoordinates(offset,angle.L);
var coordinatesR = calculateCoordinates(offset,angle.R);
  
    // Update the position of the eyes using the transform attribute
leftEye.setAttribute('transform', `translate(${coordinatesL.x},${coordinatesL.y})`);
rightEye.setAttribute('transform', `translate(${coordinatesR.x},${coordinatesR.y})`);
};

// Calculate Cartesian coordinates from polar coordinates
function calculateCoordinates(r,theta) {
  var x = r*Math.cos(theta);
  var y = r* Math.sin(theta);
  return { x: x, y: y };
}


date.addEventListener("change",()=>{
// Get the current date
var currentDate = new Date();

// Prompt the user for their birthday date
var birthday = date.value;

// Create a Date object from the user input
var birthdayDate = new Date(birthday);

// Check if the entered birthday is a valid date
if (isNaN(birthdayDate)) {
  console.log("Invalid date format!");
} else {
  // Calculate the age based on the current date and the birthday
  var age = currentDate.getFullYear() - birthdayDate.getFullYear();
  var monthDiff = currentDate.getMonth() - birthdayDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }

  // Compare the birthday date with the current date
  if (birthdayDate > currentDate) {
    console.log("Not a valid birthday date.");
  } else {
    if (age < 8) {
      console.log("You're so young!");
    } else {
      console.log("Your age is " + age);
    }
  }
}

})
