import React from "react";
import axios from "axios";
import { SHOW_ALL_EMPLOYEE } from "../constant/url";

export default function useFetchAllUser() {
    const [allUsers, setAllUsers] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            await axios.get(SHOW_ALL_EMPLOYEE)
            .then((res) => {
                setAllUsers(res.data.data);
            });
        };
        fetchData();
    }, []);

    return allUsers;
}
