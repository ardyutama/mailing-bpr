import { createContext, useEffect, useState } from "react";


export const ContextUser = createContext({
    id: '',
    divisions_id : '',
    first_name : '',
    last_name : '',
    roles_id : '',
});

export const UserProvider = ({children}) => {
    // const data = useFetchUser();
    const [user, setUser] = useState([]);
    console.log(JSON.parse(localStorage.getItem("user")));
    useEffect(()=> {
        const getData = JSON.parse(localStorage.getItem('user'));
        if (getData) {
            setUser(getData);
        }
    },[]);
    //     {
    //     id: "",
    //     divisions_id: "",
    //     first_name: "",
    //     last_name: "",
    //     roles_id: "",
    // }
    // localStorage.getItem('user')
    // [localStorage.getItem('user')]
    // );

    const login = (data) => {
        setUser({
            id: data.id,
            divisions_id: data.division_id,
            first_name: data.first_name,
            last_name: data.last_name,
            roles_id: data.role_id,
        });
        console.log(data);
        localStorage.setItem("user", JSON.stringify({
            id: data.id,
            divisions_id: data.division_id,
            first_name: data.first_name,
            last_name: data.last_name,
            roles_id: data.role_id,
        }))
    }
    const logout = () => {
        setUser({
            id: "",
            divisions_id: "",
            first_name: "",
            last_name: "",
            roles_id: "",
        });
        localStorage.clear('user');
    }
    console.log(user);
        return (
            <ContextUser.Provider value = {{ 
                user,login,logout,
             }}>
                 {children}
             </ContextUser.Provider>
        )
    }
        
       
    
