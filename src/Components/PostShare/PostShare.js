import React, { useState, useRef } from "react";
import './PostShare.css'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from 'react-player';
import { uploadImage, uploadPost, uploadVideo } from "../../actions/uploadAction";
import defaultProfile from '../../img/defaultProfile.png'

function PostShare() {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    // const [downloadURL,setDownloadURL] = useState('');
    const loading = useSelector((state) => state.postReducer.uploading);
    const imageRef = useRef();
    const videoRef = useRef();
    const desc = useRef();
    const {user} = useSelector((state)=>state.authReducer.authData)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage((img));
        }
    };

    const onVideoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let vid = event.target.files[0];
          setVideo(vid);
        }
      };

    const reset = () => {
        setImage(null);
        setVideo(null);
        desc.current.value = "";
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        

        if (image) {
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file", image);
            // newPost.image = filename;
            try {
             const Image = await dispatch(uploadImage(data));
              newPost.image= await Image;
              
            } catch (error) {
              console.log(error);
            }
        }  

        if (video) {
            const videoData = new FormData();
            const filename = Date.now() + video.name;
            videoData.append("name", filename);
            videoData.append("file", video);
            // newPost.video = filename;
            const Video = await dispatch(uploadVideo(videoData));
            newPost.video = await Video;
          }
          dispatch(uploadPost(newPost));
          reset(); 
    }

    return (
        <div className="PostShare">
            <img src={user.profilePicture?user.profilePicture:defaultProfile} alt="" />
            <div>
                <input
                ref = {desc}
                required
                type='text' placeholder="What's Happening?" />
                <div className='PostOptions'>
                    <div className='option'>
                        <PhotoIcon style={{ color: '#70b5f9' }}
                            onClick={() => imageRef.current.click()} />
                        <span>Photo</span>
                    </div>

                    <div className='option'>
                        <YouTubeIcon style={{ color: '#7fc15e' }}
                            onClick={() => videoRef.current.click()} />
                        <span>Video</span>
                    </div>

                    <div className='option'>
                        <TodayIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>

                    <button className='button ps-button' onClick={handleSubmit} disabled={loading}>
                    {loading ? "uploading..." : "Share"}
                    </button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />

                        <input
                            type="file"
                            name="myVideo"
                            ref={videoRef}
                            onChange={onVideoChange}
                        />
                    </div>
                </div>
                {image && (

                    <div className="previewImage">
                        <CloseIcon onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}

                {video && (
                    <div className="previewVideo">
                        <CloseIcon onClick={() => setVideo(null)} />
                        <ReactPlayer url={URL.createObjectURL(video)} width="100%" height="100%" controls />
                    </div>
                )}
            </div>
        </div>

    )
}

export default PostShare