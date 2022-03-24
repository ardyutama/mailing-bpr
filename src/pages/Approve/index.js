import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import useFetchApprover from "../../hooks/useFetchApprover";
import CustomTable from "../../components/Table/CustomTable";
import Modal from "../../components/Modal/CustomApprover";
import { Button } from "@mui/material";

const Approve = () => {
    //TODO: FETCH DATA YANG DIPASSING OLEH ID ROUTER UNTUK FILTER SURAT MASUK
    const [open, setOpen] = React.useState(false);
    const [dataRow, setDataRow] = useState([]);
    const data = useFetchApprover();
    // TODO: passing dari inbox ke modal
    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };
    const columns = [
        {
            field: "no_nota",
            headerName: "Nomor",
            valueGetter: (params) => params.row.notas.no_nota,
        },
        {
            field: "division_id",
            headerName: "Pembuat",
            width: 150,
            valueGetter: (params) =>
                params.row.notas.users_creator.first_name + " " +   
                params.row.notas.users_creator.last_name,
        },
        {
            field: "perihal",
            headerName: "Perihal",
            flex: 1,
            valueGetter: (params) => params.row.notas.perihal,
        },
        {
            field: "tgl_nota",
            headerName: "tanggal",
            valueGetter: (params) => params.row.notas.tgl_nota,
        },
        {
            field: "Action",
            renderCell: () => (
                <Button
                    sx={{
                        px: 2,
                        borderRadius: 1.5,
                        color: "#0F4C81",
                        fontSize: 12,
                        "&:hover": {
                            bgcolor: "grey",
                        },
                    }}
                    size="small"
                    variant="outlined"
                    onClick={handleClickOpen}
                >
                    Approve
                </Button>
            ),
        },
    ];
    const handleClose = () => {
        setOpen(false);
    };
    // const rowData = useMemo(() => [...data], [data]);
    return (
        <Box sx={{ flexDirection: "column", gap: 2, display: "flex" }}>
            <CustomTable
                columns={columns}
                rows={data}
                // onRowClick={handleClickOpen}
                title="Approver"
            />
            <Modal open={open} onClose={handleClose} title="Detail Approver"></Modal>
        </Box>
    );
};

export default Approve;
