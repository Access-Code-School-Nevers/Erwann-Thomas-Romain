class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  explo() {
    this.setExplo(this.x + allSize, this.y);
    this.setExplo(this.x, this.y + allSize);
    this.setExplo(this.x - allSize, this.y);
    this.setExplo(this.x, this.y - allSize);
  }

  setExplo(a , b) {
    // console.log(a + ' - ' + b);
  	var childExplo = document.createElement("div");
    childExplo.id = "explo";
    childExplo.style.left = this.xx;
    childExplo.style.top = this.yy;
  	conteneurElt.appendChild(childExplo);

    childExplo.id = "explo";
		childExplo.style.backgroundImage = "url('img/explo.png')";
		childExplo.style.backgroundPosition = "0px 0px";
		setTimeout(function() {
			 childExplo.style.backgroundPosition = (allSize - (allSize*2)) + "px 0px";
			 setTimeout(function() {
					 childExplo.style.backgroundPosition = (allSize - (allSize*3)) + "px 0px";
					 setTimeout(function() {
						 childExplo.remove();
					 }, 200);
			 }, 200);
		 }, 200);
  }
}
