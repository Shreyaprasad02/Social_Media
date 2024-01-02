import React from "react";
import { useForm } from "react-hook-form";
import '../components/createPost.css';


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };  

  return (
    <div className="main-div">
    <div className="main">
    <h1>Create your own post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className = "form-data">
      <label>Title</label>
        <input type ="text" name ="title" placeholder=" Enter the Title"/>
        </div>
        <div className = "formdata1">
        <div className="data1">
      <label>Position applied for</label>
        {/* <input type ="text" name ="Campany"/> */}
        <select name="posttype" id="post">
        <option value="">Position applied for</option>
    <option value="">SDE</option>
    <option value="">Android</option>
    <option value="">Software Testing</option>
    <option value=""> Associate Software Engineer</option>
    <option value="">Other</option>
    </select>
    </div>
    

    <div className="data2">
        <label>Company :</label>
       
        <select name="campany" id="campany">
        <option value="">Company</option>
    <option value="">Accenture</option>
    <option value="">Persistent</option>
    <option value="">Bosch</option>
    <option value="">TCS</option>
    <option value="">Other</option>
  </select>
  </div>
        </div> 

        <div className = "formdata2">
        <div className="data3">
      <label>Industry</label>
       
        <select name="campany" id="campany">
        <option value="">   Industry  </option>
    <option value="">Robotics</option>
    <option value="">Cloud Computing</option>
    <option value="">Data Analytics</option>
    <option value="">Cybersecurity</option>
    <option value="">Aerospace</option>
    <option value="">Artificial Intelligence</option>
    </select>
    </div>

  

    <div className="data4">
       
      <label>Post Type</label> 
    <select name="posttype" id="post">
    <option value="">post type</option>
    <option value="">Interview experience</option>
    <option value="">Discussion</option>
    <option value="">Doubts</option>
    <option value="">Other</option>
  </select>
        </div>
       
        </div>
        <textarea placeholder=" share your Experience"></textarea>
        
        </form>
         
          <button className="btn">Post</button>
   
        
    
    </div>
    </div>
  );
}