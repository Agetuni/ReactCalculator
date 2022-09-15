import { render } from '@testing-library/react';
import Nav from './Nav';

test('expect quote page to match working snapshot', () => {
  const quotePage = render(<Nav />);
  expect(quotePage).toMatchSnapshot();
});
