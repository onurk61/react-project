import { React, Fragment } from "react";
import classes from "./Header.module.scss";
import AddUser from "../Main/Users/AddUser/AddUser";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <NavLink to="/">
          <Button type="button">Onur Kanca</Button>
        </NavLink>
        <NavLink to="addUser">
          <AddUser />
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Header;
