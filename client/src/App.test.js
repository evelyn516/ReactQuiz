/* import { render, screen} from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import App from './App';

test('App contains NavBar', () => {
  render(<App />);
  const linkElement = screen.getByRole('NavBar');
  expect(linkElement).toBeInTheDocument();
});

test('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(<Router history={history}><App/></Router>);
    userEvent.click(screen.getByText("Start a quiz"));
    expect(history.location.pathname).toEqual('/setupquiz');
});

test('should redirect and update dom', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    userEvent.click(screen.getByText("Start a quiz"));
    expect(screen.getByText('username:')).toBeInTheDocument();
});


 */



/* 

test('full app rendering/navigating', async () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
    const user = userEvent.setup()
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(screen.getByText(/you are home/i)).toBeInTheDocument()
  
    await user.click(screen.getByText(/about/i))
  
    // check that the content changed to the new page
    expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
  })
  
  test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
  
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })
  
  test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    render(
      <Router location={history.location} navigator={history}>
        <LocationDisplay />
      </Router>,
    )
  
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })
 */
