import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/common/navbar';
import MoviesPage from './pages/moviespage';
import LoginForm from './pages/loginForm';
import NotFound from './components/notFound';
import CustomersPage from './pages/customerspage';
import ReantalsPage from './pages/rentalspage';
import MovieForm from './pages/movieForm';
import RegisterForm from './pages/registerForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        {/* <Route path='movies/new' component={NewMovie} /> */}
        <Route path='/movies' exact component={MoviesPage} />
        <Route path='/movies/:id' component={MovieForm} />
        <Route path='/customers' component={CustomersPage} />
        <Route path='/rentals' component={ReantalsPage} />
        <Route path='/not-found' component={NotFound} />
        <Redirect from='/' to='movies' />
        <Redirect to='not-found' />
      </Switch>
    </div>
  );
}

export default App;
