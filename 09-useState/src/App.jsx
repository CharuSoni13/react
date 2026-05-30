// import React, {useState} from 'react'


// const App = () => {

//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState('Soni')

//   function changeNum(){
//     setNum(30)
//     setUsername('Charu')
//   }


//   return (
//     <div>
//       <h1>Value of num is {num} <br/> Value of name is {username} </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jump5Num() {
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increas by 5</button>
    </div>
  )
}

export default App