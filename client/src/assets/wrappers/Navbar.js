import styled from 'styled-components';

const Wrapper = styled.nav`
   height: var(--nav-height);
   display: flex;
   align-items: center;
   justify-content: center;
   box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
   background:var(--background-secondary-color);
   .nav-center{
      display: flex;
      width: 90vw;
      align-items: center; 
      justify-content: space-between;
   }
   .toggle-btn{
      background: none;
      border: none;
      font-size: 1.75rem;
      color: var(--primary-500);
      cursor: pointer;
      display: flex;
   }
   .logo-text{
      display: none;
      font-weight: 500;
   }
   .logo{
      display: flex;
      align-items: center;
   }
   .btn-container{
      display: flex;
      align-items: center;
      font-weight: 500;
   }
   @media (min-width: 992px){
      position: sticky;
      top: 0;
      .nav-center{
      width:90%
      }
      .logo{
      display: none;
      }
       .logo-text{
      display: block;
      }
   }
   
`;
export default Wrapper;
