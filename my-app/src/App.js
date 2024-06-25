import { useState } from "react"



function App() {

let [counter, setCounter] = useState(15)

const removeValue = () => {
  if(counter > 0){
    setCounter(counter - 1)
  }
 
}

const addValue = () => {
  if(counter < 21){
    setCounter(counter + 1)
  }
  
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}




export default App;
