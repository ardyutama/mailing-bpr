export default function Input(theme) {
    return {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        backgroudColor: theme.palette.primary.focus,
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        fontFamily: "Inter",
                        // fontWeight : 'bold'
                        // fontSize: 2,
                    },
                },
                // input: {
                //     "& .MuiInputBase-input": {
                //         fontFamily: "Inter",
                //         fontWeight: 'bold'
                //         // fontSize: 2,
                //     },
                // },
            },
        },
    };
};
