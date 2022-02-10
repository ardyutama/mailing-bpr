import React, { Component, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import CustomDetailMail from "../../Global/CustomDetailMail";
import approve_mail from "../../_mocks_/approve_mail.json";
import employee_data from "../../_mocks_/employee.json";
import tipe_surat from "../../_mocks_/tipe_surat.json";
function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="grey"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}


const Inbox = () => {
    //TODO: FETCH DATA YANG DIPASSING OLEH ID ROUTER UNTUK FILTER SURAT MASUK
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [tipeSurat, setTipeSurat] = useState([]);
    const [dataRow, setDataRow] = useState([]);

    const fetchDataMail = (data) => {
        setData(data);
    };
    const fetchDataEmployee = (data) => {
        setEmployee(data);
    };
    const fetchTipeSurat = (data) => {
        setTipeSurat(data);
    };

    // TODO: passing dari inbox ke modal
    const handleClickOpen = (params) => {
        setDataRow(params.row);
        setOpen(true);
    };
    // FIXME: Benerin Fetch masih gak bener
    useEffect(() => {
        fetchDataMail(approve_mail);
        fetchDataEmployee(employee_data);
        fetchTipeSurat(tipe_surat);
        // console.log(dataRow);
    });

    const checkUser = (params) => {
        const senderId = params.row.sender_id;
        const findUser = employee.find((params) => params.id === senderId);
        return findUser.first_name;
    };
    const checkTipeSurat = (params) => {
        const tipeSuratId = params.row.tipe_surat;
        const findUser = tipeSurat.find((params) => params.id === tipeSuratId);
        return findUser.surat_name;
    };

    const columns = [
        {
            field: "sifat_surat",
            headerName: "Sifat Surat",
        },
        {
            field: "tipe_surat",
            headerName: "Tipe Surat",
            valueGetter: checkTipeSurat,
            width: 150,
        },

        {
            field: "senderId",
            headerName: "pengirim",
            valueGetter: checkUser,
        },
        {
            field: "perihal",
            flex: 1,
        },
        {
            field: "date",
        },
    ];
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ flexDirection: "column", gap: 2, display: "flex" }}>
            <div>
                <h1>Surat Masuk</h1>
            </div>
            {/* TODO: Benerin Styling Biar Bagus */}
            <div>
                <Box sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                        onRowClick={handleClickOpen}
                        pagination
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        components={{
                            Pagination: CustomPagination,
                        }}
                        columns={columns}
                        rows={data}
                    />
                </Box>
            </div>
            <CustomDetailMail
                open={open}
                onClose={handleClose}
                data={dataRow}
            ></CustomDetailMail>
        </Box>
    );
};

export default Inbox;
