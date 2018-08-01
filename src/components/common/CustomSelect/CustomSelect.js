import React from "react";
import { withStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  formControl: {
    width: '100%'
  },
});

const CustomTextField = ({ classes, input, meta: { touched, error }, ...rest }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Stock Products</InputLabel>
      <Select  error={touched && error !== undefined} {...input} {...rest}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default withStyles(styles)(CustomTextField)