import React, { useEffect, useState } from "react";

import User from "../components/User";

const UsersList = () => {
  const apiUrl = "http://localhost:5000";

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const editRecord = async (id) => {
    const user = await fetchUser(id);
    setCurrentUser(user);
  };

  const editData = (field, value) => {
    setCurrentUser((currentUser) => ({ ...currentUser, [field]: value }));
  };

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);
    const data = await res.json();

    return data;
  };

  const updateUser = async () => {
    const res = await fetch(`${apiUrl}/users/${currentUser.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    const data = await res.json();

    setUsers(users.map((user) => (user.id === currentUser.id ? data : user)));

    alert("User Updated Successfully");
    setCurrentUser({});
  };

  const getTableData = () => {
    let list = users;

    if (search !== "") {
      list = list.filter((user) => {
        return (
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.role.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return list;
  };

  const deleteUser = async (id) => {
    const res = await fetch(`${apiUrl}/users/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      setUsers((users) => [...users].filter((x, i) => x.id !== id));
      alert("User Deleted Successfully");
    } else {
      alert("Error Deleting This Task");
    }
  };

  const fetchUsers = async () => {
    const res = await fetch(`${apiUrl}/users`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <input
          className="form-control"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or role"
        ></input>

        <div className="list-table col-12 mt-2">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {getTableData().length > 0 ? (
                getTableData().map((user, index) => (
                  <User
                    key={user.id}
                    index={index}
                    user={user}
                    currentUser={currentUser}
                    editData={editData}
                    editRecord={editRecord}
                    deleteRecord={deleteUser}
                    updateRecord={updateUser}
                    setCurrentUser={setCurrentUser}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-danger">
                    No users
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
