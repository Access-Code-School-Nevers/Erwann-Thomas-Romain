var conteneurElt = document.getElementById('conteneur');
<<<<<<< HEAD
var sectionElt = document.getElementById('bomberman')
var largeur = 70;
var hauteur = 35;
=======
var sectionElt = document.getElementById('bomberman');
var largeur = 30;
var hauteur = 15;

>>>>>>> c21693ab10b27059f53d2f6329ddc8b6db58ae2f
var allSize = 40;
var numberWall = 12;
var ennemy = [];
var wall = [];
var murElt = document.createElement('div');
var x = [0, 40, 80, 120, 160, 200];
var y = [0, 40, 40, 40, 40];

conteneurElt.style.width = (largeur * 40) + "px";
conteneurElt.style.height = (hauteur * 40) + "px";
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
