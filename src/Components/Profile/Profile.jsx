import React from 'react'
import RightBar from "../rightbar/RightBar"
import SideBar from "../sidebar/SideBar"
import Topbar from "../topbar/Topbar"
import Feed from "../feed/Feed"
import './Profile.css'

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img className='profileCoverImg' src='assets/post/3.jpeg' alt='' />
                            <img className='profileUserImg' src='assets/person/3.jpeg' alt='' />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>safak Sachdeva</h4>
                            <span className='profileInfoDesc'>Hello my friends </span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile