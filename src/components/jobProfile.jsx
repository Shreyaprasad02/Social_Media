import Navbar from './jobs/navbar';
import Job from './jobs/jobDiv'; 
import Search from './jobs/searchDiv';
// import Value from './jobs/valuediv';
import '../components/jobProfile.css';
import Header from './Header/Header';



 
const JobProfile=()=>{

    return(
        <>
    <Header/>
  <div className="job-div pt-20">
    <Navbar/>
    <Search/>
    
</div>
<div>
    <Job/>
</div>

        </>
    )
}
export default JobProfile;