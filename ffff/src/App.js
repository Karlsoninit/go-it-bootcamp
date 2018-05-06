import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect}
    from 'react-router-dom';
import News from "./components/News";
import CrossFit from "./components/CrossFit";
import Training from "./components/training";
import Login, {Logout, Signup,Choice} from "./components/Login";
import Coach from '../src/components/Coach/index'
import SelectTrainer from './components/training/SelectTrainer';
import {getLogged, excludeProp} from "./utils";
import Container from './components/Container';





const PrivateRoute = (props) => {

    // Новый компонент, который создан с меню
    let wrappedComponent = Container(props.component, props.title);

    // Проверяем залогинен ли пользователь
    if (getLogged()){

        // Перенаправляем на закрытый роутинг
        return <Route {...excludeProp(props, "component")}
            component={wrappedComponent} />
    } else {

        // Перенаправляем на страницу логина
        return <Redirect to="/login" />
    }
}

class App extends Component {
  render() {
    return (
        <div>
            {/* Обертка для всего что использует роутинг */}
            <Router>
                <div>

                    {/* Изменяющаяся часть роутера */}
                    <Switch>

                        {/* В зависимости от пути, отрисует компонент */}
                        <Route path="/login" component={Login} />

                        <Route path="/logout" component={Logout} />

                        <Route path="/signup" component={Signup} />

                        <Route path="/choice" component={Choice} />

                        <Route path="/coach" component={Coach} />

                        {/* Закрытые роуты */}
                        <PrivateRoute path="/home" component={SelectTrainer} title="Some Page"/>

                        <Redirect to="/login"/>
                    </Switch>
                </div>
            </Router>

        </div>

    );
  }
};

export default App;


// //userInfo
//
// // import React, {Component} from 'react';
// //
// // import { Userright, Box } from '../ui/userinfo'
// //
// //
// // export default class UserInfo extends Component{
// //
// //     render(){
// //         return(
// //             <Userright>
// //                 <Box>
// //
// //                 </Box>
// //             </Userright>
// //         )
// //     }
// // }
//
// // import styled from 'styled-components';
// //
// // export const Userright = styled.div`
// //     box-sizing: border-box;
// //     display: flex;
// //     //flex-direction: column;
// //     width: 90%;
// //     //border: 1px solid blue;
// //     margin: 20px auto 0;
// //     min-height: 350px;
// //     border-radius: 5px;
// //     background: white;
// // `
// //
// // export const Box = styled.div`
// //     width: 150px
// //     height: 70px
// //     background: yellow
// //     margin: 30px
// //     &:hover {
// //         background: red;
// //     }
// // `
//
//
//
//
// //-----------------UserProfile---------Styled
//
// import styled from 'styled-components';
//
//
//
// export const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 90%;
//     border: 1px solid #DDDFE2;
//     margin: 20px auto 0;
//     min-height: 350px;
//     //border-radius: 5px;
//     background: white;
// `
//
// export const IconCurs = styled.div`
//     //width: 50%;
//     color: red;
//     //background: blue;
//     font-weight: bold;
//     font-size: 20px;
//     text-align: right
//
// `
//
// export const ButtonUser = styled.button`
//     width: 55%;
//     margin:  0 auto 10px;
//     // border: 2px solid blue;
//     //border-radius: 5px;
//     outline: none;
//     // color: blue;
//     height: 25px;
//     //font-weight: bold;
//     background-color: blue;
//     color: white;
//     font-size: 16px;
//     &:hover {
//         background: #E9EBEE;
//         color: blue;
//         border: none;
//     }
//
// `
//
// export const ImgUser = styled.div`
//     width: 70%;
//     height: 120px;
//     border: 2px solid blue;
//     margin: 30px auto 40px;
//     //border-radius: 5px;
// `
//
// //-----------------------------------------
//
// //-----------------UserProfile---------Component
//
// import React, {Component} from 'react';
// import { Container , ButtonUser, ImgUser, IconCurs} from '../ui/usercard'
//
//
//
// export default class UserCard extends Component{
//
//     render(){
//         return(
//             <Container>
//                 <ImgUser>
//
//                 </ImgUser>
//
//                 <ButtonUser>
//                     Statistic
//                 </ButtonUser>
//                 <ButtonUser>
//                     Topic of the day
//                 </ButtonUser>
//                 <ButtonUser>
//                     User list
//                 </ButtonUser>
//                 <ButtonUser>
//                     I am here
//                 </ButtonUser>
//
//             </Container>
//         )
//     }
// }
//
//

