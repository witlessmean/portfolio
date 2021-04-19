import styled from "styled-components";

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    margin: 1vw 1vw 1vw 1vw;
    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.1) ;
         }
    a{
      color: white;
      text-decoration: none;
    }
  }
`;

const NavLinks = () => {
 
  return (
    <StyledLinksContainer>
      <h3>
        <a
          href="https://github.com/witlessmean"
          aria-label="My resume link for download"
          target="_blank" rel="noopener noreferrer"
        >
          Resume
        </a>
      </h3>
      <h3>
        <a
          href="https://github.com/witlessmean"
          aria-label="Links to my blog containing coding videos"
          target="_blank" rel="noopener noreferrer"
        >
          Blog
        </a>
      </h3>
      <h3>
        <a
          href="https://github.com/witlessmean"
          aria-label="Links to my github profile page"
          target="_blank" rel="noopener noreferrer"
        >
          Github
        </a>
      </h3>
    </StyledLinksContainer>
  );
};

export default NavLinks;
