import React from "react";
import classes from "./Input.module.scss";

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} ref={ref}/>
    </div>
  );
});

export default Input;
