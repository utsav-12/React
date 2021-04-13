import React from 'react';
import './App.css';



function App() {

  let currDate = new Date();
  currDate = currDate.getHours();
  let message = '';
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    message = 'Good Morning';
    cssStyle.color = 'green';
  }
  else if (currDate >= 12 && currDate < 19) {
    message = 'Good Afternoon';
    cssStyle.color = 'orange';
  }
  else {
    message = 'Good Night';
    cssStyle.color = 'black';
  }
  return (
    <h1>Hello Sir  <span style={cssStyle}> {message} </span></h1>
  )
}

export default App
