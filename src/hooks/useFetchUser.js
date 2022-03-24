import React, { useContext } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';
import { SHOW_EMPLOYEE } from '../constant/url';
import { ContextUser } from "../context/ContextUser";
export default function useFetchUser(params) {
    const [users,setUsers] = React.useState([]);
    const { user } = useContext(ContextUser);
    React.useEffect(() => {
        const fetchData = async () => {
            await axios.get(SHOW_EMPLOYEE(user.id)).then((res) => {
                setUsers(res.data.data);
            });
        };
        fetchData();
    }, [user]);

    return users;
};