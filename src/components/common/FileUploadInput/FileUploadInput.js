import React from "react";

const FileUploadInput = ({ input, meta: { touched, error }, ...rest }) => {
  const eventHandler = event => event.target.files[0];
  return <input onChange={eventHandler} type="file" {...rest} />;
};

export default FileUploadInput;
