import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Logo } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Brand as={Link} to="/">
      <Logo>
        <img src="favicon/favicon-512.png" alt="asd" width="30px" />
      </Logo>
      봉맵
    </Brand>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
