import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'calculator',
    };
  }

  render() {
    return (
      <div id="wrapper">
        <div id="app">
          <div className="calculator">
            <div className="calculator-display">
              <p> </p>
            </div>
            <div className="calculator-keypad">
              <div className="input-keys">
                <div className="function-keys">
                  <button type="button" className="calculator-key key-clear ">AC</button>
                  <button type="button" className="calculator-key key-sign ">+/- </button>
                  <button type="button" className="calculator-key key-percent "> %</button>
                </div>
                <div className="digit-keys">
                  <button type="button" className="calculator-key key-0 " value={0}> 0</button>
                  <button type="button" className="calculator-key key-dot " value="."> .</button>
                  <button type="button" className="calculator-key key-1 " value={1}>1 </button>
                  <button type="button" className="calculator-key key-2 " value={2}>2 </button>
                  <button type="button" className="calculator-key key-3 " value={3}>3 </button>
                  <button type="button" className="calculator-key key-4 " value={4}>4 </button>
                  <button type="button" className="calculator-key key-5 " value={5}>5 </button>
                  <button type="button" className="calculator-key key-6 " value={6}> 6</button>
                  <button type="button" className="calculator-key key-7 " value={7}>7 </button>
                  <button type="button" className="calculator-key key-8 " value={8}> 8</button>
                  <button type="button" className="calculator-key key-9 " value={9}>9 </button>
                </div>
              </div>
              <div className="operator-keys">
                <button type="button" className="calculator-key key-devide " value={9}>/ </button>
                <button type="button" className="calculator-key key-multiply " value={9}>* </button>
                <button type="button" className="calculator-key key-subtract " value={9}>-</button>
                <button type="button" className="calculator-key key-add " value={9}>+ </button>
                <button type="button" className="calculator-key key-equals ">= </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
