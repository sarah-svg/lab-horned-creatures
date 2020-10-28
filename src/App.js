
import React from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import './App.css';
import items from './data.js';




function App() {

  return (
    <>
    <div className="App">
      <Header name="Sarah" />
     <ImageList items={items}/>
    </div>
    </>
  );
}

export default App;






