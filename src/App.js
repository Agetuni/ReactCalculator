import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/pages/Nav';
import Quote from './components/pages/Quote';
import Home from './components/pages/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="quote" element={<Quote />} />
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;
