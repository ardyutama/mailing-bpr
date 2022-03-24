import { alpha, InputLabel, styled, TextField } from "@mui/material";


const CustomInput = styled(TextField)(({ theme }) => ({
    width: "100%",
    "label + &": {
        marginTop: 3,
    },
    transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
    ]),
    ".Mui-focused": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
    },
}));

export default function CustomTextField({label,id,...other}) {
    return (
        <div>
            <InputLabel shrink htmlFor={id}>
                {label}
            </InputLabel>
            <CustomInput
                hiddenLabel
                id={id}
                multiline
                maxRows={4}
                sx={{ width: "100%" }}
                {...other}
            />
        </div>
    );
    
};

