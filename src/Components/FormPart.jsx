import React from 'react'

function FormPart() {
  return (
    <>
          <form className="d-flex justify-content-center align-items-center flex-column mb-4">
              <div className="form-outline flex-fill" style={{ width: "60%" }}>
                  <input type="text" id="form3" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3">What do you need to do?</label>
              </div>
              {/* <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true"> */}
              <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" style={{ width: "60%" }}>
                  <input type="date" id="example" className="form-control" />
                  <label htmlFor="example">Select date</label>
                  <i className="fas fa-calendar input-prefix"></i>
              </div>
              <button type="submit" className="btn btn-outline-success btn-lg ms-2">Add</button>
          </form>
      </>
  )
}

export default FormPart
