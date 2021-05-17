import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#01939A',
            light: '#5DC8CD',
        },
        secondary: {
            main: '#222',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 20,
    }
})
