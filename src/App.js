import React, { useState } from "react";
import "./index.css";


/* eslint-disable no-unused-vars */
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // console.log("before");
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse?.data);
  };
  /* eslint-disable no-unused-vars */

  // const user = {
  //   name: 'George Bluth',
  //   imageUrl: 'https://reqres.in/img/faces/1-image.jpg',
  //   imageSize: 90,
  // };

  // const user1 = {
  //   name: 'Jane Weaver"',
  //   imageUrl: 'https://reqres.in/img/faces/2-image.jpg',
  //   imageSize: 90,
  // };

  // const user2 = {
  //   name: 'Jane Weaver"',
  //   imageUrl: 'https://reqres.in/img/faces/3-image.jpg',
  //   imageSize: 90,
  // };

  // const user3 = {
  //   name: 'Jane Weaver"',
  //   imageUrl: 'https://reqres.in/img/faces/4-image.jpg',
  //   imageSize: 90,
  // };

  // const user4 = {
  //   name: 'Jane Weaver"',
  //   imageUrl: 'https://reqres.in/img/faces/5-image.jpg',
  //   imageSize: 90,
  // };

  // const user5 = {
  //   name: 'Jane Weaver"',
  //   imageUrl: 'https://reqres.in/img/faces/6-image.jpg',
  //   imageSize: 90,
  // };

  return (
    <div className="App">
      <div className="navbar">
          <h1>Choco</h1>
          <h2>Users</h2>
        <div className= "btn">
          <button className="btn-style" onClick={loadUsers}>Get Users</button>
        </div>
      </div>

      <ul className="cards">

      {users.map(({ id, email, first_name, last_name, avatar }) => (

      <li className="card" key={id}>
      Email: {email}, First Name: {first_name}, Last Name: {last_name}, 
      <img className="avatar" src={avatar} alt={'Photo of ' + first_name}></img>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default App;



// Code Learnt from Internship Video

// import React, { useState } from "react";
// import "./index.css";

// /* eslint-disable no-unused-vars */
// const App = () => {
//   const [users, setUsers] = useState([]);

//   const loadUsers = async () => {
//     // console.log("before");
//     const response = await fetch ("https://api.github.com/users");
//     const jsonResponse = await response.json();
//     setUsers(jsonResponse);
//   };
//   /* eslint-disable no-unused-vars */

//   return (
//     <div className="App">
//       <h1>Hello All</h1>
//       <button onClick={loadUsers}>Load Data</button>
//       <h2>Users:</h2>
//       <ul>
//         {users.map(({ id, login }) => (
//           <li key={id}>Name: {login}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default App;



