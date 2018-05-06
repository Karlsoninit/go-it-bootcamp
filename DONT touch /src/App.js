import React, { Component } from 'react';
import {MainWrap,ContentBox} from './components/ui';
import {BrowserRouter, Switch} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <MainWrap>
                <Switch>
                    <SideBar/>
                    <ContentBox/>
                </Switch>
            </MainWrap>
        </BrowserRouter>
    );
  }
}



export default App;

