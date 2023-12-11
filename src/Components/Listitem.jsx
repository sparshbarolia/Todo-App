import React from 'react'
import { useState } from 'react';

function Listitem(props) {
    const [ticked , unticked] = useState(true);

    const handleRadioChange = () => {
        // if(ticked === true) unticked(false);
        // else unticked(true);
        ticked ? unticked(false) : unticked(true);
    }

    return (
        <ul className="list-group mb-0">
            <li
                className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." onChange={handleRadioChange} checked={ticked}/>
                    {ticked ? <div>{props.task}</div> : <s>{props.task}</s>}
                </div>
                {/* <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="fas fa-times text-primary"></i>
                </a> */}
                <button type="button" className="btn btn-outline-danger">Remove</button>
            </li>
        </ul>
    )
}

export default Listitem
