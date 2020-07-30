import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddUser extends Component {
  state = {
    name: '',
    age: '',
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="row mb-5">
          <div className="col-6">
            <h1>Add User</h1>
          </div>
          <div className="col-6">
            <Link to="/users" className="btn btn-primary float-right mt-2">
              Back
            </Link>
          </div>
        </div>

        <form className="w-50">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
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

export default AddUser;
