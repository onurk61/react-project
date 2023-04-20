import { React, useEffect } from "react";
import Input from "../../../UI/Input";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import classes from "./AddUserForm.module.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AddUserForm = (props) => {
  useEffect(() => {
    const addNewUser = async () => {
      const payload = {
        id: Math.random(),
        firstName: "Onur",
        lastName: "Kanca",
        address1: "Salacak İskele Mahallesi",
        address2: "Muhtar Tahsin Şahin Sokak, No: 14, Daire:3",
        town: "İstanbul",
        region: "Üsküdar",
        country: "Turkey",
        postCode: "11111",
        contactNumber: "0555-555-55-55",
      };
      await axios.post(
        "https://react-project-783fb-default-rtdb.firebaseio.com/users.json",
        payload
      );
    };

    return addNewUser;
  }, []);
  return (
    <div className={classes["form-wrapper"]}>
      <Card className={classes["card-shadow"]}>
        <form className={classes.form}>
          <h1 className={classes.title}>Add User Form</h1>
          <div className={classes["input-control"]}>
            <Input
              label="First Name"
              input={{
                id: "firstName_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
            <Input
              label="Last Name"
              input={{
                id: "lastName_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
          </div>
          <div className={classes["input-control"]}>
            <Input
              label="Address 1"
              input={{
                id: "address1_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
            <Input
              label="Address 2"
              input={{
                id: "address2_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
          </div>
          <div className={classes["input-control"]}>
            <Input
              label="Town"
              input={{
                id: "town_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
            <Input
              label="Region"
              input={{
                id: "region_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
          </div>
          <div className={classes["input-control"]}>
            <Input
              label="Country"
              input={{
                id: "country_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
            <Input
              label="Postal Code"
              input={{
                id: "postalCode_" + props.id,
                type: "text",
              }}
              className={classes["input-flex"]}
            />
          </div>
          <Input
            label="Contact Number"
            input={{
              id: "contactNumber_" + props.id,
              type: "text",
            }}
            className={classes["input-flex"]}
          />
          <div className={classes["actions-wrapper"]}>
            <NavLink to="/">
              <Button className={classes["btn-cancel"]}>Cancel</Button>
            </NavLink>
            <Button className={classes["btn-primary"]}>Save</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
