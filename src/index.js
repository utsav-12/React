import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

let currDate = new Date(2021,5,2,15);
currDate = currDate.getHours();
let message = '';
const cssStyle = {};

if(currDate >=1 && currDate < 12)
{
  message = 'Good Morning';
  cssStyle.color = 'green';
}
else if(currDate >=12 && currDate < 19)
{
  message = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else{
  message = 'Good Night';
  cssStyle.color = 'black';
}

ReactDom.render(

  <h1> Hello Sir, <span style = {cssStyle}> {message} </span> </h1>,

  document.getElementById('root')
);