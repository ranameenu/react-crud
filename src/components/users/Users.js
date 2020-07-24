import React, { Component, Fragment } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Rakesh Rankawat',
        age: 26,
      },
      {
        id: 2,
        name: 'Meenu Rana',
        age: 26,
      },
      {
        id: 3,
        name: 'John Doe',
        age: 34,
      },
    ],
  };

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

        {this.state.users.map((val, i) => (
          <UserItem key={val.id} val={val} />
        ))}
      </Fragment>
    );
  }
}

export default Users;
