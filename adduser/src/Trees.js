//hash function
//stack
//связаные функции
//методы жизненого цикла




import React, {Component} from 'react';
import Timer from "./Timer";

// import Timer, {CrossFit} from 'timer';



const Exercise = (props) => {
    return (
        <div onClick={props.doneExercise}>
            <input type="checkbox" checked={props.checked}/>
            <span className={props.checked? 'checked': ''}>{props.name}</span>
        </div>
    )
};
export default class Training extends React.Component {
    state = {
        exercises : [{
            name: 'exercise 1',
            checked: false,
            time:null
        },{
            name: 'exercise 2',
            checked: false,
            time:null
        },{
            name: 'exercise 3',
            checked: false,
            time:null
        }],
        timer: {
            seconds: 0,
            minutes: 0,
            paused: false
        }
    }
    doneExercise (index){
        this.setState((prevState) => {
            prevState.exercises[index].checked = true;
            prevState.exercises[index].time =
                `${prevState.timer.minutes}:${prevState.timer.seconds}`;
            return prevState;
        })

        console.log(this.state.exercises[index])
    }

    timerChange = (minutes, seconds) => {
        this.setState({
            timer: {
                minutes,
                seconds
            }
        })
    }

    trainingEnd = () => {
        this.setState({
            paused: true
        })
    }



    render () {
        return (
            <div>
                <h2>Тренировка</h2>
                <div className="container">
                    {
                        this.state.exercises.map((exercise, index) =>{
                            return <Exercise name={exercise.name}
                                             checked={exercise.checked}
                                             doneExercise={this.doneExercise.bind(this, index)}
                            />
                        })}
                </div>
                <Timer onTimerChange={this.timerChange}
                       minutes={this.state.timer.minutes}
                       seconds={this.state.timer.seconds}
                       pause={this.state.paused}
                />
                <button onClick={this.trainingEnd}>Закончить</button>
            </div>
        )
    }

}