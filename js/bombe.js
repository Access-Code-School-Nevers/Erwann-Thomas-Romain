const poseBombe = {
  startExplo: function() {
    setTimeOut(etat2, 700);
  },
  etat2: function() {
    setTimeOut(etat3, 700);
  },
  etat3: function() {
    setTimeOut(boom, 700);
  },
  boom: function() {
    //explosion
  }
}
