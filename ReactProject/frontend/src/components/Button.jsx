import React from 'react'

function Button() {

    const HelloWorld = () => {
        console.log("Hola mundo");
        
    }

  return (

    <div>
        <button onClick={HelloWorld}>
            dele click
        </button>
    </div>
  )
}


export default Button