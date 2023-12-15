import React from 'react'

function FormPart(props) {

    const handleTextChange = (event) => {
        props.setNewTask(event.target.value);
    }

    const handleDateChange = (event) => {
        props.setNewDate(event.target.value);
    }

  return (
    <>
          <form className="d-flex justify-content-center align-items-center flex-column mb-4">
                                                        {/* TEXT AREA */}
              <div className="form-outline flex-fill" style={{ width: "60%" }}>
                  <input 
                    type="text" 
                    id="form3" 
                    className="form-control form-control-lg" 
                    onChange = {handleTextChange}
                    value = {props.newTask}
                  />
                  <label className="form-label" htmlFor="form3">What do you need to do?</label>
              </div>
              
                                                        {/* DATE AREA */}
              <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" style={{ width: "60%" }}>
                  <input 
                    type="date" 
                    id="example" 
                    className="form-control" 
                    onChange = {handleDateChange}
                    value = {props.newDate}
                  />
                  <label htmlFor="example">Select date</label>
                  <i className="fas fa-calendar input-prefix"></i>
              </div>
              <button 
                type="submit" 
                className="btn btn-outline-success btn-lg ms-2"
                onClick={props.handleNewItem} >
                    Add
              </button>
          </form>
      </>
  )
}

export default FormPart
