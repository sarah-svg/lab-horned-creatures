import React, { Component } from 'react'


import images from './data.js';
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {

    state = {
        filter1: ''
      
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        })
    }

    handleChange2 = e => {
        this.setState({
            filter2: e.target.value
        })
    }

    render() {

        const filteredCreatures = images.filter((image) => {
            if (!this.state.filter ) return true;
            if (this.state.filter === image.keyword) return true;
            return false;
        })
       


        return (
            <>
            <select onChange={this.handleChange2}>
                    <option></option>
                    {images.map(image => <option value={image.horns}>{image.horns}</option>)}
                </select>
                <select onChange={this.handleChange}>
                    <option></option>
                    {images.map(image => <option value={image.keyword}>{image.keyword}</option>)}
                </select>
                <div className="creatures">
                    {
                        filteredCreatures.map(image =>
                            <ImageItem
                                title={image.title}
                                src={image.url}
                                description={image.description}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}