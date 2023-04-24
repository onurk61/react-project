import { React, useEffect, useRef, useState } from "react";
import Input from "../../../UI/Input";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import classes from "./AddUserForm.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUser,
  getUsers,
} from "../../../../redux/actions/usersActions";
import useInput from "../../../../hooks/use-input";

const AddUserForm = (props) => {
  const usersList = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const stopTwiceRequest = useRef(false);
  const { userId } = useParams();
  const [editUserObj, setEditUserObj] = useState([]);
  const newVal = useRef();

  useEffect(() => {
    if (stopTwiceRequest.current) {
      stopTwiceRequest.current = false;
      fetchData();
    }
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const getUpdatedData = async () => {
      if (!loading) {
        setEditUserObj(usersList?.filter((item) => item.id === userId));
      } else {
        setEditUserObj([]);
      }
    };

    getUpdatedData();
  }, [loading]);

  const validationForInput = (value) => value.trim() !== "";
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(validationForInput);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(validationForInput);
  const {
    value: contactNumber,
    isValid: contactNumberIsValid,
    hasError: contactNumberInputHasError,
    valueChangeHandler: contactNumberChangeHandler,
    inputBlurHandler: contactNumberBlurHandler,
    reset: resetContactNumberInput,
  } = useInput(validationForInput);
  const {
    value: address1,
    isValid: address1IsValid,
    hasError: address1InputHasError,
    valueChangeHandler: address1ChangeHandler,
    inputBlurHandler: address1BlurHandler,
    reset: resetAddress1Input,
  } = useInput(validationForInput);
  const {
    value: address2,
    isValid: address2IsValid,
    hasError: address2InputHasError,
    valueChangeHandler: address2ChangeHandler,
    inputBlurHandler: address2BlurHandler,
    reset: resetAddress2Input,
  } = useInput(validationForInput);
  const {
    value: town,
    isValid: townIsValid,
    hasError: townInputHasError,
    valueChangeHandler: townChangeHandler,
    inputBlurHandler: townBlurHandler,
    reset: resetTownInput,
  } = useInput(validationForInput);
  const {
    value: region,
    isValid: regionIsValid,
    hasError: regionInputHasError,
    valueChangeHandler: regionChangeHandler,
    inputBlurHandler: regionBlurHandler,
    reset: resetRegionInput,
  } = useInput(validationForInput);
  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput(validationForInput);
  const {
    value: postCode,
    isValid: postCodeIsValid,
    hasError: postCodeInputHasError,
    valueChangeHandler: postCodeChangeHandler,
    inputBlurHandler: postCodeBlurHandler,
    reset: resetPostCodeInput,
  } = useInput(validationForInput);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    contactNumberIsValid &&
    address2IsValid &&
    address1IsValid &&
    townIsValid &&
    regionIsValid &&
    countryIsValid &&
    postCodeIsValid
  ) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameInputHasError
    ? classes["invalid"]
    : "";
  const lastNameInputClasses = lastNameInputHasError ? classes["invalid"] : "";
  const contactNumberInputClasses = contactNumberInputHasError
    ? classes["invalid"]
    : "";
  const address1InputClasses = address1InputHasError ? classes["invalid"] : "";
  const address2InputClasses = address2InputHasError ? classes["invalid"] : "";
  const townInputClasses = townInputHasError ? classes["invalid"] : "";
  const regionInputClasses = regionInputHasError ? classes["invalid"] : "";
  const countryInputClasses = countryInputHasError ? classes["invalid"] : "";
  const postCodeInputClasses = postCodeInputHasError ? classes["invalid"] : "";

  async function fetchData() {
    if (userId) {
      const updatedDate = {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        town: town,
        region: region,
        country: country,
        postCode: postCode,
        contactNumber: contactNumber,
      };
      dispatch(updateUser(updatedDate, userId));
    } else {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        town: town,
        region: region,
        country: country,
        postCode: postCode,
        contactNumber: contactNumber,
      };
      dispatch(addUser(userData));
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      firstNameIsValid &&
      lastNameIsValid &&
      contactNumberIsValid &&
      address2IsValid &&
      address1IsValid &&
      townIsValid &&
      regionIsValid &&
      countryIsValid &&
      postCodeIsValid
    ) {
      fetchData();
      resetFirstNameInput();
      resetLastNameInput();
      resetContactNumberInput();
      resetAddress1Input();
      resetAddress2Input();
      resetTownInput();
      resetRegionInput();
      resetCountryInput();
      resetPostCodeInput();
    }
  };

  return (
    <>
      {!loading && (
        <div className={classes["form-wrapper"]}>
          <Card className={classes["card-shadow"]}>
            <form className={classes.form} onSubmit={submitHandler}>
              <h1 className={classes.title}>
                {userId ? "Update" : "Add New"} User
              </h1>
              <div className={classes["input-control"]}>
                <div className={classes["input-flex"]}>
                  <div className={firstNameInputClasses}>
                    <Input
                      ref={newVal}
                      label="First Name"
                      input={{
                        id: "firstName",
                        defaultValue: userId
                          ? editUserObj[0]?.firstName
                          : firstName,
                        onChange: firstNameChangeHandler,
                        onBlur: firstNameBlurHandler,
                        type: "text",
                      }}
                    />
                  </div>
                  {firstNameInputHasError && (
                    <p className={classes.error}>
                      First Name must not be empty !
                    </p>
                  )}
                </div>
                <div className={classes["input-flex"]}>
                  <div className={lastNameInputClasses}>
                    <Input
                      ref={newVal}
                      label="Last Name"
                      input={{
                        id: "lastName",
                        defaultValue: userId
                          ? editUserObj[0]?.lastName
                          : lastName,
                        onChange: LastNameChangeHandler,
                        onBlur: LastNameBlurHandler,
                        type: "text",
                      }}
                    />
                  </div>
                  {lastNameInputHasError && (
                    <p className={classes.error}>
                      First Name must not be empty !
                    </p>
                  )}
                </div>
              </div>
              <div className={classes["input-control"]}>
                <div className={classes["input-flex"]}>
                  <div className={address1InputClasses}>
                    <Input
                      ref={newVal}
                      label="Address 1"
                      input={{
                        id: "address1",
                        type: "text",
                        defaultValue: userId
                          ? editUserObj[0]?.address1
                          : address1,
                        onChange: address1ChangeHandler,
                        onBlur: address1BlurHandler,
                      }}
                    />
                  </div>
                  {address1InputHasError && (
                    <p className={classes.error}>
                      Address 1 must not be empty !
                    </p>
                  )}
                </div>
                <div className={classes["input-flex"]}>
                  <div className={address2InputClasses}>
                    <Input
                      ref={newVal}
                      label="Address 2"
                      input={{
                        id: "address2",
                        type: "text",
                        defaultValue: userId
                          ? editUserObj[0]?.address2
                          : address2,
                        onChange: address2ChangeHandler,
                        onBlur: address2BlurHandler,
                      }}
                    />
                  </div>
                  {address2InputHasError && (
                    <p className={classes.error}>
                      Address 2 must not be empty !
                    </p>
                  )}
                </div>
              </div>
              <div className={classes["input-control"]}>
                <div className={classes["input-flex"]}>
                  <div className={townInputClasses}>
                    <Input
                      ref={newVal}
                      label="Town"
                      input={{
                        id: "town",
                        type: "text",
                        defaultValue: userId ? editUserObj[0]?.town : town,
                        onChange: townChangeHandler,
                        onBlur: townBlurHandler,
                      }}
                    />
                  </div>
                  {townInputHasError && (
                    <p className={classes.error}>Town must not be empty !</p>
                  )}
                </div>
                <div className={classes["input-flex"]}>
                  <div className={regionInputClasses}>
                    <Input
                      ref={newVal}
                      label="Region"
                      input={{
                        id: "region",
                        type: "text",
                        defaultValue: userId ? editUserObj[0]?.region : region,
                        onChange: regionChangeHandler,
                        onBlur: regionBlurHandler,
                      }}
                    />
                  </div>
                  {regionInputHasError && (
                    <p className={classes.error}>Region must not be empty !</p>
                  )}
                </div>
              </div>
              <div className={classes["input-control"]}>
                <div className={classes["input-flex"]}>
                  <div className={countryInputClasses}>
                    <Input
                      ref={newVal}
                      label="Country"
                      input={{
                        id: "country",
                        type: "text",
                        defaultValue: userId
                          ? editUserObj[0]?.country
                          : country,
                        onChange: countryChangeHandler,
                        onBlur: countryBlurHandler,
                      }}
                    />
                  </div>
                  {countryInputHasError && (
                    <p className={classes.error}>Country must not be empty !</p>
                  )}
                </div>
                <div className={classes["input-flex"]}>
                  <div className={postCodeInputClasses}>
                    <Input
                      ref={newVal}
                      label="Post Code"
                      input={{
                        id: "postCode",
                        type: "text",
                        defaultValue: userId
                          ? editUserObj[0]?.postCode
                          : postCode,
                        onChange: postCodeChangeHandler,
                        onBlur: postCodeBlurHandler,
                      }}
                    />
                  </div>
                  {postCodeInputHasError && (
                    <p className={classes.error}>
                      Post Code must not be empty !
                    </p>
                  )}
                </div>
              </div>
              <div className={classes["input-control"]}>
                <div className={classes["input-flex"]}>
                  <div className={contactNumberInputClasses}>
                    <Input
                      ref={newVal}
                      label="Contact Number"
                      input={{
                        id: "contactNumber",
                        defaultValue: userId
                          ? editUserObj[0]?.contactNumber
                          : contactNumber,
                        onChange: contactNumberChangeHandler,
                        onBlur: contactNumberBlurHandler,
                        type: "text",
                      }}
                    />
                  </div>
                  {contactNumberInputHasError && (
                    <p className={classes.error}>
                      Contact Number must not be empty !
                    </p>
                  )}
                </div>
              </div>
              <div className={classes["actions-wrapper"]}>
                <NavLink to="/">
                  <Button className={classes["btn-cancel"]}>Cancel</Button>
                </NavLink>
                <Button
                  className={classes["btn-primary"]}
                  disabled={!formIsValid}
                >
                  {userId ? "Update" : "Save"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
};

export default AddUserForm;
