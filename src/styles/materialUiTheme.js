import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const materialUiTheme = createMuiTheme({
    palette: {
        primary: purple['#4A148C'],
        secondary: purple['#AA00FF'],
    },
    status: {
        danger: 'orange',
    },
});

export default materialUiTheme;