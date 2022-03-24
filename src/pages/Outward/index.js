import React, { useMemo} from "react";
import Box from "@mui/material/Box";
import DetailNota from "../../components/Modal/CustomDetailNota";
// import useFetchOutward from "../../hooks/useFetchOutward";
import useFetchOutwards from "../../hooks/useFetchOutwards"
import CustomTable from "../../components/Table/CustomTable";

const Outward = () => {
    const [open, setOpen] = React.useState(false);
    const data = useFetchOutwards();
    const [dataRow,setDataRow] = React.useState([]);

    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
                rows={data}
                onRowClick={handleClickOpen}
                title="Nota Keluar"
            />
            <DetailNota open={open} onClose={handleClose} data={dataRow}></DetailNota>
        </Box>
    );
};

export default Outward;
