function addBomb(perso,js) {
	this.perso = perso;
	var childBomb = document.createElement("div");
  childBomb.id = "bombe";
  childBomb.style.left = perso.style.left;
  childBomb.style.top = perso.style.top;
	conteneurElt.appendChild(childBomb);

  setTimeout(function() { // Changement du sprite bombe2
    childBomb.style.backgroundPosition = (allSize - (allSize*2)) + "px 0px";
    setTimeout(function() { // Changement du sprite bombe3
      childBomb.style.backgroundPosition = (allSize - (allSize*3)) + "px 0px";
      setTimeout(function() {
				
				js.canBomb = true;
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
