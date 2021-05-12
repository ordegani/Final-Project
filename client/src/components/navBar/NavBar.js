

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">  ArtNotes</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/gallery" className="nav-link">gallery</Link>
          </li>

          <li className="navbar-item">
          <Link to="/create" className="nav-link">Save</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
