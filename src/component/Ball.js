import React, { Component } from 'react';

class Ball{
  constructor(args) {
    this.position = args.position
    this.velocity = {
      x: 5,
      y: 5
    }

  }

  render(state) {

    if(this.position.x + this.velocity.x  > state.screen.width * state.screen.ratio - 40 || this.position.x + this.velocity.x  <  40 ){
      this.velocity.x = -this.velocity.x;
    }

    if(this.position.y + this.velocity.y  > state.screen.height * state.screen.ratio - 40  || this.position.y + this.velocity.y  <  40 ){
      this.velocity.y = -this.velocity.y;
    }

    const context = state.context;
    context.save()
    context.clearRect(0, 0, state.screen.width, state.screen.height);
    context.beginPath();
    context.arc(this.position.x += this.velocity.x , this.position.y += this.velocity.y , 40, 0, 2*Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.stroke();
    context.save();
  }
}

export default Ball;
