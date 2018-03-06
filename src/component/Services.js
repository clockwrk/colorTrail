export function RGB2Color(r,g,b){
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }

export function byte2Hex(n){
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

export function drawStar(context,cx,cy,spikes,outerRadius,innerRadius, color){
      var rot=Math.PI/2*3;
      var x=cx;
      var y=cy;
      var step=Math.PI/spikes;

      context.beginPath();
      context.moveTo(cx,cy-outerRadius)
      for(var i = 0 ; i < spikes ; i++){
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x,y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x,y)
        rot += step
      }
      context.lineTo(cx, cy - outerRadius);
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = color;
      context.stroke();
      context.fillStyle = color;
      context.fill();
      context.save()
    }

  // export function drawBall(){
  //   context.beginPath();
  //   context.arc(this.position.x += this.velocity.x , this.position.y += this.velocity.y , 40, 0, 2*Math.PI);
  //   context.fillStyle = RGB2Color(red,green,blue);
  //   context.fill();
  //   context.stroke();
  //   context.save()
  // }
