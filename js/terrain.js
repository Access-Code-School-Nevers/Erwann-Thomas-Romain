var conteneurElt = document.getElementById('conteneur');
var sectionElt = document.getElementById('bomberman')
var largeur = 70;
var hauteur = 35;

var allSize = 40;

var ennemy = [];
var wall = [];

conteneurElt.style.width = (largeur * 16) + "px";
conteneurElt.style.height = (hauteur * 16) + "px";
conteneurElt.style.borderRadius = "5px";

sectionElt.style.display = "flex";
sectionElt.style.justifyContent = "center";





function creerMur( x, y, cassable){
  var murElt = document.createElement('div');
  murElt.style.width = allSize + 'px';
  murElt.style.height = allSize + 'px';
  conteneurElt.appendChild(murElt);

  y.style.top = "100px";
  x.style.right = "100px"
  cassable.style.display = "block";
if (cassable) {
  cassable.classList.add("mur-cassable");
} else {
  cassable.classList.add("mur-incassable");
}

  return conteneurElt;
};
