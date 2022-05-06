import Home from '.';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {

    beforeEach(() => {render(<Home />, { wrapper: MemoryRouter }) });

    test('it renders the title', () => {
        const heading = screen.getByRole('heading')
        expect(heading.textContent).toContain('Zoomies');
    });

    test('it renders a start quiz button', () => {
        const startButton = screen.getByRole('start')
        expect(startButton.textContent).toContain('Start a quiz');
    });

    test('it renders a leaderboard button', () => {
        const leaderboardButton = screen.getByRole('leaderboard')
        expect(leaderboardButton.textContent).toContain('Leaderboards');
    });
});


