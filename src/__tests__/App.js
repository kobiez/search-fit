import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('check if link to freefit is correct', () => {
    render(<App />);
    const linkElement = screen.getByText(/Freefit/i);
    expect(linkElement.href).toContain("freefit.co.il");
});