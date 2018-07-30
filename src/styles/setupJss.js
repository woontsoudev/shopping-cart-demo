import { SheetsRegistry } from 'react-jss';
import { jss } from 'react-jss';
import preset from 'jss-preset-default';

import globalStyles from './globalStyles';

const setupJss = (theme) => {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss.createStyleSheet(globalStyles(theme)).attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
};

export default setupJss;
