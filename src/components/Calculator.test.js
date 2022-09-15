import { render ,fireEvent} from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {

    test('expect quote page to match working snapshot', () => {
      const quotePage = render(<Calculator />);
      expect(quotePage).toMatchSnapshot();
    });
  
    it('displays result of 8.2 ÷ 2 = 4.1', () => {
      const { getByText } = render(<Calculator />);
  
      fireEvent.click(getByText('8'));
      fireEvent.click(getByText('.'));
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('/'));
      fireEvent.click(getByText('2'));
      fireEvent.click(getByText('='));
  
      expect(getByText('4.1')).toBeInTheDocument();
    });
  });