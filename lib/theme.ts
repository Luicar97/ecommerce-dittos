import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const theme = createTheme({
  
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#323232",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: inter.style.fontFamily,
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'subtitle1',
          subtitle2: 'subtitle2',
          body1: 'body1',
          body2: 'body2',
        },
      },
    },
    
  },
});
