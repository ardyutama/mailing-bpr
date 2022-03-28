import React, { useEffect, useMemo} from "react";
import Box from "@mui/material/Box";
import useFetchOutwards from "../../hooks/useFetchOutwards";
import useFetchPending from "../../hooks/useFetchPending";
import CustomTable from "../../components/Table/CustomTable";
import Modal from "../../components/Modal";
import DetailForm from "../../components/Forms/DetailForm";
import OutwardConfig from "../../components/Tabs/TabsConfig/outward";
const Outward = () => {
    const [open, setOpen] = React.useState(false);
    const {outwards,loading} = useFetchOutwards();
    const {data} = useFetchPending();
    const [dataRow,setDataRow] = React.useState([]);
    const [value,setValue] = React.useState(0);
    const [fetch, setFetch] = React.useState([]);

    useEffect(() => {
        setFetch(outwards);
    }, [outwards]);
    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        // setFetch(outwards);
    };
    const valueTabs = (params) => {
        console.log(params);
        setValue(params);
        if (params === 0) {
            setFetch(outwards);
        } else {
            setFetch(data);
        }
    };
    const columns = useMemo(
        () => [
            {
                field: "no_nota",
                headerName: "Nomor",
            },
            {
                headerName: "Pembuat",
                width: 150,
                valueGetter: (params) =>
                    params.row.users_creator.first_name + " " + 
                    params.row.users_creator.last_name,
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
        ],
        []
    );
    // const outwardData = useMemo(()=> [...data],[data]);
    return (
        <Box sx={{ flexDirection: "column", gap: 2, display: "flex" }}>
            <CustomTable
                columns={columns}
                rows={fetch}
                onRowClick={handleClickOpen}
                title="Nota Keluar"
                loading={loading}
                dataTabs={OutwardConfig}
                value= {value}
                currentValue={valueTabs}
            />
            <Modal
                open={open}
                onClose={handleClose}
                title="Detail Nota Keluar"
                form={<DetailForm data={dataRow} />}
            ></Modal>
        </Box>
    );
};

export default Outward;
