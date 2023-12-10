import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log(data.get("file"));
    console.log("In upload");
    const image = await UploadApi.uploadImage(data);//added image
    console.log(image.data.downloadURL);
    return await image.data.downloadURL;
  } catch (error) {
    console.log(error);
  }
};

export const uploadVideo = (data) => async (dispatch) => {
  try {
    console.log(data.get("file"));
   const video = await UploadApi.uploadImage( data);
   return await video.data.downloadURL;
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost =await UploadApi.uploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};