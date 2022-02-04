import React, { Component, useState } from "react";
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
import Modal from "../../Global/Modal";
import TextField from "@mui/material/TextField";

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

const Inbox = () => {
    const [open, setOpen] = React.useState(false);
    const { data } = useDemoData({
        dataSet: "Commodity",
        rowLength: 100,
        maxColumns: 6,
    });
    const handleClickOpen = (params) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{flexDirection:"row", gap:6}}>
            <div>
                <h1>Surat Masuk</h1>
            </div>
            <div>
                <SearchBar />
            </div>
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
                        {...data}
                    />
                </Box>
            </div>
            <Modal open={open} onClose={handleClose}>
            </Modal>
        </Box>
    );
};

export default Inbox;
