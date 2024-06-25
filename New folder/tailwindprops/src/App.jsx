import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App(){

 
  // let myobj ={
  //     Username:"neelesh",
  //     age: 28
  // }

  // let myarr=[1,2,3,4]
  
  return (
    
    <>
    <div>
    <h1 className='py-0.5'>neelesh and code</h1>
    </div>
      <Card Username ='Neelesh' btnText="click me" />
      <Card Username='Neelesh Kumar Yadav'/>
    </>
  )
}

export default App
