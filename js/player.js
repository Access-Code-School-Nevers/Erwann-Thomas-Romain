// Animation
var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 86; //start position for the image slicer
  const interval = 150; //100 ms of interval for the setInterval()
  const diff = 86; //diff as a variable for position offset

  tID = setInterval(() => {

    document.getElementById("player").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"

    if (position < 849) {
      position = position + diff;
    }
    //we increment the position by 86 each time
    else {
      position = 86;
    }
    //reset the position to 86px, once position exceeds 1536px

  }, interval); //end of setInterval
} //end of animateScript()


// Movements
var player = document.getElementById('player');
var moveSize = 4;
var parentRect = document.getElementById('conteneur').getBoundingClientRect();
var childRect;


document.addEventListener('keydown', function(event) {
  childRect = document.getElementById('player').getBoundingClientRect();

  if (event.code == 'ArrowUp') {
    if(childRect.top > parentRect.top)
      player.style.top = (player.offsetTop - moveSize)+"px";
  }
  else if (event.code == 'ArrowRight') {
    if(childRect.right < parentRect.right)
      player.style.left = (player.offsetLeft + moveSize)+"px";
  }
  else if (event.code == 'ArrowDown') {
    if(childRect.bottom < parentRect.bottom)
      player.style.top = (player.offsetTop + moveSize)+"px";
  }
  else if (event.code == 'ArrowLeft') {
    if(childRect.left > parentRect.left)
      player.style.left = (player.offsetLeft - moveSize)+"px";
  }
  else if (event.code == 'Space') {
    addBomb(player);
  }
});
