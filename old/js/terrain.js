var conteneurElt = document.getElementById('conteneur');

var sectionElt = document.getElementById('bomberman');
var largeur = 30;
var hauteur = 15;

var allSize = 40;
var numberWall = 150;
var ennemy = [];
var bombs = [];
var wall = [];

conteneurElt.style.width = (largeur * 40) + "px";
conteneurElt.style.height = (hauteur * 40) + "px";
conteneurElt.style.borderRadius = "5px";

sectionElt.style.display = "flex";
sectionElt.style.justifyContent = "center";


function creerMur(x, y, cassable){
  if (!(x == 0 && y == 0) && !(x == largeur*allSize-allSize && y == hauteur*allSize-allSize) && !(x == 0 && y == hauteur*allSize-allSize) && !(x == largeur*allSize-allSize && y == 0)) {
    if ((wall.filter(e => x < e.offsetLeft + e.offsetWidth && x + e.offsetWidth > e.offsetLeft && y < e.offsetTop + e.offsetHeight && e.offsetHeight + y > e.offsetTop)).length == 0) {
      var murElt = document.createElement('div');

      murElt.style.width = allSize + "px";
      murElt.style.height = allSize + "px";

      murElt.style.position = "absolute";

      murElt.style.left = x + "px";
      murElt.style.top = y + "px";

      if (cassable) murElt.classList.add("mur-cassable"); else murElt.classList.add("mur-incassable");
      conteneurElt.appendChild(murElt);
      wall.push(murElt);
      return true;
    }
  }
  creerMur(rnd(largeur) * allSize, rnd(hauteur) * allSize, rnd(2)-1);
};

for (var i = 0; i < numberWall; i++) {
    creerMur(rnd(largeur) * allSize, rnd(hauteur) * allSize, rnd(2)-1);
}

function rnd(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
