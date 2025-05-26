import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function List() {
    

const [users,setUsers]=useState([])



useEffect(()=>{

   axios.get("https://dummyjson.com/users")

   .then(res=>setUsers(res.data.users))
    
 },[])



  return (
      <>
       <div className='col-md-10 content'>

      <h1>List</h1>
      <table  border="1" className='tablemy'>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>email</th>
        <th>username</th>
      </tr>


      

      {
        users.map((e,i)=> (
            <>
            <tr>
              <td>{e.firstName}</td>
              <td>{e.age}</td>
              <td>{e.email}</td>
              <td>{e.username}</td>
            </tr>
            </>
        ))
      }
      </table>

      </div>
    
    </>
  )
}