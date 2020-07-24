import React, { Component, Fragment } from 'react';

class Users extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mb-3">
          <div className="col-6">
            <h1>Users</h1>
          </div>
          <div className="col-6">
            <button className="btn btn-primary float-right mt-2">
              Add User
            </button>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <h4>Name: John Doe</h4>
            <p className="mb-0">Age: 34</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Users;
