import React, {Component} from 'react'
import styled from 'styled-components';
import {} from "../ui";
import Select from "../Login/index";
import {ButtonStart} from '../Login/index'


const Container = styled.div`
    text-align: center;
    box-sizing: border-box;
     background-image: -moz-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    background-image: -webkit-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    background-image: -ms-linear-gradient( -10deg, rgb(222,255,201) 0%, rgb(163,248,255) 100%);
    
`

const Choice = styled.input`
    width: 250px;
    border-radius: 30px;
    height: 50px;
    margin: auto;
    text-align: center;
    border-style: none;
    margin-top: 20px;
    
        
    
`

const ListContainer = styled.div`
   width: 300px;
   height: 80px;
   //border: 1px solid red;
   margin: 10px auto;
   display: flex;
   background-color: white;

`
const Image = styled.img`
    width:100px;
    height: 60px;
    //border: 1px solid red;
    margin: auto ;
    
`

const ListInfo = styled.div`
    width: 160px;
    height: 70px;
    //border: 1px solid red;
    margin: auto ;
    font-size: 30px;
    line-height: 70px;

    
`

class Coach extends Component {

    state = {
        trainers: [{
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWi9rVW8MaE0wJ1NR_ithLuY7WmbOabFVrnuu76cXT4LkhhE9",
            name: "Alfred",
            info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus fugiat incidunt necessitatibus optio quas?"
        },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWi9rVW8MaE0wJ1NR_ithLuY7WmbOabFVrnuu76cXT4LkhhE9",
                name: "liza",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus fugiat incidunt necessitatibus optio quas?"
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Vw6Oc4ffsuoAmbdMrEA2s1oXpaKjlHrNbT1uhqWJn9DvxgR7fw",
                name: "Bob",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus fugiat incidunt necessitatibus optio quas?"
            },
            {
                image: "https://www.telegraph.co.uk/content/dam/men/2016/04/22/PD68583783_dtho201_2655530b-xlarge_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg",
                name: "Jack",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus fugiat incidunt necessitatibus optio quas?"
        }],
        image: "",
        search: "",


    }

    SearchTrainer = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onChange = () => {
       let filter = this.state.trainers.name.filter(
           (trainer) => {
               return trainer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
           }
       )
        this.setState({
            name:filter
        })
    }

    render(){

        // let filter = this.state.trainers.filter(
        //     (trainer) => {
        //         return trainer.toLowerCase()
        //             .indexOf(this.state.search.toLowerCase()) !== -1;
        //     }
        // )

        return(
            <Container>
                <Choice placeholder="Choice"
                        type="text"
                        value={this.state.search}
                        onChange={this.SearchTrainer}
                />
                <div>
                    {this.state.trainers.map((trainer) => {
                        return(
                            <ListContainer onClick={this.onLogin}>
                                <Image className="Trainer__photo" src={trainer.image} onClick={this.Choice} />
                                <ListInfo>{trainer.name}</ListInfo>
                            </ListContainer>

                        )
                    })}
                </div>
                <ButtonStart type="button"
                             onClick={this.onLogin}>
                    get started
                </ButtonStart>
            </Container>
        )
    }
}


export default Coach



















// class SelectTrainer extends Component {
//
//     state = {
//         trainers: ["iron man", "Hulk", "Tor"],
//         search:""
//     }
//
//     SearchTrainer = (e) => {
//         this.setState({
//             search: e.target.value
//         })
//     }
//
//
//
//     render(){
//
//         let filter = this.state.trainers.filter(
//             (trainer) => {
//                 return trainer.toLowerCase()
//                     .indexOf(this.state.search.toLowerCase()) !== -1;
//             }
//         )
//
//         return(
//             <div>
//                 <input type="text"
//                        value={this.state.search}
//                        onChange={this.SearchTrainer}
//                 >
//                 </input>
//                 <div>
//                     {filter.map((trainer) => {
//                         return<ul key={trainer}>
//                             <list>{trainer}</list>
//                         </ul>
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }
// export default SelectTrainer