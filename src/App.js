import React from "react";

class App extends React.Component {
  render () {
    return(
      <div className="container">
        <h1> Hello Dojo!</h1>
        <h2> Things I need to do: </h2>
        <ul>
          <li>Learn React</li>
          <li>Learn Python</li>
          <li>Learn Flask</li>
          <li>Learn Jinja</li>
          <li>Learn Node</li>
          <li>Learn Npm</li>
        </ul>
      </div>
    );
  }
}

export default App;
