import React from 'react';
import Calculator from './components/Calculator';
import Nav from './components/pages/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <div id="wrapper">
          <Calculator />
        </div>
      </>
    );
  }
}

export default App;
