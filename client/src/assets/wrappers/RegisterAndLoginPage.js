import styled from 'styled-components';

const Wrapper = styled.section`
   min-height: 100vh;
   display: grid;
   align-items: center;
   .logo {
      display: block;
      margin: 0 auto;
      margin-bottom: 1.4rem;
   }
   .form {
      max-width: 400px;
      border-top: 5px solid var(--primary-500)
   }
   h4 {
      text-align: center;
      font-weight: bold;
      margin-bottom: 1.4rem;
   }
   p{
      margin-top: 1rem;
      text-align: center;
      line-height: 1.5;
      display: inline-block;
   }
   .btn{ 
      margin-top: 1rem;
   }
   .member-btn {
      color: var(--primary-500);
      letter-spacing: var(--letter-spacing);
      margin-left: 0.4rem;
      font-weight: 500;
   }
`;
export default Wrapper;
