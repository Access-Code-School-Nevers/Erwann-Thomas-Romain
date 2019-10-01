var conteneurElt = document.getElementById('conteneur');
var sectionElt = document.getElementById('bomberman')
var largeur = 70;
var hauteur = 35;
var allSize = "40px";

var ennemy = [];
var wall = [];

conteneurElt.style.width = (largeur * 16) + "px";
conteneurElt.style.height = (hauteur * 16) + "px";
conteneurElt.style.borderRadius = "5px";

sectionElt.style.display = "flex";
sectionElt.style.justifyContent = "center";





function creerMur( x, y, cassable){

  var murElt = document.createElement('div');
  murElt.style.width = allSize;
  murElt.style.height = allSize;
  murElt.style.position = "absolute";
  murElt.style.top = x;
  murElt.style.right = y;
  murElt.style.display = "block";
if (cassable){
  murElt.classList.add("mur-cassable");
} else {
  murElt.classList.add("mur-incassable");
}

conteneurElt.appendChild(murElt);


  return conteneurElt;
};


creerMur("40px", "40px", true);
creerMur("40px", "160px", true);
creerMur("40px", "200px", true);
