import { grey } from '@mui/material/colors';
import {alpha} from '@mui/material/styles';

const GREY = {
    100: "#F9F9FA",
    200: "#EDEEEE",
    300: "#DFE1E2",
    400: "#D1D3D5",
    500: "#C1C4C7",
    600: "#AFB3B7",
    700: "#9BA0A5",
    800: "#384047",
};
const PRIMARY = {
    main: "#166FBC",
    pressed: "#195C80",
    border: "#B8D6E5",
    surface: "#E5F6FF",
    focus: "#3D9ACC",
    contrastText: "#fff",
};

const SECONDARY = {
    main: "#F24949",
    border: "#F29191",
    pressed: "#800000",
    hover: "#BF0000",
    contrastText: "#fff",
};

const SUCCESS = {
    main: "#3CBA2B",
    border: "#C8F8AC",
    pressed: "#16861A",
    hover: "#319923",
    contrastText: "#fff",
};

const DANGER = {
    main: "#D74621",
    border: "#FBC9A4",
    pressed: "#9B180E",
    hover: "#B92D14",
    contrastText: "#fff",
};

const palette = {
    primary: { ...PRIMARY},
    secondary: { ...SECONDARY},
    success : { ...SUCCESS},
    danger: { ...DANGER},
    common : {black: GREY[800], white: GREY[100]},
    grey : GREY,
};

export default palette;