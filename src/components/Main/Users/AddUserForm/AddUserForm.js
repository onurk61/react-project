import React from "react";

const AddUserForm = (props) => {
  return (
    <form>
      <label htmlFor="firstName">Text</label>
      <input id="firstName" name="firstName" type="text" />
    </form>
  );
};

export default AddUserForm;
