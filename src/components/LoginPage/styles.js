const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  paper: {
    width: '470px',
    alignSelf: 'center',
    padding: theme.spacing.unit * 2 
  },
  form: {
      marginBottom: theme.spacing.unit * 4
  },
  textField: {
      width: '100%'
  }
});

export default styles;
