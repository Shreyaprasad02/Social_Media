import React from 'react'
import './Profile.css'
import InfoCard from '../../Components/InfoCard/InfoCard'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSide from '../../Components/PostSide/PostSide'
import FollowersCard from '../../Components/FollowersCard/Followerscard'

const Profile = () => {
  return (
    <div className='Profile'>
      <InfoCard/>

      <div className="Profile-center">
        <ProfileCard location = "profilePage"/>
        <PostSide/>
        </div>

        <FollowersCard/>


    </div>
  )
}

export default Profile
