import {createStore} from 'react-redux';
const initialstore = {
    messages: [
        {
            author: '',
            message: '',
            image: ''
        }
    ]
}

const action  = {
    type: "CHANGE",
    author: 'Piter'
}

const action2  = {
    type: "ADD_NEW ",
    author: 'PDDDDDDDDDD'
}




const store  =createStore(initialstore, (action) => {
    switch (action.type){
        case "ADD_NEW": {
            return Object.assign(store,{

            })
        }
    }

    })