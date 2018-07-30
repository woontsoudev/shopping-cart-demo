const styles = theme => ({
  text: {
    color: theme.palette.primary.light
  },
  section: {},
  main: {
    minHeight: "calc(100vh - 100px)",
    maxWidth: "1280px",
    margin: "0 auto"
  },
  footer: {
    color: theme.palette.grey["A700"]
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  drawerTitle: {
    margin: theme.spacing.unit * 2
  },
  btn: {
    width: '100%',
    borderRadius: 0
  },
  modal: {
    display: 'flex'
  },
  paper: {
    width: '400px',
  height: '500px',
  margin: 'auto'
  }
});

export default styles;
