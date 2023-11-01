import Wrapper from "../assets/wrappers/JobInfo"
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
const JobInfo = ({ icon, text }) => {
   return (
      <Wrapper>
         <span className='job-icon'>{icon}</span>
         <span className='job-icon'>{text}</span>
      </Wrapper>
   )
}

export default JobInfo