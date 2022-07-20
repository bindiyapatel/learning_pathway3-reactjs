import React from "react";
import Button from "./Button";
import InputBox from "./InputBox";

const User = (props) => {
  const {
    currentUser,
    setCurrentUser,
    user,
    index,
    editData,
    deleteRecord,
    editRecord,
    updateRecord,
  } = props;

  return (
    <tr key={index}>
      <td className="text-capitalize">
        {currentUser.id !== user.id ? (
          user.name
        ) : (
          <InputBox user={currentUser} field={"name"} editData={editData} />
        )}
      </td>
      <td>
        {currentUser.id !== user.id ? (
          user.email
        ) : (
          <InputBox user={currentUser} field={"email"} editData={editData} />
        )}
      </td>
      <td className="text-capitalize">
        {currentUser.id !== user.id ? (
          user.role
        ) : (
          <InputBox user={currentUser} field={"role"} editData={editData} />
        )}
      </td>
      <td>
        {currentUser.id !== user.id ? (
          <>
            <Button
              label="Edit"
              className="btn-primary me-2"
              onClick={(e) => editRecord(user.id)}
            />

            <Button
              label="Delete"
              className="btn-danger"
              onClick={() => deleteRecord(user.id)}
            />
          </>
        ) : (
          <>
            <Button
              label="Update"
              className="btn-primary me-2"
              onClick={() => updateRecord()}
            />

            <Button
              label="Cancel"
              className="btn-danger"
              onClick={() => setCurrentUser({})}
            />
          </>
        )}
      </td>
    </tr>
  );
};

export default User;
