import PropTypes from "prop-types";
import { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import componentsOverride from "./overrides";
import shape from "./shape";
import typography from "./typography";

ThemeConfig.propTypes = {
    children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape,
            typography
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
