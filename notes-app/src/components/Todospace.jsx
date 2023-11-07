import {useReducer} from 'react'

const initialState = true

const reducer = (state,action) => {
    switch(action){
        case "toggle":
            return !state
    }
} 


function Todospace(props) {

    const[state,dispatch] = useReducer(reducer,initialState)

  return (
    <div className='todo-box'>
        <div className='todo'>{state? props.value : "This content is hidden"}</div>
        <button className='toggle-button' onClick={() => dispatch("toggle")}>Toggle</button>
    </div>
  )
}

export default Todospace