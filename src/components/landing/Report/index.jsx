import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, ReportWrapper, Details, Thumbnail } from './styles';

export const Report = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <ReportWrapper as={Container}>
        <Thumbnail>
          <img src="" alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </ReportWrapper>
    </Wrapper>
  );
};
