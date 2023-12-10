import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserRequest'
import FollowersModal from '../FollowersModal/FollowersModal'

const FollowersCard = ({location}) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [persons, setPersons] = useState([]);
    const { user } = useSelector((state) => state.authReducer.authData);


    useEffect(() => {
    const fetchPersons = async()=>{
        const {data} = await getAllUser();
        setPersons(data)
    };
    fetchPersons()
},[]);
    return (
        <div className="FollowersCard">
            <h3>Suggestions for you</h3>

            {persons
                .filter((person) => person._id !== user._id)
                .map((filteredPerson, id) => (
                    <User person={filteredPerson} key={id} />
                ))}

            {!location ? (
                <span onClick={() => setModalOpened(true)}>Show more</span>
            ) : (
                ""
            )}

            <FollowersModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </div>
    )
}

export default FollowersCard