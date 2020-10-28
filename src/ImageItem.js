
import React, { Component } from 'react';

 export default class ImageItem extends Component {
    render() {
        return (
            <>
            <div className="image-item" stye={{ background: this.props.color }}>
                <div>{this.props.title}</div>
                <img className="creature" src={this.props.src} alt='horned creature' />
                <div>{this.props.description}</div>
            </div>

            </>
        )
    }
  }
  