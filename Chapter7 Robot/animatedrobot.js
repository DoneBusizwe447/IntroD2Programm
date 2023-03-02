
document.getElementById("lefteye").style.backgroundColor =
    "purple";
document.getElementById("head").style.transform =
    "rotate(0deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "9px black solid ";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "5px black solid";
var rightEye = document.getElementById("righteye");
righteye.addEventListener("click", moveUpDown);
var leftEye = document.getElementById("lefteye");
lefteye.addEventListener("click", moveUpDown);
var leftArm = document.getElementById("leftarm");


function moveUpDown(e) {
    var robotPart = e.target;
    var top = 9;
    var id = setInterval(frame, 30) // draw every 40ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 60) {
            clearInterval(id);
        }
    }
}
var rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveLeftRight);

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 100;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 5) {
            clearInterval(id);
        }
    }
}
var head = document.getElementById("head");
head.addEventListener("click", moveLeftRight);

function moveLeftRightLeft(e) {
    var robotPart = e.target;
    var left = 30;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left--;
        if (left === 5) {
            clearInterval(id);
        }
    }
}