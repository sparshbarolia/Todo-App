import React from 'react'
import { useState } from 'react';

function Listitem(props) {
    const [ticked , setTicked] = useState(true);

    const handleRadioChange = () => {
        // if(ticked === true) setTicked(false);
        // else setTicked(true);
        ticked ? setTicked(false) : setTicked(true);
    }

    return (
        <ul className="list-group mb-0">
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
                    onClick = {() => props.handleRemoveItem(props.task)}
                    // onClick = {props.handleRemoveItem}
                >
                    Remove
                </button>
            </li>
        </ul>
    )
}

export default Listitem
