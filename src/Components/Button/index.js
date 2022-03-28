import { Button } from "@mui/material";

export default function CustomButton({title,...other}) {
    return (
        <Button
            sx={{
                py: 2,
                px: 2,
                bgcolor: "#0F4C81",
                borderRadius: 1.5,
                color: "white",
                "&:hover": {
                    bgcolor: "#082641",
                },
            }}
            {...other}
            // onClick={handleOpen}
        >
            {title}
        </Button>
    );
};
