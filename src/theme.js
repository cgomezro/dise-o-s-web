import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    //type: 'dark',
    primary: blue,
    secondary: red,
    background: {
      default: "#f6f6f6",
    },
  },
  //shadows: ["none"],
  shape: {
    borderRadius: 4,
  },
  typography: {
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
    caption: {
      letterSpacing: 0,
      opacity: 0.7,
    },
    fontFamily: '"Poppins", "Helvetica", sans-serif',
    h5: {
      fontWeight: 600,
      letterSpacing: -0.5,
    },
    h6: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        borderWidth: "2px !important",
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 6,
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 500,
      },
    },
    MuiTab: {
      root: {
        minWidth: "auto !important",
        paddingLeft: 25,
        paddingRight: 25,
      },
    },
  },
});

export default theme;
