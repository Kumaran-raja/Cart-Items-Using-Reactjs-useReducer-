import React from 'react'
import { useState,useReducer } from 'react'
import './home.css'
import apple from './apple.png'
    const initialState={count:0}
    function reducerFunction(state,action){
        let error;
        switch(action.category){
            case 'add':
                return {count:state.count+1}
            case 'remove':
                return {count:state.count-1}
            case 'removeAll':
                return {count:0}
            default:
                throw new error("Some Error")
        }
    }
function Apple() {
    const[state,dispatch]=useReducer(reducerFunction,initialState)
  return (
    <div>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-center'>
                    <h1>Items List</h1>
                        <div className='split1'>
                            <p>Image</p>
                            <p>Name</p>
                            <p>Quantity</p>
                            <p>Price</p>
                        </div>
                        <div className='split'>
                            <img src={apple}/>
                            <p>Apple</p>
                            <div className='quan'>
                                <button onClick={()=>dispatch({category:'remove'})}>-</button>
                                <p>{state.count}</p>
                                <button onClick={()=>dispatch({category:'add'})}>+</button>
                            </div>
                            <p> 150</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

function Orange() {
    const[state,dispatch]=useReducer(reducerFunction,initialState)
  return (
    <div>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-center'>
                       
                        <div className='split'>
                            <img src={apple}/>
                            <p>Orange</p>
                            <div className='quan'>
                                <button onClick={()=>dispatch({category:'remove'})}>-</button>
                                <p>{state.count}</p>
                                <button onClick={()=>dispatch({category:'add'})}>+</button>
                            </div>
                            <p> 40</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

function Banana() {
    const[state,dispatch]=useReducer(reducerFunction,initialState)
  return (
    <div>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-center'>
                       
                        <div className='split'>
                            <img src={apple}/>
                            <p>Banana</p>
                            <div className='quan'>
                                <button onClick={()=>dispatch({category:'remove'})}>-</button>
                                <p>{state.count}</p>
                                <button onClick={()=>dispatch({category:'add'})}>+</button>
                            </div>
                            <p> 22</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

function Grapes() {
    const[state,dispatch]=useReducer(reducerFunction,initialState)
  return (
    <div>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-center'>
                       
                        <div className='split'>
                            <img src={apple}/>
                            <p>Grapes</p>
                            <div className='quan'>
                                <button onClick={()=>dispatch({category:'remove'})}>-</button>
                                <p>{state.count}</p>
                                <button onClick={()=>dispatch({category:'add'})}>+</button>
                            </div>
                            <p> 70</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

function Guava() {
    const[state,dispatch]=useReducer(reducerFunction,initialState)

  return (
    <div>
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 text-center'>
                      
                        <div className='split'>
                            <img src={apple}/>
                            <p>Guava</p>
                            <div className='quan'>
                                <button onClick={()=>dispatch({category:'remove'})}>-</button>
                                <p>{state.count}</p>
                                <button onClick={()=>dispatch({category:'add'})}>+</button>
                            </div>
                            <p> 90</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


function Run(){
    return(
        <div>
        <Apple/>
        <Banana/>
        <Orange/>
        <Grapes/>
        <Guava/>

        </div>
       
    )
}


export default Run