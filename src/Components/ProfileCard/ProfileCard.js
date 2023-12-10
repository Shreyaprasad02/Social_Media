import React from 'react'
import './ProfileCard.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import defaultCover from '../../img/defaultCover.jpg'
import defaultProfile from '../../img/defaultProfile.png'

const ProfileCard = ({location}) => {
  const {user} = useSelector((state)=> state.authReducer.authData)
  const posts = useSelector((state)=> state.postReducer.posts)
  console.log(user);
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={user.coverPicture?user.coverPicture: defaultCover} alt="" />
        <img src={user.profilePicture?user.profilePicture:defaultProfile} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.headline? user.headline: "Write about yourself"}</span>
      </div>

      <div className="followStatus">
      <hr />
      <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
        <div className="vl"></div>
        <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>  

          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId=== user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr/>
      </div>

      {location === 'profilePage' ? "" : <button className='button profile__button'>
        <Link style={{textDecoration: "none", color: "inherit"}} to ={`/profile/${user._id}`}>
        Profile
        </Link>
        </button>}
    </div>
  )
}

export default ProfileCard
