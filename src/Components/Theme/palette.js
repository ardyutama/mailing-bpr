import { grey } from '@mui/material/colors';
import {alpha} from '@mui/material/styles';

const GREY = {
    100: "#FFFFFF",
    200: "#F5F6FB",
    300: "#E7EAF4",
    400: "#C4C9D9",
    500: "#AFB4C5",
    600: "#767B87",
    700: "#52555E",
    800: "#262222",
};
const PRIMARY = {
    main: "#41A6D9",
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