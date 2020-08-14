import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditUser extends Component {
  render() {
    return (
      <div>
        <div className="row mb-5">
          <div className="col-6">
            <h1>Edit User</h1>
          </div>
          <div className="col-6">
            <Link to="/users" className="btn btn-primary float-right mt-2">
              Back
            </Link>
          </div>
        </div>

        <form className="w-50" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" name="age" required />
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-success mt-2"
          />
        </form>
      </div>
    );
  }
}

export default EditUser;
