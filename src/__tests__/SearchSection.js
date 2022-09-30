import { render, screen } from '@testing-library/react';
import SearchSection from '../components/SearchSection';

test('check if button is exist', () => {
    render(<SearchSection />);
    const buttonElement = screen.getByTestId('search-button');
    expect(buttonElement).toBeInTheDocument;
});