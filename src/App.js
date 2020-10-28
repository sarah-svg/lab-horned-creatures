
import React, { Component } from 'react';

import images from './data.js';
import './App.css';


class Header extends React.Component {
  render() {
      return (
          <div> Hi, Welcome  {this.props.name}, to the Horned Animal Page!</div>
          
      );
  }
}







 class ImageItem extends Component {
  render() {
      return (
          <div className="image-item" stye={{ background: this.props.color }}>
              <div>{this.props.title}</div>
              <img className="creature" src={this.props.src} alt='horned creature' />
              <div>{this.props.description}</div>
          </div>
      )
  }
}

function App() {
  
  return (
    <div className="App">
      <Header name="Sarah" />
     <select >
     <option value=''>All Options</option>
       <option value='1'>1</option>
       <option value='2'>2</option>
       <option value='3'>3</option>
       <option value='100'>100</option>
     </select>
      {
        images.map(image => <ImageItem
          title={image.title}
          src={image.url}
          description={image.description} />
        )
      }

    </div>
  );
}

export default App;






