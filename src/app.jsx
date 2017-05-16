import React from 'react';
import '../styles/index.scss';
import {FigureImage} from 'pattern-figure-image/FigureImage';
const figimg = {
  img: {
    src: 'https://unsplash.it/200/300',
    alt: 'testering',
  },
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <FigureImage {...figimg} />
      </div>
    )
  }
}
