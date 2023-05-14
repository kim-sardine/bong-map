import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#map">지도</AnchorLink>
    <AnchorLink href="#report">제보하기</AnchorLink>
    <a href="https://sidepunch.co" target="_blank" rel="noopener noreferrer">
      SidePunch
    </a>
  </Wrapper>
);

export default NavbarLinks;
