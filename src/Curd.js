import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import UserModal from "./UserModal";
import UserListing from "./UsersListing"
import AlartBox from "./AlartBox"
const Curd = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [usersList, setUsersList]=useState([])

  //create for Edit user//
  const [user, setUser] = useState(null);

  //for the Alert box
  const [showConfirmation, setshowConfirmation] = useState(false)

  //for Save Id for the delete
  const [deleteId, setDeleteId] = useState(null)

const handleShow = () =>{
  setShow(true)
  setUser(null)
}


//successfully instert data then refresh and close Modal//

const successSubmit = () =>{
  setShow(false)
  usersListLoad();
}

  
//create a Hanlde for open modal to edit button//
//and pass the data//
const handleEdit = (item) =>{
    setUser(item);
    setShow(true);
  }
  

  const usersListLoad = async() =>{
    let result = await axios.get("http://localhost:3008/userList")
    setUsersList(result.data.reverse())
    console.log(result.data)
  }

  useEffect(() =>{
    usersListLoad();
  },[])


  const userDelete = (e) =>{
    setDeleteId(e.currentTarget.id)
    setshowConfirmation(true)
    
  }

  

  const handleConfirm = async () =>{
    await axios.delete(`http://localhost:3008/userList/${deleteId}`)
    usersListLoad();
    setshowConfirmation(false)
  }

  const handleConfirmationClose =() =>{
    setshowConfirmation(false)
  }
 
  return (
    <>
      <div className="heading">
        <h1>Curd With Modal</h1>
      </div>
      <div className="container mt-4">

        {/* user model  */}

        <UserModal 
        show={show} 
        handleClose={handleClose} 
        userData={user}
        successSubmit={successSubmit}
        />

        <Button variant="outline-primary" onClick={handleShow}>
          Add User
        </Button>

        <table className="table table-hover mt-4">
          <thead className="thead-dark ">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((item, i) => (
              <UserListing
                item={item}
                i={i}
                key={item.id}
                handleEdit={handleEdit}
                deleteUser={userDelete}
              />
            ))}
            
          </tbody>
        </table>
        <AlartBox
        show={showConfirmation}
        handleClose={handleConfirmationClose}
        handleConfirm={handleConfirm}
        />
      </div>
    </>
  );
};

export default Curd;
