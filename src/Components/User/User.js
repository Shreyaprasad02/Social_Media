import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/userAction'
import defaultProfile from '../../img/defaultProfile.png'
// import img2 from '../../img/img2.png'

const User = ({person}) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id))
    const dispatch = useDispatch()
    const handleFollow = ()=>{
        following? 
        dispatch(unfollowUser(person._id, user)):
        dispatch(followUser(person._id, user))

        setFollowing((prev)=>!prev)
    }
    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture?person.profilePicture:defaultProfile} alt="" className='followerImage' />
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className={following? 'button fc-button UnfollowButton':"button fc-button"} onClick={handleFollow}>
                {following? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default User
