import React from 'react'
import FormPart from './FormPart'
import Listitem from './Listitem'
import PageHeading from './PageHeading';
import { useState } from 'react';
import MainCard from './MainCard';

function Page() {
    const [arr , setArr] = useState([
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
                                    ])

    const[newTask , setNewTask] = useState();
    const[newDate , setNewDate] = useState();

    const handleNewItem = (event) => {
        //Add button click krte hi page refresh horha tha
        //usko htane ke liye add ki ye line
        event.preventDefault();  // Prevent the default form submission behavior

        let obj = {id : arr.length + 1,
                   arrtask : `${newTask}` ,
                   arrduedate : `${newDate}`}

        let tempArr = [...arr , obj];

        setArr(tempArr);

        //Taaki button dabane ke baad text area and date area clear hojaye
        setNewTask('')
        setNewDate('')
    }

    return (
        <>
           <MainCard>
                {/* jo kuchh bhi <PageHeading></PageHeading> ke beeche me wrap krunga
                vo sb as {props.children} pass hojaega PageHeading.jsx me */}
                <PageHeading>Todo App</PageHeading>

                <FormPart
                    newTask = {newTask}
                    setNewTask = {setNewTask}
                    newDate = {newDate}
                    setNewDate = {setNewDate}
                    handleNewItem = {handleNewItem}
                />

                {arr.map((item) => (
                    <Listitem 
                        key={item.id} 
                        task={item.arrtask} 
                        duedate={item.arrduedate}
                    />
                ))}
           </MainCard>
        </>
    )
}

export default Page
