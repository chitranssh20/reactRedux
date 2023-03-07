import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/actions'

const App = () => {

  const counter = useSelector((state)=> state.changeNum);
const dispatch = useDispatch()

  return (
  <>
  <div className='quantity'>
    <button className='quantitySymbol'  title='decrement' onClick={()=>dispatch(decNumber(5))}  ><span>-</span> </button>
    <h2 id='qty'>{counter}</h2>
    <button className='quantitySymbol' title='increment' onClick={()=>dispatch(incNumber())}  > <span>+</span> </button>
  </div>
  </>    
  )
}

export default App