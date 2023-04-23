import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

test('renders learn react link', () => {
  render(<Router><Provider store={store}><App /></Provider></Router>);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
