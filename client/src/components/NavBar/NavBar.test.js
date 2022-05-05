import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';
import NavBar from './Index';

test('render about link', () => {
    render(<NavBar />);
    expect(screen.getByText("Zoomie")).toBeInTheDocument();
  })

describe('Header', () => {
    test('it renders a nav tag', () => {
        render(<Header />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('NavBar');
        expect(nav).toBeInTheDocument();
    })
})
