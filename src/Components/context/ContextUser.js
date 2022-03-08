import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { SHOW_EMPLOYEE} from "../constant/url";

export const ContextUser = createContext();

export const UserProvider = props => {
    const [input,setInput] = useState([]);
    
    useEffect(()=> {
        const fetchData = async () => {
            await axios.get(SHOW_EMPLOYEE(Cookies.get('id')))
            .then((res)=>{
                setInput(res.data.data);
            }
            )};
            fetchData();
    },[])
        return (
            <ContextUser.Provider value = {{ 
                input,
             }}>
                 {props.children}
             </ContextUser.Provider>
        )
    }
        
       
    
