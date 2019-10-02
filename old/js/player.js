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
var moveSize = 4;

var touches = [];

setInterval(loopMove, 20);
function loopMove(){
  var newY = player.offsetTop;
  var newX = player.offsetLeft;

  if (touches.includes('ArrowUp')) newY -= moveSize;
  if (touches.includes('ArrowDown')) newY += moveSize;
  if ((bombs.filter(e => e.offsetTop == newY && e.offsetLeft == newX)).length == 0) if ((wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + player.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && player.offsetHeight + newY > e.offsetTop)).length == 0) if(newY >= 0 && newY + allSize <= conteneurElt.offsetHeight) player.style.top = newY+"px";

  newY = player.offsetTop;
  if (touches.includes('ArrowRight')) newX += moveSize;
  if (touches.includes('ArrowLeft')) newX -= moveSize;
  if ((bombs.filter(e => e.offsetTop == newY && e.offsetLeft == newX)).length == 0) if ((wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + player.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && player.offsetHeight + newY > e.offsetTop)).length == 0) if(newX >= 0 && newX + allSize <= conteneurElt.offsetWidth) player.style.left = newX+"px";
}
function bomb() {
  canBomb = false;
  new Bombe(player, this).poseBomb();
}
document.addEventListener('keypress', function(event) {
  if (event.code == 'Space') if (canBomb) bomb();
});
document.addEventListener('keydown', function(event) { touches.push(event.code); });
document.addEventListener('keyup', function(event) { touches = touches.filter(e => e !== event.code); });
