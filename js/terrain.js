var conteneurElt = document.getElementById('conteneur');
var sectionElt = document.getElementById('bomberman')
var largeur = 70;
var hauteur = 35;
var allSize = 40;
var numberWall = 12;
var ennemy = [];
var wall = [];
var murElt = document.createElement('div');
var x = [0, 40, 80, 120, 160, 200];
var y = [0, 40, 40, 40, 40];

conteneurElt.style.width = (largeur * 16) + "px";
conteneurElt.style.height = (hauteur * 16) + "px";
conteneurElt.style.borderRadius = "5px";

sectionElt.style.display = "flex";
sectionElt.style.justifyContent = "center";





function creerMur( x, y, cassable){

  murElt.style.width = allSize + "px";
  murElt.style.height = allSize + "px";
  murElt.style.position = "absolute";
  murElt.style.display = "block";
if (cassable){
  murElt.classList.add("mur-cassable");
} else {
  murElt.classList.add("mur-incassable");
}
  conteneurElt.appendChild(murElt);
  return conteneurElt;
};


for (var i = 0; i < x.length; i++) {
  murElt.style.top = x[i] + "px";

  for (var k = 0; k < array.length; k++) {
    array[i]
  }
  })

}
