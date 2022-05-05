import { screen, render } from '@testing-library/react';
import QuizBoard from '.';

describe('QuizBoard', () => {
    test('it renders a Questionnaire component', () => {
        const quizboard = render(<QuizBoard />);
        expect(quizboard).toBeTruthy();
    })
})

