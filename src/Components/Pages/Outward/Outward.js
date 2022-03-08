import React, { Component, useEffect, useState } from "react";
import SearchBar from "../../Global/SearchBar";
import Box from "@mui/material/Box";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Pagination from "@mui/material/Pagination";
import Modal from "../../Global/CreateOutwardModal";
import { Button, Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Cookies from "js-cookie";
import axios from "axios";
import { SHOW_OUTWARD } from "../../constant/url";

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

 
const Outward = () => {
    const [open, setOpen] = React.useState(false);
    const [data,setData]= useState([]);
    const handleClickOpen = (params) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        // const getId = Cookies.get("id");
        const fetchData = async () => {
            await axios
                .get(SHOW_OUTWARD(Cookies.get("id")))
                .then((res) => {
                    console.log(res);
                    let data = res.data.data;
                    // setData({
                    //     tgl_surat_masuk: data.tgl_surat_masuk,
                    //     perihal: data.perihal,
                    //     tipe_surat_id: data.tipe_surat_id,
                    //     sifat_surat: data.sifat_surat,
                    //     pengirim_surat: data.pengirim_surat,
                    //     penerima_surat: data.penerima_surat,
                    // });
                    setData(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchData();
        // console.log(data);
    }, []);

    const columns = [
        {
            field: "sifat_surat",
            headerName: "Sifat Surat",
        },
        {
            field: "tipe_surat_id",
            headerName: "Tipe Surat",
            width: 150,
        },

        {
            field: "pengirim_surat",
            headerName: "Pengirim",
        },
        {
            field: "penerima_surat",
            headerName: "Penerima",
        },
        {
            field: "perihal",
            headerName: "Perihal",
            flex: 1,
        },
        {
            field: "tgl_surat_keluar",
            headerName: "tanggal",
        },
    ];
    return (
        <Box sx={{ flexDirection: "column", gap: 2, display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Surat Keluar</h1>
                <Button
                    onClick={handleClickOpen}
                    startIcon={<AddCircleOutlineIcon />}
                    variant="contained"
                    size="medium"
                >
                    Buat surat Keluar
                </Button>
            </div>
            <Card>
                <Box sx={{ height: 400, width: "100%" }}>
                    {/* TODO: Benerin Fetch  */}
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
            </Card>
            <Modal open={open} onClose={handleClose}></Modal>
        </Box>
    );
};

export default Outward;
