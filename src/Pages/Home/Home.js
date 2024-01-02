import React from 'react'
import './Home.css'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import PostSide from '../../Components/PostSide/PostSide'
import FollowersCard from '../../Components/FollowersCard/Followerscard'

const Home = () => {
  return (
    <div className="Home">
      <ProfileCard/>
      <PostSide/>
      <FollowersCard/>
    </div>
  )
}

export default Home
