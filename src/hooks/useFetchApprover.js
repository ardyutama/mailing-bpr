import React, { useContext } from "react";
import axios from "axios";
import { SHOW_APPROVER } from "../constant/url";
import { ContextUser } from "../context/ContextUser";

export default function useFetchInbox(params) {
    const [data, setData] = React.useState([]);
    const { user } = useContext(ContextUser);
    // const getId = user.id;
    // console.log(getId);
    React.useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(SHOW_APPROVER(user.id))
                .then((res) => {
                    console.log(res.data.data);
                    let data = res.data.data;
                    setData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);

    return data;
}
