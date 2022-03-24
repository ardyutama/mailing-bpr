import React, { useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { SHOW_NEW_OUTWARDS } from "../constant/url";
import { ContextUser } from "../context/ContextUser";

export default function useFetchOutwards(params) {
    const [outwards, setOutwards] = React.useState([]);
    const { user } = useContext(ContextUser);
    const fetchData = async () => {
        await axios
        .get(SHOW_NEW_OUTWARDS(user.divisions_id))
        .then((res) => {
            console.log(res);
            let data = res.data.data;
            setOutwards(data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    React.useEffect(() => {
        fetchData();
    }, [user]);

    return outwards;
}
