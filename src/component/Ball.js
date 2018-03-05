import React, { Component } from 'react';
import  RGB2Color from './Services.js';

class Ball{
  constructor(args) {
    this.position = args.position
    this.velocity = {
      x: 5,
      y: 5
    }

  }

  render(state) {
    var time = Date.now(),
        center = 128,
        width = 127,
        len =50,
        frequency =5,
        red = Math.sin(frequency*(time%len) + 0) * width + center,
        green = Math.sin(frequency*(time%len) + 2) * width + center,
        blue = Math.sin(frequency*(time%len)  + 4) * width + center;



    if(this.position.x + this.velocity.x  > state.screen.width * state.screen.ratio - 40 || this.position.x + this.velocity.x  <  40 ){
      this.velocity.x = -this.velocity.x;
    }

    if(this.position.y + this.velocity.y  > state.screen.height * state.screen.ratio - 40  || this.position.y + this.velocity.y  <  40 ){
      this.velocity.y = -this.velocity.y;
    }

    const context = state.context;
    context.save()
    // context.clearRect(0, 0, state.screen.width, state.screen.height);
    context.beginPath();
    context.arc(this.position.x += this.velocity.x , this.position.y += this.velocity.y , 40, 0, 2*Math.PI);
    context.fillStyle = RGB2Color(red,green,blue);
    context.fill();
    context.stroke();
    context.save();
  }
}

export default Ball;
