import { React, useEffect, useState } from "react";
import Button from "../../../../UI/Button";
import classes from "./User.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const User = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(
        "https://react-project-783fb-default-rtdb.firebaseio.com/users.json"
      );

      if (!response.data) {
        setIsLoading(true);
      }

      for (let key in response.data) {
        userInfo.push({ ...response.data[key], id: key });
      }

      dispatch({ type: "usersList", users: userInfo });
    };

    return getList;
  }, [dispatch,userInfo]);

  if (!userInfo) {
    return;
  }

  const users = userInfo.map((user) => {
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
          <Button className={classes["btn-edit"]} type="button">
            Edit
          </Button>
          <Button className={classes["btn-delete"]} type="button">
            Delete
          </Button>
        </div>
      </li>
    );
  });
  return <>{isLoading && users}</>;
};

export default User;
