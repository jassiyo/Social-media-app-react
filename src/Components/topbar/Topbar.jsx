import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className='topbarContainer'>

      <div className='topbarLeft'> 
        <span className='logo'>SocialMedia</span>
      </div>
      
      <div className='topbarCenter'>
        <div className='searchBar'>
           <SearchIcon className='searchIcon'/> 
           <input placeholder='Search for Friend, post or video' className='searchInput'></input>
        </div>
       </div>

      <div className='topbarRight'> 
        <div className='tobbarLinks'>
          <span className='tobbarLink'>Home</span>
          <span className='tobbarLink'>Timeline</span>
          </div>

          <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>2</span>
          </div>
          </div>
          <img src='/assets/person/1.jpeg' alt='' className='topbarImg'/>
      </div>
      
    </div>
  )
}

export default Topbar
