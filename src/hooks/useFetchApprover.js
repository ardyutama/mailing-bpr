import React, { useContext } from "react";
import axios from "axios";
import { SHOW_APPROVER } from "../constant/url";
import { ContextUser } from "../context/ContextUser";

export default function useFetchInbox(params) {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { user } = useContext(ContextUser);
    React.useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            await axios
                .get(SHOW_APPROVER(user.id))
                .then((res) => {
                    console.log(res.data.data);
                    let data = res.data.data;
                    setData(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
    }, []);

    return {data,loading}
}
