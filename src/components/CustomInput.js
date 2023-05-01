import React from "react";

const CustomInput = (props) => {
  const { name, type, placeholder, classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;
