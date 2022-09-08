import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [total, setTotal] = useState(null);
  const [err, setErr] = useState(null);
  const handleClick = (e) => {
    const result = calculate(
      {
        total,
        next,
        operation,
        err,
      },
      e.target.value,
    );
    setTotal(() => result.total);
    setNext(() => result.next);
    setOperation(() => result.operation);
    setErr(() => result.err);
  };
  return (
    <div id="wrapper">
      <div id="app">
        <div className="calculator">
          <div className="calculator-display">
            {next || operation || total || err || 0}
          </div>
          <div className="calculator-keypad">
            <div className="input-keys">
              <div className="function-keys">
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-clear "
                  value="AC"
                >
                  AC
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-sign "
                  value="+/-"
                >
                  +/-
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-percent "
                  value="%"
                >
                  {' '}
                  %
                </button>
              </div>
              <div className="digit-keys">
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-0 "
                  value={0}
                >
                  {' '}
                  0
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-dot "
                  value="."
                >
                  {' '}
                  .
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-1 "
                  value={1}
                >
                  1
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-2 "
                  value={2}
                >
                  2
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-3 "
                  value={3}
                >
                  3
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-4 "
                  value={4}
                >
                  4
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-5 "
                  value={5}
                >
                  5
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-6 "
                  value={6}
                >
                  {' '}
                  6
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-7 "
                  value={7}
                >
                  7
                  {' '}
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-8 "
                  value={8}
                >
                  {' '}
                  8
                </button>
                <button
                  type="button"
                  onClick={handleClick}
                  className="calculator-key key-9 "
                  value={9}
                >
                  9
                  {' '}
                </button>
              </div>
            </div>
            <div className="operator-keys">
              <button
                type="button"
                onClick={handleClick}
                className="calculator-key key-devide "
                value="÷"
              >
                /
                {' '}
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="calculator-key key-multiply "
                value="x"
              >
                *
                {' '}
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="calculator-key key-subtract "
                value="-"
              >
                -
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="calculator-key key-add "
                value="+"
              >
                +
                {' '}
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="calculator-key key-equals"
                value="="
              >
                {' '}
                =
                {' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
