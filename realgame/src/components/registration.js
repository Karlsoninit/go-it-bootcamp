



import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';






window.socket = socket("http://localhost:9999", {
    patch: '/registration'
});

const Reg = styled.div`
    margin: auto;
    display: flex
    flex-direction: column
    width: 400px
    height: 300px
    background-color: green
    text-align: center
`


const InputPassword = styled.input`
    width: 200px;
    height: 40px;
    margin-top: 30px
    
`

const InputLogin = styled.input`
    width: 200px;
    height: 40px;
    margin-top: 30px;
    
`

const ButtonStyle = styled.button`
    width: 100px;
    height: 30px;
    margin: auto;
`


class Registration extends Component {
    constructor(props){
        super(props);
        this.state  = {
            login: '',
            password: ''
        }


    }

    ChangePassword = (event) => {
        // console.log('dsdsd',this.t);
        this.setState({
            password: event.target.value
        })
    }

    ChangeLogin = (event) => {
        this.setState({
            login: event.target.value
        })
    }






    render() {
        return (
            <Reg>



                <div>
                    <InputLogin placeholder='Enter login ' value={this.state.login} onChange={this.ChangeLogin}/>
                </div>

                <div>
                    <InputPassword placeholder='Enter password' value={this.state.password} onChange={this.ChangePassword}/>
                </div>

                <ButtonStyle><Link to="/game">Registration</Link></ButtonStyle>

            </Reg>
        );
    }
}

export default Registration;