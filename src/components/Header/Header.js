import { React, Fragment } from "react";
import classes from "./Header.module.scss";
import AddUser from "../Home/Users/AddUser/AddUser";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Fragment>
      <div className={classes.header}>
        <NavLink to="/">
          <Button type="button" className={classes['btn-home']}>Users List</Button>
        </NavLink>
        <NavLink to="addUser">
          <AddUser />
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Header;
