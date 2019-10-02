class Bombe {
  constructor(poseur, class_call) {
    this.class_call = class_call;
    this.poseur = poseur;
  }

  poseBomb() {
    var js = this.class_call;
  	var childBomb = document.createElement("div");
    childBomb.id = "bombe";
    childBomb.style.left = this.poseur.style.left;
    childBomb.style.top = this.poseur.style.top;
  	conteneurElt.appendChild(childBomb);

    setTimeout(function() { // Changement du sprite bombe2
      childBomb.style.backgroundPosition = (allSize - (allSize*2)) + "px 0px";
      setTimeout(function() { // Changement du sprite bombe3
        childBomb.style.backgroundPosition = (allSize - (allSize*3)) + "px 0px";
        setTimeout(function() {
          js.canBomb = true;

          var murTouche = [];

          var newX = childBomb.offsetLeft;
          var newY = childBomb.offsetTop;

          newX += childBomb.offsetWidth;
          var seeWall = wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + childBomb.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && childBomb.offsetHeight + newY > e.offsetTop && e.classList.contains('mur-cassable'));
          if (seeWall.length > 0) murTouche.push(seeWall);

          newX = childBomb.offsetLeft;
          newX -= childBomb.offsetWidth;
          var seeWall = wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + childBomb.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && childBomb.offsetHeight + newY > e.offsetTop && e.classList.contains('mur-cassable'));
          if (seeWall.length > 0) murTouche.push(seeWall);

          newX = childBomb.offsetLeft;
          newY += childBomb.offsetHeight;
          var seeWall = wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + childBomb.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && childBomb.offsetHeight + newY > e.offsetTop && e.classList.contains('mur-cassable'));
          if (seeWall.length > 0) murTouche.push(seeWall);

          newY = childBomb.offsetTop
          newY -= childBomb.offsetHeight;
          var seeWall = wall.filter(e => newX < e.offsetLeft + e.offsetWidth && newX + childBomb.offsetWidth > e.offsetLeft && newY < e.offsetTop + e.offsetHeight && childBomb.offsetHeight + newY > e.offsetTop && e.classList.contains('mur-cassable'));
          if (seeWall.length > 0) murTouche.push(seeWall);

          murTouche.forEach(function(item){
            item[0].remove();
          });

          new Explosion(childBomb.offsetLeft, childBomb.offsetTop).explo();
          childBomb.id = "explo";
  				childBomb.style.backgroundImage = "url('img/explo.png')";
  				childBomb.style.backgroundPosition = "0px 0px";
  				setTimeout(function() {
  					 childBomb.style.backgroundPosition = (allSize - (allSize*2)) + "px 0px";
  					 setTimeout(function() {
  							 childBomb.style.backgroundPosition = (allSize - (allSize*3)) + "px 0px";
  							 setTimeout(function() {
  								 childBomb.remove();
  							 }, 200);
  					 }, 200);
  				 }, 200);
        }, 700);
      }, 700);
    }, 700);
  }
}
