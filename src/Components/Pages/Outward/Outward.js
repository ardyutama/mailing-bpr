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
import Modal from "../../Global/CreateOutwardModal";
import { Button, Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
                        {...data}
                    />
                </Box>
            </Card>
            <Modal open={open} onClose={handleClose}></Modal>
        </Box>
    );
};

export default Outward;
