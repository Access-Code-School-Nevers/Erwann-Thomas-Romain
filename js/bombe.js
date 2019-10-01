function addBomb(perso) {
	var childBomb = document.createElement("div");
  childBomb.id = "bombe";
  childBomb.style.left = "0px";
  childBomb.style.top = "0px";
	perso.appendChild(childBomb);
  poser(childBomb);
}

const poseBombe = {
  bombe: null,
  startExplo: function() { // Début de l'explosion
    setTimeout(function() { // Changement du sprite bombe2
      bombe.style.backgroundImage = "url('img/bombe2.png')";
      setTimeout(function() { // Changement du sprite bombe3
        bombe.style.backgroundImage = "url('img/bombe3.png')";
        setTimeout(function() {
          const boom = Object.create(explosion);
          boom.explo = bombe;
          bombe.id = "explo";
          boom.startSmoke();
					
        }, 700);
      }, 700);
    }, 700);
  }
}

const explosion = {
  explo: null,
  startSmoke: function() {
    explo.style.backgroundImage = "url('img/explo1.png')";
     setTimeout(function() {
       explo.style.backgroundImage = "url('img/explo2.png')";
       setTimeout(function() {
         explo.style.backgroundImage = "url('img/explo3.png')";
         setTimeout(function() {
           explo.remove();
         }, 200);
       }, 200);
     }, 200);
  }
}

function poser(theBomb) {
  const bombe = Object.create(poseBombe);
  bombe.bombe = theBomb;
  bombe.startExplo();
}
