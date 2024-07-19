import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css';
import {Users} from '../DummyData'

const Post = ({post}) => {
  return (

    <div className='post'> 
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
          
          <img className="postProfileImg" src='/assets/person/1.jpeg' alt=''/>
            <span className='postUsername'> {Users.filter((u)=>u.id===post.userId)[0].username} </span>
            <span className='postDate'>{post.date}</span>
            
            </div>  
            <div className='postTopRight'>
            <MoreVertIcon />
            </div>  
        </div>  
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className="postImg" src={post.photo}/>
        </div>
        <div className='postBottom'>
            <div className='postBottomLeft'>
              <img className='likeIcon' src="assets/like.png" alt=''/>
              <img className='likeIcon' src="assets/heart.png" alt=''/>
              <span className='postLikeCounter'>32 people like it</span>
            </div>
            <div className='postBottomRight'>
              <span className='postCommentText'>9 comments</span>
            </div>
        </div>
        <div className='postBottom'></div>
      </div>
    </div>
    
  )
}

export default Post
