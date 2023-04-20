import React from "react";
import Button from '../../../../UI/Button';
import classes from "./User.module.scss";

const User = (props) => {
  return (
    <>
      <li className={classes.user}>
        <span>
          <strong>First Name :</strong> Onur
        </span>
        <span>
          <strong>Last Name :</strong> Kanca
        </span>
        <span>
          <strong>Address 1 :</strong> Soğanlı Mahallesi, Site Sokak, No:5,
          Daire:8
        </span>
        <span>
          <strong>Address 2 :</strong> Akıncılar Mahallesi, Posta Caddesi, Kansu
          Apartmanı, No:19, Daire:6
        </span>
        <span>
          <strong>Town :</strong> İstanbul
        </span>
        <span>
          <strong>Region :</strong> Bahçelievler
        </span>
        <span>
          <strong>Country :</strong> Turkey
        </span>
        <span>
          <strong>Post Code :</strong> 84160
        </span>
        <span>
          <strong>Contact Number :</strong> 05436834231
        </span>
        <div className={classes["actions-wrapper"]}>
          <Button className={classes["btn-edit"]} type="button">Edit</Button>
          <Button className={classes["btn-delete"]} type="button">Delete</Button>
        </div>
      </li>
    </>
  );
};

export default User;
