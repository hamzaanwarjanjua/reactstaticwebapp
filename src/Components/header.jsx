import React, { Component } from 'react'

class Header extends Component {
  state = {}
  render() {
    return (
      <div className="p-2 text-center bg-warning">
        <h2 className="col-md-12">{'MY REACT APPLICATION'}</h2>
      </div>
    )
  }
}

export default Header