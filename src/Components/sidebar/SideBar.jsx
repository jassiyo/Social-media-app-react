import './sidebar.css'
import { RssFeed,
   PlayCircleFilledOutlined,
   Group,
   Bookmark,
   HelpOutline,
   WorkOutline,
   Event,
   School

 } from "@mui/icons-material"
const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideWrapper">
        <ul className='sideBarlist'>
          <li className='sideBarListItem'>
            <RssFeed className='sideBarIcon' />
            <span className='sideBarListItemText'>Feed</span>
          </li>
          <li className='sideBarListItem'>
            <PlayCircleFilledOutlined className='sideBarIcon' />
            <span className='sideBarListItemText'>Video</span>
          </li>
          <li className='sideBarListItem'>
            <Group className='sideBarIcon' />
            <span className='sideBarListItemText'>Group</span>
          </li>
          <li className='sideBarListItem'>
            <Bookmark className='sideBarIcon' />
            <span className='sideBarListItemText'>Bookmark</span>
          </li>
          <li className='sideBarListItem'>
            <HelpOutline className='sideBarIcon' />
            <span className='sideBarListItemText'>Questions</span>
          </li>
          <li className='sideBarListItem'>
            <WorkOutline className='sideBarIcon' />
            <span className='sideBarListItemText'>Jobs</span>
          </li>
          <li className='sideBarListItem'>
            <Event className='sideBarIcon' />
            <span className='sideBarListItemText'>Events</span>
          </li>
          <li className='sideBarListItem'>
            <School className='sideBarIcon' />
            <span className='sideBarListItemText'>Courses</span>
          </li>
        </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr' />
          <ul className='sidebarFriendList'>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
            <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''/>
              <span className='sidebarFriendName'>jaskirat singh</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default SideBar
