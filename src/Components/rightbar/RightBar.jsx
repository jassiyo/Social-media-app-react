import './rightbar.css'

const friends = [
  { id: 1, name: 'vipul rajput', online: true },
  { id: 2, name: 'john doe', online: false },
  { id: 4, name: 'jane smith', online: true },
  { id: 5, name: 'vipul smith', online: true },
  { id: 6, name: 'jane smith', online: true },
  { id: 7, name: 'vipul smith', online: true },
  { id: 8, name: 'jane smith',online: true },
];

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='rightBarWrapper'>
        <div className='birthdatContainer'>
              <img className='birthdayImg' src="assets/gift.png" alt=''/>
              <span className='birthdayText'><b>Vikash have</b> and <b>3 other friends</b> have their birday today</span>
        </div>
        <img className='rightBarAd' src='assets/ad.png' alt=''/>
        <h4 className='rightBarTitle'> Online Friend</h4>
        <ul className='rightBarFriendList'>
          {friends.map(friend=> 
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightBarProfileImg' src='assets/person/3.jpeg' alt=''/>
              <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>{friend.name}</span>
          </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default RightBar
