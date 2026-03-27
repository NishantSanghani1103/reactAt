import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../features/auth/authSlice'

export default function Header() {
  const { user } = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact Us</Link>
              </li>

              <li>
                {
                  user
                    ?
                    <Link to="/" onClick={() => dispatch(logOut())}>LogOut</Link>
                    :
                    <Link to="/login">Login</Link>
                }

              </li>
              {
                !user
                &&
                <li>
                  <Link to={'/forgot-password'}>Forgot Password</Link>
                </li>
              }
              <li>
                <Link to="/admin/dashboard">Admin</Link>
              </li>
              <li>
                <Link to="/user/dashboard">User</Link>
              </li>
              <li>
                <Link to="/admin/user-list">User List</Link>
              </li>
              <li>
                <Link to="/user/setting">User Settings</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav >
    </div>
  )
}
