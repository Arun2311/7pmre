import React, { useEffect, useRef } from 'react'

export default function UseRefComp() {

    const inputref = useRef(null)

    useEffect(()=>{
     inputref.current.focus()
    },[])


  return (
    <div>
        <h1>Useref</h1>
        {/* http://localhost:3000/todoList */}

        <input ref={inputref} placeholder='enter u r name' />


        
    </div>
  )
}
