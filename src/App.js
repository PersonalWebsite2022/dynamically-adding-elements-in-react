import React from 'react';
import './App.css';

const App = () => {
  let names = ["Jason", "Bob", "Tom"];
  function addElements(input){
    let spans=[];
    for(let i=0; i<input.length;i++)
    {
      let span = React.createElement("span", {className: "spanName", key: i.toString()},input[i]);
      spans.push(span);
    }
    let mainContainer = React.createElement("div", {className: "mainContainer"}, spans)
    return mainContainer;
  }
  return (
    <div className="App">
      {addElements(names)}
    </div>
  );
}

export default App;