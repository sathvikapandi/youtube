import React, { useState, useEffect } from 'react';
import "./List.css";
import axios from 'axios';

export default function List() {
  // State to store the list of users
  const [users, setUsers] = useState([]);

  // Function to fetch users from the backend API
  const fetchUsers = () => {
    axios.get("http://localhost:5000/students")
      .then(res => setUsers(res.data.students))
      .catch(err => console.error("Error fetching users:", err));
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle delete user
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/studentdelete/${id}`) // Removed extra slash after 'http:'
      .then(() => {
        alert("Deleted");
        fetchUsers(); // Refresh list after deletion
      })
      .catch(err => console.error("Error deleting user:", err));
  };

  return (
    <>
      <div className='col-md-10 content'>
        <h1>List New Deploy ONE</h1>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th> {/* Corrected the column name to match displayed data */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}> {/* Use a unique key such as user.id */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
