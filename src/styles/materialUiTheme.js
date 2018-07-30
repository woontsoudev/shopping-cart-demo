import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const materialUiTheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: red,
    },
    status: {
        danger: 'orange',
    },
});

export default materialUiTheme;