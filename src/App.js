import React, { useState } from "react";
import "./index.css";

/* eslint-disable no-unused-vars */
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // console.log("before");
    const response = await fetch ("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };
  /* eslint-disable no-unused-vars */

  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Load Data</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login }) => (
          <li key={id}>Name: {login}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;



