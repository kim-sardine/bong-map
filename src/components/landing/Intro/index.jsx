import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
        </Details>
        <iframe
          title="bongmap"
          src="https://www.google.com/maps/d/u/2/embed?mid=11kYLp9pIoh-RV3Rj8sIyrT_vmZmqmim-"
          width="100%"
          height="500px"
          style={{ border: 'none' }}
        ></iframe>
      </IntroWrapper>
    </Wrapper>
  );
};
