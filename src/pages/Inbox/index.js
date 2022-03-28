import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import useFetchInbox from "../../hooks/useFetchInbox";
import CustomTable from "../../components/Table/CustomTable";
import Modal from "../../components/Modal";
import DisposisiForm from "../../components/Forms/Disposisi/DisposisiForm";
import InboxConfig from "../../components/Tabs/TabsConfig/inbox"
// import Modal from "../../components/Modal/CustomDetailDisposisi";

const Inbox = () => {
    const [open, setOpen] = React.useState(false);
    const [dataRow, setDataRow] = useState([]);
    const {data,loading} = useFetchInbox();
    const [value, setValue] = React.useState(0);
    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };

    const valueTabs = (params) => {
        setValue(params);
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
                loading={loading}
                dataTabs={InboxConfig}
                onRowClick={handleClickOpen}
                title="Nota Masuk"
                value={value}
                currentValue={valueTabs}
            />
            <Modal
                open={open}
                onClose={handleClose}
                title="Disposisi Nota"
                form={<DisposisiForm data={dataRow} />}
            ></Modal>
        </Box>
    );
};

export default Inbox;
