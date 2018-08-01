const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  textField: {
    width: "100%"
  },
  createForm: {
    width: "80%",
    margin: "0 auto",
    flexGrow: 2
  },
  createActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  stepperContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
});

export default styles;
