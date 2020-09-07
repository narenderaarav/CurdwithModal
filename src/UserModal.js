import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

const initialData = {
  name: "",
  username: "",
  mobile: "",
  email: "",
  description: ""
};

const UserModal = ({ show, handleClose, userData, successSubmit }) => {
  const [user, setUsers] = useState(initialData);

  const handleChange = e => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userData) {
      setUsers(userData);
    } else {
      setUsers(initialData);
    }
  }, [userData]);

  const submitForm = async e => {
    e.preventDefault();
    if (user.id) {
      await axios.put(`http://localhost:3008/userList/${user.id}`, user);
    } else await axios.post("http://localhost:3008/userList", user);

    setUsers({
      name: "",
      username: "",
      mobile: "",
      email: "",
      description: ""
    });

    successSubmit()
  };


  const buttonRender = () =>{
    if(userData){
      return <button type="submit" className="btn btn-warning">
      Edit User
    </button>
    } 
    return<button type="submit" className="btn btn-success">
    Add User
  </button>
  }


  const { name, username, mobile, email, description } = user;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{userData ? "Edit User": "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile"
                name="mobile"
                value={mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              
              {buttonRender()}
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default UserModal;
