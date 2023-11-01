import styled from 'styled-components';

const Wrapper = styled.div`
   position: relative;
   .logout-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap:  0.5rem;
   }
   .img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
   }
   .dropdown {
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      box-shadow: var(--shadow-2);
      text-align: center;
      visibility: hidden;
      border-radius: var(--border-radius);
      background: var(--primary-500)
   }
   .show-dropdown {
      visibility: visible;
   }
   .dropdown-btn {
      border-radius:var(--border-radius);
      padding: 0.5rem;
      background: transparent;
      border: transparent;
      color: var(--white);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
      cursor: pointer;
      width: 100%;
      height: 100%;
   }
   .dropdown:hover {
      background-color: var(--primary-700);
      transition: 0.3s ease-in-out;
   }
`;

export default Wrapper;
