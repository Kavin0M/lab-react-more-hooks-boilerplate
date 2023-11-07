import {useReducer, useRef} from 'react'
import Todospace from './Todospace'

const initialState = {
    words: [],
    word: ""
}

const reducer = (state,action) => {
    switch(action.type){
        case "addWord":
            return {...state, words:[...state.words, state.word]}
        case "addLetter":
            return {...state, word: action.value}
    }
}

function Inputfield() {

    const inputElement = useRef()
    const[state,dispatch] = useReducer(reducer,initialState)

    const focusInput = () => {
        inputElement.current.focus()
    }

  return (
    <div id='container'>
        <div id='input'>
            <input type="text" onChange={(e) => dispatch({type:"addLetter",value:e.target.value})} ref={inputElement}/>
            <button onClick={() => {
                dispatch({type:"addWord"})
            }} id='add-button'>
                Press Me
            </button>
        </div>
        {state.words.map((item,index) => <Todospace key={index} value={item} />)}
        <button onClick={focusInput}>Get back writing</button>
    </div>
  )
}

export default Inputfield