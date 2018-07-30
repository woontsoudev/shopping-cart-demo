import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import setupJss from './styles/setupJss';
import materialUiTheme from './styles/materialUiTheme';
import './index.css';
import { App } from './components/index';
import store from './store/index';

const styles = setupJss(materialUiTheme);

ReactDOM.render(
<Fragment>
  <CssBaseline/>
  <Provider store={store}>
      <JssProvider registry={styles}>
        <MuiThemeProvider theme={materialUiTheme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
  </Provider>
</Fragment>, 
document.getElementById('root'));
registerServiceWorker();
