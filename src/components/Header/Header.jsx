import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import { QUERIES } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeader>
        <Logo />
        <Side />
        <ShoppingBagButton>
          <Icon id="shopping-bag" />
          <VisuallyHidden>open shopping cart</VisuallyHidden>
        </ShoppingBagButton>
        <UnstyledButton>
          <Icon id="search" />
          <VisuallyHidden>search</VisuallyHidden>
        </UnstyledButton>
        <MobileMenu />
      </MobileHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  overflow: auto;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    height: 72px;
    display: flex;
    gap: 32px;
    align-items: center;
    padding: 0 32px;
    border-top: 4px ${COLORS.gray[900]} solid;
    border-bottom: 1px ${COLORS.gray[300]} solid;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
    padding: 0 16px;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: clamp(2rem, 9.6vw - 3.75rem, 4rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

// const MenuWrapper = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// `;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;
export default Header;
