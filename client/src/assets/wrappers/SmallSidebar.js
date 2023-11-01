import styled from 'styled-components';

const Wrapper = styled.aside`
    @media (min-width: 992px) {
      display: none;
   }
      .sidebar-container{
         position: fixed;
         inset: 0;
         background:rgba(0,0,0, 0.7);
         display: flex;
         justify-content: center;
         align-items: center;
         z-index: -1;
         opacity: 0;
         transition: var(--transition);
         visibility: hidden;
      }
      .show-sidebar{
         z-index: 99;
         opacity: 100;
         visibility: visible;
      }

      .content{
         background: var(--background-secondary-color);
         width: var(--fluid-width);
         height: 95vh;
         border-radius: var(--border-radius);
         padding: 4rem 2rem;
         position: relative;
         display: flex;
         flex-direction: column;
         align-items: center;
      }
      .close-btn {
         position: absolute;
         top: 10px;
         left: 10px;
         border: none;
         background: none;
         font-size: 2rem;
         color: var(--red-dark);
         cursor: pointer;
      }
      .nav-links{
         padding-top: 2rem;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: left;
      }
      .nav-link{
         display: flex;
         align-items: center;
         color: var(--text-secondary-color);
         font-weight: 500;
         text-transform: capitalize;
         transition: var(--transition);
         margin: 1em;
         font-size: 1rem;
      }
      .nav-link:hover{
         color: var(--primary-500);
      }
      .icon{
         margin-right: 1rem;
         font-weight: 700;
         font-size: 1.5rem;
      }
      .active{
         color: var(--primary-500)
      }
`;
export default Wrapper;
