import User from "./User/User";
import classes from "./UsersList.module.scss";
// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

const UsersList = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const userInfo = useSelector((state) => state.users);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getList = async () => {
  //     const response = await axios.get(
  //       "https://react-project-783fb-default-rtdb.firebaseio.com/users.json"
  //     );

  //     if (!response.data) {
  //       setIsLoading(true);
  //     }

  //     for (let key in response.data) {
  //       userInfo.push({ ...response.data[key], id: key });
  //     }

  //     dispatch({ type: "usersList", users: userInfo });
  //   };

  //   return getList;
  // }, []);

  // if (!userInfo) {
  //   return;
  // }

  // const usersList = userInfo.map((user) => <User key={user.id} {...user} />);

  return (
    <ul className={classes["users-list"]}>
      {/* {isLoading && <p>No Data</p>}
      {!isLoading && usersList} */}
      <User />
    </ul>
  );
};

export default UsersList;
