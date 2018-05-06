import React, {Component} from 'react';
import {setInStorage} from "../../utils/storage";
import {Redirect} from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: '',
            signInError: '',
            signInLogin: '',
            signInPassword: ''
        };

        this.onChangeSignInLogin = this.onChangeSignInLogin.bind(this);
        this.onChangeSignInPassword = this.onChangeSignInPassword.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
    }

    onChangeSignInLogin(event){
        this.setState({
            signInLogin: event.target.value
        })
    }

    onChangeSignInPassword(event){
        this.setState({
            signInPassword: event.target.value
        })
    }

    onSignIn() {
        const {
                  signInLogin,
                  signInPassword
              } = this.state;

        // Post request to backend
        fetch('/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: signInLogin,
                password: signInPassword
            }),
        }).then(res => res.json())
            .then(json => {
                console.log(json);
                if(json.status === 200) {
                    setInStorage('dashboardUser', {token: json.token});
                    this.setState({
                        signInError: json.message,
                        signInLogin: '',
                        signInPassword: '',
                        token: json.token
                    })
                } else {
                    this.setState({
                        signInError: json.message,
                    })
                }
            });
    }

    render() {
        const {
                  token,
                  signInError,
                  signInLogin,
                  signInPassword
              } = this.state;

        if (token) {
            return <Redirect to='/UserProfile'/>;
        }

        return (
            <div>
                {
                    (signInError) ? (
                        <p>{signInError}</p>
                    ) : null
                }
                <p>Sign In</p>
                <input
                    type="text"
                    placeholder="Login"
                    value={signInLogin}
                    onChange={this.onChangeSignInLogin}
                />
                <br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={signInPassword}
                    onChange={this.onChangeSignInPassword}
                />
                <br/>
                <button onClick={this.onSignIn}>Sign In</button>
            </div>
        );
    }
}


