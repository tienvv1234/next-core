import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

// Create a theme instance.
export const theme = createTheme({
    typography: {
        fontFamily: 'Heebo, sans-serif',
    },
    palette: {
        primary: {
            main: '#FF6464',
        },
        secondary: {
            light: '#EDF7FA',
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
                    '&:hover, &.active': {
                        color: '#FF6464',
                    },
                }
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: { color: 'white' },
                }
            ],
            styleOverrides: {
                root: {
                    color: 'white',
                },
            }
        },
    }
});