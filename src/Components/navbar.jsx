import React, { Component } from 'react'

class NavBar extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <nav className="navbar col-md-12 navbar-expand-md bg-secondary">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link m-0 text-warning" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-0 text-warning" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-0 text-warning" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar
