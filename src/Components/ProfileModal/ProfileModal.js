import { Modal, useMantineTheme } from "@mantine/core";
import './ProfileModal.css'
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/userAction";

function ProfileModal({ modalOpened, setModalOpened, data }) {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const dispatch = useDispatch();
    const param = useParams();
    // const { user } = useSelector((state) => state.authReducer.authData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage"
                ? setProfileImage(img)
                : setCoverImage(img);
        }
    };

      // form submission
    const handleSubmit = async(e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      try {
        const imageUrl= await dispatch(uploadImage(data));
        UserData.profilePicture = await imageUrl
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      try {
        const imageUrl= await dispatch(uploadImage(data));
      UserData.coverPicture = await imageUrl
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="45%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className="infoForm" style={{ padding: "5px" }}>
                <h1>Your info</h1>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="firstname"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={formData.firstname}
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="lastname"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={formData.lastname}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="headline"
                        placeholder="Headline"
                        onChange={handleChange}
                        value={formData.headline}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="branch"
                        placeholder="Branch"
                        onChange={handleChange}
                        value={formData.branch}
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="batch"
                        placeholder="Batch"
                        onChange={handleChange}
                        value={formData.batch}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="about"
                        placeholder="About"
                        onChange={handleChange}
                        value={formData.about}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="location"
                        placeholder="Location"
                        onChange={handleChange}
                        value={formData.location}
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="worksAt"
                        placeholder="Works at"
                        onChange={handleChange}
                        value={formData.worksAt}
                    />
                </div>

                {/* <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}
                    />
                </div> */}


                <div>
                    Profile Image
                    <input type="file" name='profileImage' onChange={onImageChange} />
                    Cover Image
                    <input type="file" name="coverImage" onChange={onImageChange} />
                </div>


                <button className="button infoButton" onClick = {handleSubmit} type="submit">Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal;