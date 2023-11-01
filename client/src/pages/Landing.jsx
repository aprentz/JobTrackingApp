import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage.js"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom"
import { Logo } from "../components"


const Landing = () => {
   return (
      <Wrapper>
         <nav>
            <Logo />
         </nav>
         <div className="container page">
            <div className="info">

               <h1>Job <span>Tracking </span>App</h1>
               <p>I'm baby organic four dollar toast mlkshk, snackwave jianbing slow-carb iPhone before they sold out lomo. Normcore dreamcatcher wayfarers, pabst fingerstache palo santo blackbird spyplane disrupt air plant narwhal</p>
               <Link to="/register" className="btn register-link">
                  Register
               </Link>
               <Link to="/login" className="btn">
                  Login / Demo User
               </Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
         </div>
      </Wrapper >
   )
}

export default Landing