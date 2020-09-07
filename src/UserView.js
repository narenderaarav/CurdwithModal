import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const UserView = () =>{
  const { id } = useParams();
  const[userDetails, setUserDetails] = useState({
    name:"",
    username: "",
    mobile: "",
    email: "",
    description: ""
    })

    useEffect(() =>{
      userDetailsShow()
    },[])

  const userDetailsShow = async () =>{
    let result = await axios.get(`http://localhost:3008/userList/${id}`)
    setUserDetails(result.data)
    console.log(result)
  }


  return(
    <ul>
    <li>{userDetails.name}</li>
    <li>{userDetails.username}</li>
    <li>{userDetails.mobile}</li>
    <li>{userDetails.email}</li>
    <li>{userDetails.description}</li>
  </ul>
  )
}

export default UserView;