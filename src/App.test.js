// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockLock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockLock/i);
    expect(titleElement).toBeInTheDocument();
});
