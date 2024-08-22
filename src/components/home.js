import React, { useReducer } from 'react';
import './home.css';
import apple from './images/apple.png';
import banana from './images/banana.png';
import grapes from './images/grapes.png';
import orange from './images/orange.png';
import cherries from './images/cherries.png';

const initialState = {
    apple: 0,
    banana: 0,
    orange: 0,
    grapes: 0,
    cherry: 0,
};

function reducerFunction(state, action) {
    switch (action.category) {
        case 'add_apple':
            return { ...state, apple: state.apple + 1 };
        case 'remove_apple':
            return { ...state, apple: state.apple > 0 ? state.apple - 1 : 0 };
        case 'add_orange':
            return { ...state, orange: state.orange + 1 };
        case 'remove_orange':
            return { ...state, orange: state.orange > 0 ? state.orange - 1 : 0 };
        case 'add_banana':
            return { ...state, banana: state.banana + 1 };
        case 'remove_banana':
            return { ...state, banana: state.banana > 0 ? state.banana - 1 : 0 };
        case 'add_grapes':
            return { ...state, grapes: state.grapes + 1 };
        case 'remove_grapes':
            return { ...state, grapes: state.grapes > 0 ? state.grapes - 1 : 0 };
        case 'add_cherry':
            return { ...state, cherry: state.cherry + 1 };
        case 'remove_cherry':
            return { ...state, cherry: state.cherry > 0 ? state.cherry - 1 : 0 };
        default:
            throw new Error("Some Error");
    }
}

function Apple({ state, dispatch }) {
    const total = state.apple * 150;
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
                                <img src={apple} alt="Apple" />
                                <p>Apple</p>
                                <div className='quan'>
                                    <button onClick={() => dispatch({ category: 'remove_apple' })}>-</button>
                                    <p>{state.apple}</p>
                                    <button onClick={() => dispatch({ category: 'add_apple' })}>+</button>
                                </div>
                                <p>{total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Orange({ state, dispatch }) {
    const total = state.orange * 95;
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <div className='split'>
                                <img src={orange} alt="Orange" />
                                <p>Orange</p>
                                <div className='quan'>
                                    <button onClick={() => dispatch({ category: 'remove_orange' })}>-</button>
                                    <p>{state.orange}</p>
                                    <button onClick={() => dispatch({ category: 'add_orange' })}>+</button>
                                </div>
                                <p>{total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Banana({ state, dispatch }) {
    const total = state.banana * 22;
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <div className='split'>
                                <img src={banana} alt="Banana" />
                                <p>Banana</p>
                                <div className='quan'>
                                    <button onClick={() => dispatch({ category: 'remove_banana' })}>-</button>
                                    <p>{state.banana}</p>
                                    <button onClick={() => dispatch({ category: 'add_banana' })}>+</button>
                                </div>
                                <p>{total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Grapes({ state, dispatch }) {
    const total = state.grapes * 70;
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <div className='split'>
                                <img src={grapes} alt="Grapes" />
                                <p>Grapes</p>
                                <div className='quan'>
                                    <button onClick={() => dispatch({ category: 'remove_grapes' })}>-</button>
                                    <p>{state.grapes}</p>
                                    <button onClick={() => dispatch({ category: 'add_grapes' })}>+</button>
                                </div>
                                <p>{total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Cherry({ state, dispatch, totalQuantity, totalPrice }) {
    const total = state.cherry * 40;
    return (
        <div>
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <div className='split'>
                                <img src={cherries} alt="Cherry" />
                                <p>Cherry</p>
                                <div className='quan'>
                                    <button onClick={() => dispatch({ category: 'remove_cherry' })}>-</button>
                                    <p>{state.cherry}</p>
                                    <button onClick={() => dispatch({ category: 'add_cherry' })}>+</button>
                                </div>
                                <p>{total}</p>
                            </div>
                            <div className='split'>
                                <p></p>
                                <p>Total</p>
                                <p>{totalQuantity}</p>
                                <p>{totalPrice}</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Run() {
    const [state, dispatch] = useReducer(reducerFunction, initialState);
    
    const totalQuantity = state.apple + state.banana + state.orange + state.grapes + state.cherry;
    const totalPrice = (state.apple * 150) + (state.orange * 95) + (state.banana * 22) + (state.grapes * 70) + (state.cherry * 40);

    return (
        <div>
            <Apple state={state} dispatch={dispatch} />
            <Banana state={state} dispatch={dispatch} />
            <Orange state={state} dispatch={dispatch} />
            <Grapes state={state} dispatch={dispatch} />
            <Cherry state={state} dispatch={dispatch} totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
    );
}

export default Run;
