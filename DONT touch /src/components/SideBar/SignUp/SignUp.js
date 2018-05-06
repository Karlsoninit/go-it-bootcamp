import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            signUpError: '',
            signUpLogin: '',
            signUpEmail: '',
            signUpPassword: ''
        };

        this.onChangeSignUpLogin = this.onChangeSignUpLogin.bind(this);
        this.onChangeSignUpEmail = this.onChangeSignUpEmail.bind(this);
        this.onChangeSignUpPassword = this.onChangeSignUpPassword.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
    }

    onChangeSignUpLogin(event){
        this.setState({
            signUpLogin: event.target.value
        })
    }


    onChangeSignUpEmail(event){
        this.setState({
            signUpEmail: event.target.value
        })
    }

    onChangeSignUpPassword(event){
        this.setState({
            signUpPassword: event.target.value
        })
    }

    onSignUp() {
        const {
                  signUpLogin,
                  signUpEmail,
                  signUpPassword
              } = this.state;

        // Post request to backend
        fetch('/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: signUpLogin,
                email: signUpEmail,
                password: signUpPassword
            }),
        }).then(res => {
            console.log(res);
            return res.json()
        })
            .then(json => {
                console.log(json);
                if(json.status === 200) {
                    this.setState({
                        signUpError: json.message,
                        signUpLogin: '',
                        signUpEmail: '',
                        signUpPassword: ''
                    })
                } else {
                    this.setState({
                        signUpError: json.message,
                    })
                }
            });
    }

    render() {

        const {
                  signUpError,
                  signUpLogin,
                  signUpEmail,
                  signUpPassword
              } = this.state;

        return (
            <div>
                {
                    (signUpError) ? (
                        <p>{signUpError}</p>
                    ) : null
                }
                <p>Sign Up</p>
                <input
                    type="text"
                    placeholder='Login'
                    value={signUpLogin}
                    onChange={this.onChangeSignUpLogin}
                />
                <br/>
                <input
                    type="email"
                    placeholder="Email"
                    value={signUpEmail}
                    onChange={this.onChangeSignUpEmail}
                />
                <br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={signUpPassword}
                    onChange={this.onChangeSignUpPassword}
                />
                <br/>
                <button onClick={this.onSignUp}>Sign Up</button>
            </div>
        );
    }
}

export default SignUp;