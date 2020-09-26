function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      var inicio = new Date("08/10/2020");
      var hoy = new Date();
      var final = new Date("11/25/2020");
      var msAlDia = 1000*60*60*24;
      var hoyAFinal =  Math.round((final.getTime() - hoy.getTime())/msAlDia);
      var inicioAHoy = Math.round((hoy.getTime() - inicio.getTime())/msAlDia);
      var porcentaje = Math.round(inicioAHoy / (inicioAHoy + hoyAFinal) * 100);
      //console.log(porcentaje);
  
      var myDiv = document.getElementById("divId");
  
      if (width >= porcentaje) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        myDiv.innerHTML = width + '%'
      }
  
  
    }
  }