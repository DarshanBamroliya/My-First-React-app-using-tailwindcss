import React from 'react'
import Notecontext from './Notescontext'

 function Notestate(props){
    const state = {
        "Name": "Darshan"
    }
  return (
    <Notecontext.Provider value={state}>
        {props.children}
    </Notecontext.Provider>
  )
}

export default Notestate;