import React from 'react'

//props are coming from page.jsx
function FormPart(props) {
  return (
    <>
          <form 
            className="d-flex justify-content-center align-items-center flex-column mb-4"
            onSubmit={props.handleNewItem}
          >
                                                        {/* TEXT AREA */}
              <div className="form-outline flex-fill" style={{ width: "60%" }}>
                  <input 
                    type="text" 
                    id="form3" 
                    className="form-control form-control-lg" 
                    // onChange = {handleTextChange}
                    ref = {props.newT}
                  />
                  <label className="form-label" htmlFor="form3">What do you need to do?</label>
              </div>
              
                                                        {/* DATE AREA */}
              <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" style={{ width: "60%" }}>
                  <input 
                    type="date" 
                    id="example" 
                    className="form-control" 
                    // onChange = {handleDateChange}
                    ref = {props.newD}
                  />
                  <label htmlFor="example">Select date</label>
                  <i className="fas fa-calendar input-prefix"></i>
              </div>

                                                      {/* ADD BUTTON */}
              <button 
                type="submit" 
                className="btn btn-outline-success btn-lg ms-2"
                // onClick={props.handleNewItem} 
              >
                    Add
              </button>
          </form>
      </>
  )
}

export default FormPart
