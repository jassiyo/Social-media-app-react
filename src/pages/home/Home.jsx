import RightBar from "../../Components/rightbar/RightBar"
import SideBar from "../../Components/sidebar/SideBar"
import Topbar from "../../Components/topbar/Topbar"
import Feed from "../../Components/feed/Feed"
import './home.css'

function Home() {
  return (
    <>
        <Topbar/>
          
        <div className="homeContainer">
        <SideBar/>
        <Feed />
        <RightBar/>
        </div>
       </>
  )
}

export default Home
