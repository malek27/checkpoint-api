import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./component/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(error);
  return (
    <div className="App">
      <h1>Users List</h1>
      <div className="user-container">
        <UserList data={users} />
      </div>
    </div>
  );
}

export default App;
