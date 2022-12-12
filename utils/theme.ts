import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#F1F5F9',
        },
        secondary: {
            main: '#00A8CC',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'md',
            },
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width: 600px)': {
                        maxWidth: '680px'
                    }, 
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 90px)': {
                        maxWidth: '860px'
                    },
                },
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    '&:hover': {
                        color: '#FF6464',
                    },
                }
            },
        }
    }
});