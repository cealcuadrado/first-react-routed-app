import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/home" render={() => <h2>Home</h2>} />
          <Route exact path="/">
            <h2>Home</h2>
          </Route>
          <Route exact path="/about" render={() => <h2>About</h2>} />
          <Route exact path="/contact" render={() => <h2>Contact</h2>} />
        </main>
      </Router>
    );
  }
}

export default Layout;
