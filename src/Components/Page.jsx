import React from 'react'
import FormPart from './FormPart'
import Listitem from './Listitem'
import PageHeading from './PageHeading';
import { useState } from 'react';
import MainCard from './MainCard';

function Page() {
    const [arr , setArr] = useState([
                                        {
                                            arrtask : "Study",
                                            arrduedate : "2023-12-19",
                                        },
                                        {
                                            arrtask : "Gym",
                                            arrduedate : "2023-12-01",
                                        },
                                        {
                                            arrtask : "Yoga",
                                            arrduedate : "2023-12-02",
                                        },
                                    ])

    const[newTask , setNewTask] = useState("");
    const[newDate , setNewDate] = useState("");

    const handleNewItem = (event) => {
        //Add button click krte hi page refresh horha tha
        //usko htane ke liye add ki ye line
        event.preventDefault();  // Prevent the default form submission behavior

        let obj = {arrtask : `${newTask}` ,
                arrduedate : `${newDate}`}
                // arrtask : newTask ,
                // arrduedate : newDate }

        let tempArr = [...arr , obj];

        setArr(tempArr);

        //Taaki button dabane ke baad text area and date area clear hojaye
        setNewTask('')
        setNewDate('')
    }

    //taskName humko jis listItem ke remove ko click krenge uska milega
    //map kra tha jaha vaha se le aenge
    //jo taskname delete krna use arr se htadenge
    const handleRemoveItem = (taskName) => {
        const tempArr = arr.filter((val) => {
            return val.arrtask !== taskName
        })

        setArr(tempArr)
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
                        key={item.arrtask} 
                        task={item.arrtask} 
                        duedate={item.arrduedate}
                        //ya to yaha taskName pas kro ya fir lititem me button me onClick me
                        // handleRemoveItem={() => handleRemoveItem(item.arrtask)}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
           </MainCard>
        </>
    )
}

export default Page
