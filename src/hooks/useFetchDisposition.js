import React from "react";
import axios from "axios";
import { SHOW_DISPOSITION } from "../constant/url";

export default function useFetchDisposition(id) {
    // console.log(id);
    const [disposition, setDisposition] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            await axios.get(SHOW_DISPOSITION(id))
            .then((res) => {
                // console.log(res.data.data);
                setDisposition(res.data.data);
            });
        };
        fetchData();
    }, [id]);

    return disposition;
}
