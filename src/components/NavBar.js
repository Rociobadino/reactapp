import React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import imgdance from './imagenes/imgdance.jpg';

const NavBar = () => {

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to= '/' className="btn btn-ghost normal-case text-xl">DANCE</Link>
    </div>
    <CartWidget></CartWidget>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={imgdance} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link to='/productos' className="justify-between">
              Productos 
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavBar