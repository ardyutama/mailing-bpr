import React, { useContext } from "react";
import axios from "axios";
import { SHOW_APPROVER } from "../constant/url";
import { ContextUser } from "../context/ContextUser";

export default function useFetchApprover(params) {
    const [data, setData] = React.useState([]);
    const [dataPending,setDataPending] = React.useState([]);
    const [dataApproved,setDataApproved]=React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { user } = useContext(ContextUser);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            console.log('fetch data Approver');
            async function fetchData() {
                await axios
                    .get(SHOW_APPROVER(user.id))
                    .then((res) => {
                        // console.log(res.data.data);
                        let data = res.data.data;
                        setData(data);
                        setDataPending(data.filter((value)=> value.isApproved===0))
                        setDataApproved(data.filter((value)=> value.isApproved===1))
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
            fetchData();
        },1000);
    }, []);

    return {data,loading,dataPending,dataApproved}
}
