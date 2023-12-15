import React from 'react'

function MainCard(props) {
  return (
    <section style={{ backgroundColor: "#e2d5de" , minHeight: "100vh"}} data-bs-theme="dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">

                                    {props.children}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
  )
}

export default MainCard
