import User from "./User/User";
import classes from "./UsersList.module.scss";

const UsersList = (props) => {
  return (
    <ul className={classes["users-list"]}>
      <User />
    </ul>
  );
};

export default UsersList;
