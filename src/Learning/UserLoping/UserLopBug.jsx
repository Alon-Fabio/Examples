import React, { useState, useEffect } from "react";

// This component has a derived state problem.
// The second useState saves a piece of the original state which will not update if the original state is updated.
// leaving you with false date.

export default function UserLopBug() {
  const [users, setUsers] = useState([
    { id: 1, name: "Kyle", age: 25 },
    { id: 2, name: "John", age: 23 },
    { id: 3, name: "Karl", age: 33 },
    { id: 4, name: "Lois", age: 44 },
  ]);
  const [selectedUserIndex, setSelectedUserIndex] = useState();

  function incrementUserAge(id) {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }
  function selectUser(id) {
    const user = users.find((user) => user.id === id);
    setSelectedUserIndex(user);
  }
  return (
    <div>
      <h1>Derived State Bug...</h1>
      <p>You can select a user, but it wont update</p>
      <h3>
        Select User:{" "}
        {selectedUserIndex == null
          ? "None"
          : `${selectedUserIndex.name} is ${selectedUserIndex.age} years old`}
      </h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name} is {user.age} years old.{" "}
            <button onClick={() => incrementUserAge(user.id)}>
              Happy birthday
            </button>{" "}
            <button onClick={() => selectUser(user.id)}>Select</button>
          </div>
        );
      })}
    </div>
  );
}
