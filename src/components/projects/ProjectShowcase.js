import React from "react";
import { StyledHR } from "../../utils/reuseableStyles";
import styled from 'styled-components';
import ShowcaseCard from './ShowcaseCard';

const StyledProjectsContainer = styled.section`
text-align: center;
`

const ProjectShowcase = () => {
    return (
  <StyledProjectsContainer>
      <h2>Projects</h2>
      <StyledHR />
     <ShowcaseCard />
        

  </StyledProjectsContainer>
  )
};

export default ProjectShowcase;

