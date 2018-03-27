import React, { Component } from 'react';
import {connect} from "react-redux";
import styled from "styled-components";





const Container = styled.div`
    text-align: center;
    box-sizing: border-box;
`
const UserInfo = styled.div`
    background-color: aqua;
    height: 400px;
    font-size: 30px;
`
class App extends Component {
    addTrack(){
        this.props.onAddUser(this.trackInput.value)
        this.trackInput.value = ''
    }
  render() {
    return (
        <Container>
            <UserInfo>
                {this.props.testStore.map((ex, index) =>
                <div key={index}>{ex}</div>)}
            </UserInfo>
            <input type='text' ref={(input) =>{this.trackInput = input}}/>
            <button onClick={this.addTrack.bind(this)}>ADD</button>

        </Container>
    );
  }
}

export default connect (
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddUser: (ExName) => {
            dispatch({
                type: 'ADD',
                name: ExName
            })
        }

    })
)(App)
