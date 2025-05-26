import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
    <div className='col-md-2 sidebar menu'>
      <ul>
        
        <li><i class="fa fa-heart"></i>Home</li>
        <li><Link to="Subscribe">Subscribe</Link></li>
        <li><Link to='List'>List</Link></li>
      </ul>
    </div>
    </>
  )
}
