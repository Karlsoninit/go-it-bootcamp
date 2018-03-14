import React,{Component} from 'react'; // импорт must have общая библиотека





class trainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }


    show = () => {
        this.setState({visible: !this.state.visible})
    };

    addTrener = () => {
        alert("Добавлено")

    };

    showLi = () => {
        this.setState({visible: !this.state.visible})
    };

    showTrainer = () => {
        let showTR = "Тренер добавлен"
        console.log(showTR);
        this.setState({
            message:""
        })

    };

    componentWillUpdate(nextProps, nextState){
        console.log(nextState);
    }

    render(){
        return(
            <div className="userList">
                <div className="Choice">Выбор тренера</div>
                <div>
                    <input onClick={this.show} placeholder="Выбор тренера" className="in" />
                    {this.state.visible &&
                    <ul className="TrenerList">
                        <li className="list" >Крутой</li>
                        <li className="list">Добрый</li>
                        <li className="list">Злой</li>
                        <li className="list">Дешевый</li>
                    </ul>
                    }
                </div>

                <div>
                    <button onClick={this.addTrener}>Добавить</button>
                </div>
            </div>

        )
    }

}








export  default  trainer;
