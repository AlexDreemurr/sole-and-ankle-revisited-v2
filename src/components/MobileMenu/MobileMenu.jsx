import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import * as Dialog from "@radix-ui/react-dialog";
import { COLORS } from "../../constants";

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Trigger>
        <Icon id="menu" />
        <VisuallyHidden>open menu</VisuallyHidden>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title />
          <Dialog.Description />

          <Wrapper>
            <Side />
            <NavWrapper>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </NavWrapper>
            <Side>
              <FooterWrapper>
                <FooterLink href="/terms">Terms and Conditions</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </FooterWrapper>
            </Side>
          </Wrapper>

          <Dialog.Close asChild>
            <DismissButton>
              <Icon id="close" size={24} />
            </DismissButton>
          </Dialog.Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Trigger = styled(Dialog.Trigger)`
  background-color: transparent;
  color: black;
  border: none;
  padding: 0;
  cursor: pointer;
`;
const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background-color: ${COLORS.gray[700]};
  opacity: 0.8;
`;
const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 375px;
  background-color: ${COLORS.white};
`;

const Side = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 32px;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: absolute;
  bottom: 32px;
`;
const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: calc(14rem / 16);
  text-decoration: none;
  line-height: 100%;
`;
const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: calc(18rem / 16);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 100%;
`;
const DismissButton = styled.button`
  position: absolute;
  top: 26px;
  right: 16px;

  background-color: transparent;
  color: black;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export default MobileMenu;
