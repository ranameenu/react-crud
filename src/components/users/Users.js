import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: null,
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:5000/arrUsers');
    console.log(response);

    this.setState({ users: response.data });
  }

  render() {
    return (
      <Fragment>
        <div className="row mb-3">
          <div className="col-6">
            <h1>Users</h1>
          </div>
          <div className="col-6">
            <Link to="/users/add" className="btn btn-primary float-right mt-2">
              Add User
            </Link>
          </div>
        </div>

        {this.state.users !== null ? (
          this.state.users.map((val, i) => <UserItem key={val.id} val={val} />)
        ) : (
          <p>No users found</p>
        )}
      </Fragment>
    );
  }
}

export default Users;
