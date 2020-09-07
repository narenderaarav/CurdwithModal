import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserListing = ({ item, i, handleEdit, deleteUser }) => {
const { name, username, mobile, email, description, id} = item;

const editUser = (e) => {
  console.log("edituser", item)
  e.preventDefault();
  handleEdit(item)

}

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{mobile}</td>
      <td>{email}</td>
      <td>{description}</td>
      <td>
      <Link type="button" className="btn btn-outline-success" to={`/userView/${id}`}>
          <FontAwesomeIcon
              title="View"
              icon={faEye}
            />
      </Link>

      <button type="button" className="btn btn-outline-warning ml-2"
          id={id}
          onClick={editUser}
          >
        <FontAwesomeIcon
          title="Edit"
          icon={faEdit}
        />
        </button>
        <button 
          type="button" 
          title="Delete"
          id={id}
          onClick={deleteUser}
          className="btn btn-outline-danger ml-2"
          >

          <FontAwesomeIcon
            title="Delete" 
            icon={faTrash}     
          />
         </button>
      </td>
    </tr>
  );
};

export default UserListing;
