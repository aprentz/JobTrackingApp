import styled from 'styled-components';

const Wrapper = styled.button`
   border: transparent;
   background: transparent;
   width: 3.5rem;
   height: 2rem;
   display: grid;
   place-items: center;
   .toggle-icon{
      font-size: 1.15rem;
      color: var(--text-color);
   }
   cursor: pointer;
`;
export default Wrapper;
