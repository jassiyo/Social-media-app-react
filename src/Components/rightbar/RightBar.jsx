import Online from '../Online/Online';
import './rightbar.css'
import {Users} from '../DummyData'

const RightBar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <>
      <div className='birthdatContainer'>
              <img className='birthdayImg' src="assets/gift.png" alt=''/>
              <span className='birthdayText'><b>Vikash have</b> and <b>3 other friends</b> have their birday today</span>
        </div>
        <img className='rightBarAd' src='assets/ad.png' alt=''/>
        <h4 className='rightBarTitle'> Online Friend</h4>
        <ul className='rightBarFriendList'>
          {Users.map(u=> 
            <Online key={u.id} user={u} />
          )}
        </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <h1 className='rightBarTitle'>User information</h1>
      <div className='rightBarInfor'>
        <div className='rightBarinfoItem'> 
          <span className='rightBarInfoKey'>City:</span>
          <span className='rightBarInfoKey'>New York</span>
        </div>
        <div className='rightBarinfoItem'> 
          <span className='rightBarInfoKey'>From:</span>
          <span className='rightBarInfoKey'>India</span>
        </div>
        <div className='rightBarinfoItem'> 
          <span className='rightBarInfoKey'>Ralationship:</span>
          <span className='rightBarInfoKey'>Single</span>
        </div>
      
      </div>
      <h1 className='rightBarTitle'>User friends</h1>
      <div className='rightBarFollowings'>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/1.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/2.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/3.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/4.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/5.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
        <div className='rightBarFollowing'>
          <img className='rightBarFollowingImg' src='assets/person/6.jpeg' alt=''/>
          <span className='rightBarFollowingName'>john carter</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className='rightBar'>
      <div className='rightBarWrapper'></div>
      {profile ? <ProfileRightBar /> : <HomeRightBar />  }
    </div>
  )
}

export default RightBar
