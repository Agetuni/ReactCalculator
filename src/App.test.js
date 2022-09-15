import { render } from '@testing-library/react';
import App from './App';

test('expect quote page to match working snapshot', () => {
  const quotePage = render(<App />);
  expect(quotePage).toMatchSnapshot();
});
