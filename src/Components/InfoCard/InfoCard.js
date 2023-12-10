import React, { useEffect, useState } from "react";
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest.js";
import { logOut } from "../../actions/AuthAction";

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false)
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user,profileUserId]);//updated from user to user,profileUserId

  const handleLogOut = ()=> {
    dispatch(logOut())
  }

  return (
    <div className='InfoCard'>
      <div className='infoHead'>
        <h4>Profile Info</h4>
        {user._id === profileUserId? (        
        <div>
        <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data = {user}
          />
        </div>): ("")}

      </div>
      
      <div className="info">
        <span>
          <b>About </b>
        </span>
        <span>{profileUser.about}</span>
      </div>

      <div className="info">
        <span>
          <b>Branch </b>
        </span>
        <span>{profileUser.branch}</span>
      </div>
      <div className="info">
        <span>
          <b>Batch </b>
        </span>
        <span>{profileUser.batch}</span>
      </div>

      <div className="info">
        <span>
          <b>Location </b>
        </span>
        <span>{profileUser.location}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      {/* <div className="info">
        <span>
          <b>Role </b>
        </span>
        <span>{profileUser.role}</span>
      </div> */}

      <button className="button logout-button" onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard
