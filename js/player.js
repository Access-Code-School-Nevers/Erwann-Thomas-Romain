// Animation
var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 40; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 40; //diff as a variable for position offset

  tID = setInterval(() => {

    document.getElementById("player").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"

    if (position < 955) {
      position = position + diff;
    }
    //we increment the position by 40 each time
    else {
      position = 40;
    }
    //reset the position to 40px, once position exceeds 1536px

  }, interval); //end of setInterval
} //end of animateScript()


// Movements
var player = document.getElementById('player');
var moveSize = 40;
var parentRect = document.getElementById('conteneur').getBoundingClientRect();
var childRect = document.getElementById('player').getBoundingClientRect();

var touches = [];

setInterval(loopMove, 200);
function loopMove(){
  if (touches.includes('ArrowUp')) {
    if(childRect.top > parentRect.top)
      player.style.top = (player.offsetTop - moveSize)+"px";
  }
  if (touches.includes('ArrowDown')) {
    if(childRect.bottom < parentRect.bottom)
      player.style.top = (player.offsetTop + moveSize)+"px";
  }
  if (touches.includes('ArrowRight')) {
    if(childRect.right < parentRect.right)
      player.style.left = (player.offsetLeft + moveSize)+"px";
  }
  if (touches.includes('ArrowLeft')) {
   if(childRect.left > parentRect.left)
     player.style.left = (player.offsetLeft - moveSize)+"px";
  }
}
function bomb() {
  if (touches.includes('Space')) {
    var newBomb = {};
    newBomb.__proto__ = addBomb.prototype;
    newBomb.constructor = addBomb;
    newBomb.constructor(player);
  }
}

document.addEventListener('keydown', function(event) { touches.push(event.code); });
document.addEventListener('keyup', function(event) { touches = touches.filter(e => e !== event.code); });
document.addEventListener('keypress', function(event) { bomb() });
