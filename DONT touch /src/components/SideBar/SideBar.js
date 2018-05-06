import React, {Component} from 'react';
import {Sidebar} from '../ui/index';
import {Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import UserProfile from './UserProfile'

class SideBar extends Component {
    render() {
        return (
            <Sidebar>
                <Route exact path='/' component={SignIn}/>
                <Route path='/SignUp' component={SignUp}/>
                <Route path='/UserProfile' component={UserProfile}/>
            </Sidebar>
        );
    }
}

export default SideBar;