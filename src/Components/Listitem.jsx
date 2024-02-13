import React from 'react'
import { useState } from 'react';

function Listitem(props) {
    const [ticked , setTicked] = useState(true);
    const [removed, setRemoved] = useState(false);
    const handleRadioChange = () => {
        // if(ticked === true) setTicked(false);
        // else setTicked(true);
        ticked ? setTicked(false) : setTicked(true);
    }

    const handleClick = ()=>{
            props.handleRemoveItem(props.task); 
            setRemoved(true)
            props.setRemoveCount(prev => prev+1)
            console.log(props.removeCount)
    }

    return (
        <ul className={`list-group mb-0 ${removed ? ((props.removeCount%2 == 0) ? "slide-left": "slide-right") : ""} `} >
            <li
                className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    <input 
                        className="form-check-input me-2" 
                        type="checkbox" value="" aria-label="..." 
                        onChange={handleRadioChange} 
                        checked={ticked}
                    />

                    {ticked ? <div><b>{props.task}</b></div> : <s>{props.task}</s>}

                    {ticked ? <div className="fw-lighter ms-2">({props.duedate})</div> : <s className="fw-lighter ms-2">({props.duedate})</s>}
                </div>
                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick = {() => {handleClick ()}}
                    // onClick = {props.handleRemoveItem}
                >
                    Remove
                </button>
            </li>
        </ul>
    )
}

export default Listitem
