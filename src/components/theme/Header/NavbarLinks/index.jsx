import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#map">지도</AnchorLink>
    <AnchorLink href="#report">제보</AnchorLink>
    <AnchorLink href="#how-to-use">이용 방법</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
