import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: '#1976d2',
        secondary: '#dc004e',
        error: '#f44336'
    },
    typography: {
        fontFamily: 'Roboto'
    },
    shape: {
        borderRadius: 4,
        backgroundColor: '#5f6caf',
        color: '#ffffff',
        border: '#cccccc'
    }
});
export default theme;
