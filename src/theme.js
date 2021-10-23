import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        primary: {
            softRed: 'hsl(7, 99%, 70%)',
            yellow: 'hsl(51, 100%, 49%)',
            darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
            darkBlue: 'hsl(198, 62%, 26%)',
            darkModerateCyan: 'hsl(168, 34%, 41%)',
        },
        neutral: {
            veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
            veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
            darkGrayishBlue: 'hsl(232, 10%, 55%)',
            grayishBlue: 'hsl(210, 4%, 67%)',
            white: 'hsl(0, 0%, 100%)',
        },
    },
    breakpoints: {
        xsDevices: 'max-width: 575.98px',
        sDevices: 'max-width: 767.98px',
        mDevices: 'max-width: 991.98px',
        lDevices: 'max-width: 1199.98px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
