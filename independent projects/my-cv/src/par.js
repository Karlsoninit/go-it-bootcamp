import React, { Component } from "react";
import RenderIf from './renderif'




class Skills extends Component {
    
        state = {
            open: false
    }

    showdraw = () => {
        this.setState((prevState) => {
            return{
                open: !prevState.open
            }
        })

    }


    render() {
        // let showtext
        // if(this.state.isVisible){
        //     showtext = <div>
        //         hello
        //     </div>
        // }

        return (
            <div>
                <button onClick={this.showdraw}>
                    hello
                </button>
                <RenderIf condition={this.state.open}>
                    <div>I am here</div>
                </RenderIf>
            </div>

            
        )
    }
}
export default Skills;