export default function Input(theme) {
    return{
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused" : {
                        backgroudColor: theme.palette.primary.focus
                    }
                }
            }
        }
    };
};
