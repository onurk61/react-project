import { React, useEffect, useRef } from "react";
import Button from "../../../../UI/Button";
import classes from "./User.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../../redux/actions/usersActions";
import { NavLink, useNavigate } from "react-router-dom";

const User = (props) => {
  const usersList = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const preventSendingRequestTwice = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (preventSendingRequestTwice.current) {
      preventSendingRequestTwice.current = false;
      dispatch(getUsers());
    }
  }, [dispatch]);

  const updateUserHandler = (userId) => {
    navigate(`/AddUser/${userId}`);
  };

  const usersData = usersList?.map((user) => {
    return (
      <li className={classes.user} key={user.id}>
        <span>
          <strong>First Name :</strong> {user.firstName}
        </span>
        <span>
          <strong>Last Name :</strong> {user.lastName}
        </span>
        <span>
          <strong>Address 1 :</strong> {user.address1}
        </span>
        <span>
          <strong>Address 2 :</strong> {user.address2}
        </span>
        <span>
          <strong>Town :</strong> {user.town}
        </span>
        <span>
          <strong>Region :</strong> {user.region}
        </span>
        <span>
          <strong>Country :</strong> {user.country}
        </span>
        <span>
          <strong>Post Code :</strong> {user.postCode}
        </span>
        <span>
          <strong>Contact Number :</strong> {user.contactNumber}
        </span>
        <div className={classes["actions-wrapper"]}>
          <Button
            className={classes["btn-edit"]}
            type="button"
            onClick={() => {
              updateUserHandler(user.id);
            }}
          >
            Edit
          </Button>
          <Button className={classes["btn-delete"]} type="button">
            Delete
          </Button>
        </div>
      </li>
    );
  });

  return (
    <>
      {usersData?.length === 0 && (
        <div className={classes["no-data"]}>
          <span>No User Found...</span>
          <span>
            Please go to <NavLink to="/addUser">Add User</NavLink> Page and Add
            New User !!!
          </span>
        </div>
      )}
      {usersData?.length > 0 && usersData}
    </>
  );
};

export default User;
