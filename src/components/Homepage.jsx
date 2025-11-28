import { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });
  const addForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const addUser = () => {
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert(JSON.stringify(data)))
      .catch((error) => console.log(error));
  };
  const updateUser = () => {
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => alert("Update User"))
      .catch((error) => console.log(error));
  };
  const deleteUser = () => {
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => alert("Delete User"))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    // load users from dev API
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <form className="d-flex flex-column">
        <input
          type="text"
          value={formData.id}
          onChange={addForm}
          placeholder="Enter id"
          name="id"
          className="m-2"
        />
        <input
          type="text"
          value={formData.name}
          onChange={addForm}
          placeholder="Enter name"
          name="name"
          className="m-2"
        />
        <input
          type="text"
          value={formData.email}
          onChange={addForm}
          placeholder="Enter email"
          name="email"
          className="m-2"
        />
        <div>
          <button
            type="button"
            className="btn btn-warning m-2"
            onClick={addUser}
          >
            Add User
          </button>
          <button
            type="button"
            className="btn btn-warning m-2"
            onClick={updateUser}
          >
            Update User
          </button>
          <button
            type="button"
            className="btn btn-warning m-2"
            onClick={deleteUser}
          >
            Delete User
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
