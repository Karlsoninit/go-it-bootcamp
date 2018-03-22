import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Header, Arrow, Title, CloseIcon} from "./ui";
import styled from 'styled-components';
import RenderIf from './general/RenderIf'


const Burger = styled.div`
    border: 4px solid #333;
    width: 30px;
    height: 15px;
    border-left: none;
    position: relative;
    border-right: none;
    &::after {
        content: "";
        width: 30px;
        height: 4px;
        background-color: #333;
        position:absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
`;



const MenuWrapper = styled.div`

`

// Компонент который рисует меню
class Menu extends Component {
    state ={
        visible: false
    }
    render(){

        return (
            <div>
                <RenderIf condition={this.state.visible}>
                    <MenuWrapper>
                        <Header>
                            <CloseIcon/>
                            <Title>
                                menu
                            </Title>
                        </Header>
                        <NavLink to="/home/">home</NavLink>
                        <NavLink to="/daily/">daily</NavLink>
                        <NavLink to="/statistics/">statistics</NavLink>
                        <Link to="/logout/">logout</Link>
                    </MenuWrapper>
                </RenderIf>
                <RenderIf condition ={!this.state.visible}>
                    <Burger />
                </RenderIf>
            </div>

        )
    }
};





export const Wrapper = styled.div`
        background-color: #dedede;
        height: 100vh;
        font-family: Montserrat, sans-serif;
        padding: 30px 20px;
`


// Обертка для компонентов в которых нужно меню
const Container = (Component, title) => {
    let WrappedComponent = (props) => {
        return (
            <Wrapper>
                <Header>
                    <Arrow />
                    <Title>
                        {title}
                    </Title>
                    <Menu/>
                </Header>
                <Component {...props} />
            </Wrapper>
        )
    };
    // Должны вернуть функцию, чтобы можно было передать в
    // Route -> component
    return WrappedComponent;
}

export default Container;
