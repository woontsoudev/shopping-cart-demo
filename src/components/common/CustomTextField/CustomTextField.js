import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTextField = ({
    input,
    meta: { touched, error },
    ...rest
  }) => {
    return <TextField
      error={touched && error !== undefined}
      {...input}
      {...rest}
    />
  }
 
export default CustomTextField;
