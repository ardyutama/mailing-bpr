import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import useFetchInbox from "../../hooks/useFetchInbox";
import CustomTable from "../../components/Table/CustomTable";
import Modal from "../../components/Modal/CustomDetailDisposisi";

const Inbox = () => {
    //TODO: FETCH DATA YANG DIPASSING OLEH ID ROUTER UNTUK FILTER SURAT MASUK
    const [open, setOpen] = React.useState(false);
    const [dataRow, setDataRow] = useState([]);
    const data = useFetchInbox();
    console.log(data);
    // TODO: passing dari inbox ke modal
    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };
    const columns = [
        {
            field: "no_nota",
            headerName: "Nomor",
        },
        {
            headerName: "Pengirim",
            width: 150,
            valueGetter: (params) =>
                params.row.users_creator.divisions.divisions_name
        },
        {
            field: "perihal",
            headerName: "Perihal",
            flex: 1,
        },
        {
            field: "tgl_nota",
            headerName: "tanggal",
        },
    ];
    const handleClose = () => {
        setOpen(false);
    };
    // const inboxData = (() => [...data], [data]);
    return (
        <Box sx={{ flexDirection: "column", gap: 2, display: "flex" }}>
            <CustomTable
                columns={columns}
                rows={data}
                onRowClick={handleClickOpen}
                title="Nota Masuk"
            />
            <Modal open={open} onClose={handleClose} title="Disposisi Nota" data={dataRow}></Modal>
        </Box>
    );
};

export default Inbox;
