import React, { useState } from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const editUser = (field, value) => {
    setUser((user) => ({ ...user, [field]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    setUser({
      name: "",
      email: "",
      role: "",
    });

    alert("User Added Successfully");
  };

  return (
    <div className="container-fluid">
      <form className="m-2" autoComplete="off">
        <h3>Add User</h3>
        <div className="row mt-2">
          <div className="col-1">
            <label>Name: </label> <br />
          </div>
          <InputBox key={-1} user={user} field={"name"} editData={editUser} />
        </div>
        <div className="row mt-2">
          <div className="col-1">
            <label>Email:</label> <br />
          </div>
          <InputBox key={-1} user={user} field={"email"} editData={editUser} />
        </div>
        <div className="row mt-2">
          <div className="col-1">
            <label>Role:</label> <br />
          </div>
          <InputBox key={-1} user={user} field={"role"} editData={editUser} />
        </div>

        <div className="row m-2">
          <Button label="Submit" className="btn-success" onClick={submitForm} />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
