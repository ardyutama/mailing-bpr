import React, { useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { SHOW_PENDING_OUTWARDS} from "../constant/url";
import { ContextUser } from "../context/ContextUser";

export default function useFetchPending(params) {
    const [data, setData] = React.useState([]);
    const { user } = useContext(ContextUser);
    const [loading, setLoading] = React.useState(false);
    const fetchData = async () => {
        setLoading(true);
        await axios
            .get(SHOW_PENDING_OUTWARDS(user.divisions_id))
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
    React.useEffect(() => {
        fetchData();
    }, [user]);

    return { data, loading };
}
