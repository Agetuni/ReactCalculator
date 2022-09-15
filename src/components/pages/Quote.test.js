import { render } from '@testing-library/react';
import Quote from './Quote';

test('expect quote page to match working snapshot', () => {
  const quotePage = render(<Quote />);
  expect(quotePage).toMatchSnapshot();
});
