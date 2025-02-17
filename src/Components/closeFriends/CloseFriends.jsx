import React from 'react'
import './CloseFriends.css'
import {user} from '../DummyData'

const CloseFriends = ({user}) => {
  return (
    <li className='sidebarFriend'>
    <img className='sidebarFriendImg' src={user.profilePicture} alt=''/>
    <span className='sidebarFriendName'>{user.username}</span>
  </li>  
  )
}

export default CloseFriends