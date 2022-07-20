import React from "react";

const InputBox = (props) => {
  const { user, key, field, editData } = props;

  return (
    <input
      id={`input-${key}-${field}`}
      className="col-8 form-control"
      type="text"
      value={user[field]}
      onChange={(e) => editData(field, e.target.value)}
    />
  );
};

export default InputBox;
