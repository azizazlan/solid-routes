/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';
const Users = lazy(() => import('./pages/Users'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
import NotFound from './pages/404';

render(
  () => (
    <Router root={App}>
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById('root')
);
