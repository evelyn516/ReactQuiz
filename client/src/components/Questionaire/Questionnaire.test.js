import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Questionaire from './Questionaire';
import userEvent from '@testing-library/user-event';

describe('Questionnaire', () => {

    beforeEach(() => {render(<Questionaire />, { wrapper: MemoryRouter }) });

    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });

    test('it loads with score at 0', ( ) => {
		const score = screen.getByRole('trackScore');
		expect(score.textContent).toContain("0"); 
	});

    test('it renders a question', () => {
        //const leaderboardButton = screen.getByRole('leaderboard')
        //expect(leaderboardButton.textContent).toContain
    });

    test('if answer correct', () => {
            const button = screen.getByRole('button',);
            userEvent.click(button);
            expect(counter.textContent).toBe("1");
        
    });

    test('if answer incorrect', () => {
        
    });

    test('changes question if takes longer than 20 seconds', () => {
        
    });

    test('returns score +1 for a correct answer', () => {
        const [answerSelected, setAnswerSelected] = setState(true);
        const score = screen.getByRole('trackScore');
		expect(score.textContent).toContain("1"); 
        
    });
});

