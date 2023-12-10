import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });


export const uploadImage = (data) => API.post("/upload/images/image", data);
export const uploadVideo = (data) => API.post("/upload/images/video", data);
export const uploadPost = (data) => API.post("/posts/upload", data);