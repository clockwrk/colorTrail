import React, { Component } from 'react';
import Ball from './Ball.js';



class Pong extends Component {

  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      frameCount:0,

    }

  }
  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');

    this.setState({ context: context });


  }
  componentDidUpdate(prevProps, prevState) {
    this.start();
    requestAnimationFrame(() => {this.update()});
  }


  update() {
    const context = this.state.context;
    context.save()



    this.ball.render(this.state);
    // console.log(this.frameCount++);
    requestAnimationFrame(() => {this.update()});
  }

  start() {
    //Make a ball
    let ball = new Ball({
      position: {
        x: this.state.screen. width/2,
        y: this.state.screen.height/2
      }
    });

    ball.render(this.state);
    this.ball = ball;

  }

  render() {
    return (
      <div>
        <canvas ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </div>
    );
  }
}

export default Pong;
