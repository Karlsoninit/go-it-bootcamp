import React, { Component } from 'react';
import Registration from './components/registration';
import Game from './components/game';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch, Redirect}
    from 'react-router-dom';





const Wrapper = styled.div`
    background-color: blue;
    display: flex;
    height: 400px
`


class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Wrapper>
                  <Switch>
                      <Route path="/registration" component={Registration} />
                      <Route path="/game" component={Game} />
                  </Switch>
              </Wrapper>
          </Router>
      </div>
    );
  }
}

export default App;
