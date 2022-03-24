import React, { useContext } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';
import { SHOW_INBOX } from '../constant/url';
import { ContextUser } from "../context/ContextUser";

export default function useFetchInbox(params) {
    const [inboxs,setInboxs] = React.useState([]);
    const { user } = useContext(ContextUser);
    const fetchData = async () => {
        await axios
        .get(SHOW_INBOX(user.divisions_id))
        .then((res) => {
            let data = res.data.data;
            setInboxs(data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    React.useEffect(() => {
        fetchData();
    }, [user]);

    return inboxs;
};
