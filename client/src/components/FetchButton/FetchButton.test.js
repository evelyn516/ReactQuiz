import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FetchButton from './Index';
import userEvent from '@testing-library/user-event';


    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useLocation: () => ({ state: { email: 'school@edu.ng' } }),
    }));
    
    export const withReduxNRouter = (
        ui,
        { store = createStore(rootReducer, {}) } = {},
        {
        route = '/',
        history = createMemoryHistory({ initialEntries: [ route ] }),
        } = {}
    ) => {
        return {
        ...render(
            <Provider store={store}>
            <Router history={history}>{ui}</Router>
            </Provider>
        ),
        history,
        store,
        };
    };
