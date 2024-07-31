import React from "react";
import './online.css';

const Online = ({user}) =>{
    return(
            <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightBarProfileImg' src={user.profilePicture} alt=''/>
              <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>{user.username}</span>
          </li>    
          )
}

export default Online

