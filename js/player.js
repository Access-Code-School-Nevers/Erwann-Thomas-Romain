// Animation
var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript(direction) {
  var row = 0; // choosing a row for a different animation
  var position = 40; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 40; //diff as a variable for position offset

  if (direction == "left") {
    document.getElementById("player").style.transform = "scaleX(-1)";
  } else if (direction == "right") {
    document.getElementById("player").style.transform = "scaleX(1)";
  }


  tID = setInterval(() => {

    document.getElementById("player").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"

    if (position < 400) {
      position = position + diff;
    }
    //we increment the position by 40 each time
    else {
      position = 40;
    }
    //reset the position to 40px, once position exceeds 1536px

  }, interval); //end of setInterval
} //end of animateScript()


// var position = 0;
// const interval = 100;
// const diff = 40;
// const max = 400;
// var animePlayer = setInterval(() => {
//       document.getElementById("player").style.backgroundPosition = position + 'px 0px
//       position += diff;
//       if (position > max) position = 0;
// }, interval);

// Movements
var canBomb = true;
var player = document.getElementById('player');
var moveSize = 40;

var touches = [];

var nextMove = 50;
setInterval(loopMove, 1);
function loopMove(){
  if (nextMove == 0) {
    nextMove = 50;
    if (touches.includes('ArrowUp')) {
      if(player.offsetTop > 0)
        player.style.top = (player.offsetTop - moveSize)+"px";
    }
    if (touches.includes('ArrowDown')) {
      if(player.offsetTop + player.offsetHeight < conteneurElt.offsetHeight)
        player.style.top = (player.offsetTop + moveSize)+"px";
    }
    if (touches.includes('ArrowRight')) {
      animateScript("right");
      if(player.offsetLeft + player.offsetWidth < conteneurElt.offsetWidth)
        player.style.left = (player.offsetLeft + moveSize)+"px";
    }
    if (touches.includes('ArrowLeft')) {
      animateScript("left");
      if(player.offsetLeft > 0)
        player.style.left = (player.offsetLeft - moveSize)+"px";
    }
  } else {
    nextMove--;
  }
}
function bomb() {
  canBomb = false;
  var newBomb = {};
  newBomb.__proto__ = addBomb.prototype;
  newBomb.constructor = addBomb;
  newBomb.constructor(player,this);
}
document.addEventListener('keypress', function(event) {
  if (event.code == 'Space') if (canBomb) bomb();
});
document.addEventListener('keydown', function(event) { touches.push(event.code); });
document.addEventListener('keyup', function(event) { touches = touches.filter(e => e !== event.code); });
