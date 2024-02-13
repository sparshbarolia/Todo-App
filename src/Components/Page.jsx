import React, { useRef } from 'react'
import FormPart from './FormPart'
import Listitem from './Listitem'
import PageHeading from './PageHeading';
import { useState } from 'react';
import MainCard from './MainCard';

function Page() {
    const [removeCount, setRemoveCount] = useState(0)
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

    const newT = useRef();
    const newD = useRef();

    const Item = (event) => {
        //Add button click krte hi page refresh horha tha
        //usko htane ke liye add ki ye line
        event.preventDefault();  // Prevent the default form submission behavior
        const TaskValue = newT.current.value
        const DueDateValue = newD.current.value

        if(TaskValue == ""){
            return
        }

        if(DueDateValue == "")
         {
            alert("Please add a due date")
            return
         }
    
        let obj = {arrtask : TaskValue ,
                   arrduedate : DueDateValue}

        let tempArr = [...arr , obj];

        setArr(tempArr);

        newT.current.value = ""
        newD.current.value = ""
    }

    //taskName humko jis listItem ke remove ko click krenge uska milega
    //map kra tha jaha vaha se le aenge
    //jo taskname delete krna use arr se htadenge
    const Wait = (time)=>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res("time over")
            }, time)
        })
    }
    const handleRemoveItem = async(taskName) => {
        const data = await Wait(600)
        const tempArr = arr.filter((val) => {
            return val.arrtask !== taskName
        })

        setArr(tempArr)
    }

    return (
        <>
           <MainCard clas>
                {/* jo kuchh bhi <PageHeading></PageHeading> ke beeche me wrap krunga
                vo sb as {props.children} pass hojaega PageHeading.jsx me */}
                <PageHeading>Todo App</PageHeading>

                <FormPart
                    newT = {newT}
                    newD = {newD}
                    handleNewItem = {Item}
                />

                {arr.map((item) => (
                    <Listitem 
                        key={item.arrtask} 
                        task={item.arrtask} 
                        duedate={item.arrduedate}
                        removeCount = {removeCount}
                        setRemoveCount = {setRemoveCount}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
           </MainCard>
        </>
    )
}

export default Page
