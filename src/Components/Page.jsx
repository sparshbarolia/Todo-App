import React from 'react'
import FormPart from './FormPart'
import Listitem from './Listitem'

function Page() {
    return (
        <>
            {/* <div><h1>todo</h1></div> */}
            {/* <section className="vh-100" style={{ backgroundColor: "#e2d5de" }} data-bs-theme="dark"> */}
            <section style={{ backgroundColor: "#e2d5de" , minHeight: "100vh"}} data-bs-theme="dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">

                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">

                                    <h2 className="mb-3">Todo App</h2>

                                    <FormPart/>

                                    <Listitem task="testing1"/>
                                    <Listitem task="testing2"/>
                                    <Listitem task="testing3"/>
                                    {/* <Listitem task="testing4"/> */}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
