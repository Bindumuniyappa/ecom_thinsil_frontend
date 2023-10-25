import React, { useEffect } from "react";
// import { useContext } from "react";
import { createContext, useState } from "react";
// import axios from 'axios';

export const Store = createContext();

const ApiFile = (props) => {
    
    const [data, setData] = useState()
   
    useEffect(() => {
        fetch(`/store`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <>
            <Store.Provider value={{ data }}>
                {props.children}
            </Store.Provider>
        </>
    )
}
export default ApiFile