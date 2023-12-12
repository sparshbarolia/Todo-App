import React from 'react'
import FormPart from './FormPart'
import Listitem from './Listitem'

function Page() {

    const arr = [
        {
            id : 1,
            arrtask : "Study",
            arrduedate : "04/11/2021",
        },
        {
            id : 2,
            arrtask : "Gym",
            arrduedate : "05/11/2021",
        },
        {
            id : 3,
            arrtask : "Tafri",
            arrduedate : "08/11/2021",
        },
        {
            id : 4,
            arrtask : "Assignment",
            arrduedate : "01/11/2021",
        },
        {
            id : 5,
            arrtask : "Gaming",
            arrduedate : "09/11/2021",
        },
    ];

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

                                    {arr.map((item) => (
                                        <Listitem 
                                            key={item.id} 
                                            task={item.arrtask} 
                                            duedate={item.arrduedate}
                                        />
                                    ))}

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
