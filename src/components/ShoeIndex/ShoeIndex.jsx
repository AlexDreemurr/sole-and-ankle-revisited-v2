import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";
import { QUERIES } from "../../constants";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <DesktopWrapper>
        <MainColumn>
          <Header>
            <Title>Running</Title>
            <SelectWrapper
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </SelectWrapper>
          </Header>
          <Spacer size={32} />
          <ShoeGridWrapper />
        </MainColumn>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Spacer size={42} />
          <ShoeSidebar />
        </LeftColumn>
      </DesktopWrapper>

      <TabletWrapper>
        <Header>
          <MobileTitle>
            <Breadcrumbs>
              <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
              <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
            </Breadcrumbs>
            <Title>Running</Title>
          </MobileTitle>

          <SelectWrapper
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGridWrapper />
      </TabletWrapper>
    </>
  );
};

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;
const TabletWrapper = styled.div`
  display: none;
  @media ${QUERIES.tabletAndBelow} {
    display: revert;
  }
`;
const ShoeGridWrapper = styled(ShoeGrid)``;
const SelectWrapper = styled(Select)`
  @media ${QUERIES.phoneAndBelow} {
    display: none;
  }
`;
const LeftColumn = styled.div`
  flex-basis: 248px;
  /* @media ${QUERIES.tabletAndBelow} {
    margin-top: -10px;
  } */
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndBelow} {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;
const DesktopTitle = styled(Title)`
  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;
const MobileTitle = styled.div``;

export default ShoeIndex;
