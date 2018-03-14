import React,{Component} from 'react';
import Slider from "./Slider"
import WorcautProcess from "./WorkautProcess"
import RenderIf from "./RenderIf"
import Button from "./Button"
import Timer from "../../src/Timer"
import CardExercise from "./CardExercise"



excerciseList = [{

}]


export default class CrossFit extends Component{
    state = {
        time: 30,
        ccal: 0,
        inProcess: false,
        card: {
            image: "https://yurielkaim.com/wp-content/uploads/2013/07/Advanced-Push-up-Variations-Traditional-Push-up.jpg",
            description: "push up"
        }

    }



    startProcess = () => {
        this.setState({
            inProcess: true
        })
    }

    changeExcercise = () => {
        let oneExTime = this.state.time.exercisesList

    }

    render(){
        let minutes = Math.floor(this.state.time / 60);
        let seconds = this.state.time % 60;
        return(
            <div>
               <renderIf condition={this.state.inProcess}>
                   <div>
                       <Timer minutes={minutes} seconds={seconds}/>
                       <CardExercise image={this.state.card}>
                           {this.state.card.description}
                       </CardExercise>
                   </div>
               </renderIf>

               <renderIf condition={!this.state.inProcess}>
                   <div>
                       <h3>{}</h3>
                       <button className="btn-start" onClick={this.startProcess}><b>Start</b></button>

                   </div>
               </renderIf>
            </div>
        )
    }
}


