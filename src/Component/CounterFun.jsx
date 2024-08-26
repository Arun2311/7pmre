import React ,{useState} from "react";



function CounterFun (){
    const [count,setcount] =  useState(0)
    

    const hadleadd = ()=>{
        setcount(count+1)
    }

    const handlesub = () =>{
        setcount(count-1)

    }
    return(
        <>
        <h1>count  : {count} </h1>

        <button onClick={hadleadd}> Add </button>


<button onClick={handlesub}>Sub</button>

        
        </>
    )
}

export default CounterFun