function circ() {
  var arrCircle = Array.from(document.getElementsByClassName("MyCanvas-circle"));
  arrCircle.forEach(function(circle) {
    if (circle.getContext) {
      var ctx = circle.getContext("2d");
      radius = Number(circle.getAttribute("data-radius") == null ? 150 : circle.getAttribute("data-radius"));;
      circle.width = radius*2+20;
      circle.height = radius*2+20;
      perc = Number(circle.getAttribute("data-percent"));
      color = circle.getAttribute("data-color");
      lineW = Number((circle.getAttribute ("data-lw") == null) ? 3 : circle.getAttribute ("data-lw"));
      console.log(lineW);
      centerX = circle.width/2;
      centerY = circle.height/2;
      deg = 3.6 * perc;
      angleStart = 1.5 * Math.PI,
      angleEnd = angleStart - (deg * Math.PI / 180);
      console.log (centerX,centerY,perc,deg,lineW, angleStart,angleEnd);
      //circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.lineWidth = lineW;
      ctx.strokeStyle = "#e0e0e0";
      ctx.stroke();
      //color Circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, angleStart, angleEnd, true);
      ctx.lineWidth = lineW;
      ctx.lineCap = 'round';
      ctx.strokeStyle = color;
      if (deg > 0)  ctx.stroke();
      var parentCir = circle.parentElement;
      var span = document.createElement("span");
      span.innerHTML = perc;
      span.className="percent";
      parentCir.appendChild(span);
    }
  });

}
 circ();
