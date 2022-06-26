import React, { useState, useEffect } from "react";

//My solution. I used the select state to
export default function UserLopFix() {
  const [users, setUsers] = useState([
    { id: 1, name: "Kyle", age: 27 },
    { id: 2, name: "Sally", age: 32 },
    { id: 3, name: "Mike", age: 54 },
    { id: 4, name: "Jim", age: 16 },
  ]);
  const [selectedUserIndex, setSelectedUserIndex] = useState();

  function incrementUserAge(id) {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        }
        return user;
      });
    });
  }

  return (
    <div>
      <h1>Derived State Fix!!!</h1>

      <h3>
        Select User:{" "}
        {selectedUserIndex == null
          ? "None"
          : `${users[selectedUserIndex].name} is ${users[selectedUserIndex].age} years old`}
      </h3>

      {users.map((user, index) => {
        return (
          <div key={user.id}>
            {user.name} is {user.age} years old.{" "}
            <button
              onClick={() => {
                incrementUserAge(user.id);
              }}
            >
              Happy birthday
            </button>{" "}
            <button
              onClick={() => {
                setSelectedUserIndex(index);
              }}
            >
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}
