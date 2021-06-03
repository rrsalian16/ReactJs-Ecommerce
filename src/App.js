import React from 'react';

import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
  Redirect
} from 'react-router-dom';

import { ContextProvider } from './Context/Context';
import Checklist from './Checklist';
import Cart from './Cart';
import CheckOut from './CheckOut';

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="header">
          <ul className="route-link-list">
            <li className=" route-link-item logo">
              <Link to="/home">e-commerce</Link>
            </li>

            <li className="route-link-item">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path={['/home', '/']} component={Checklist} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />
        </Switch>
        <Redirect from="/" to="/" />
      </Router>
    </ContextProvider>
  );
}
