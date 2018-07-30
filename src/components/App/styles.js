const styles = theme => ({
    modal: {
      display: "flex"
    },
    paper: {
      width: "300px",
      height: "100px",
      margin: "auto",
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      display: "flex"
    },
    message: {
        margin: 'auto'
    }
  });
  
  export default styles;
  