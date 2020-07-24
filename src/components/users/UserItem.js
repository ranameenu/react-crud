import React from 'react';

const UserItem = (props) => {
  const { id, name, age } = props.val;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4>Name: {name}</h4>
        <p className="mb-0">Age: {age}</p>
      </div>
    </div>
  );
};

export default UserItem;
