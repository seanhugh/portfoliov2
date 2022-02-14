import './App.css';
import styled from 'styled-components';
import logo from './logo.svg';

import {AiFillLinkedin} from "react-icons/ai"; 
import Opensea from "./img/opensea.svg"; 

// Components
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-top: 200px;
`;

const ProfImage = styled.img`
  width: 190px;
  height: 190px;
  background: red;
`;

// Containers

const Row = styled.div`
  display: flex;
`;
const NavBar = styled(Row)`
  align-items: center;
  margin-bottom: 50px;
`;

const SideBarContainer = styled.div`
  display: flex;
  margin-left: auto;
`

// Text
const Title = styled.div`
  font-size: 1em;
  padding-bottom: 10px;
  font-weight: 700;
`;

const Body = styled.div`
  font-size: 1em;
  padding-bottom: 6px;
  font-weight: 300;
`;
const BodyEm = styled.em`
  font-weight: 700;
  font-style: initial;
`;
const PageTitle = styled.div`
  font-size: 1.5em;
  font-weight: 300;
`;

const LogoImg = styled.img`
  width: 92px;
  flex-shrink: 0;
`;

const Link = styled.a`
  color: #E16262;
`;
const LinkTab = styled(Link).attrs(props => ({
  target: "_blank" 
}))`
`;
const SidebarLink = styled.a`
    color: #463A4A;
    font-weight: 300;
    padding-left: 10px;
  font-size: 1em;
  text-decoration: none;
  &:hover {
    color: #E16262;
  }
  & svg {
    font-size: 29px;
  }
`;

const SideBarLinkImg = styled.img`
    background: #463A4A;
    width: 23px;
    border-radius: 2px;
    margin-top: 3px;
    &:hover {
      background: #E16262;
    }
`

// HorSpace
const HorSpace = styled.div`
  width: ${props => props.size};
  flex-shrink: 0;
`;

function App() {
  return (
    <Container>
      {/*. Image */}
      <NavBar>
        <LogoImg src={logo}/>
        <HorSpace size="20px"/>
        <PageTitle>Sean Hughes</PageTitle>
        <SideBarContainer>
          <SidebarLink href="https://opensea.io/seanxeth"><SideBarLinkImg src={Opensea}/></SidebarLink>
          <SidebarLink href="https://www.linkedin.com/in/seanhugh/"><AiFillLinkedin/></SidebarLink>
        </SideBarContainer>
      </NavBar>
      <Title>A bit about me...</Title>
      <Row>
{/*        <ProfImage/>
        <HorSpace size="40px"/>*/}
        <div>
          <Body>I lead product management for delivery offline batching & advanced matching @ <BodyEm>Uber</BodyEm>, in the <LinkTab href="https://www.wsj.com/articles/for-doordash-and-uber-eats-the-future-is-everything-in-about-an-hour-11622453401">frontier of the delivery space</LinkTab>. My favorite spaces to dig into at Uber are where <LinkTab href="https://www.bloomberg.com/news/articles/2021-04-22/uber-lyft-pay-big-incentives-to-get-drivers-back-on-the-road-after-covid">human behavior and marketplace economics meet</LinkTab>.</Body>
          <Body>Before Uber, I graduated from <BodyEm>Harvard</BodyEm> where I studied computer science and captained the men's varsity <BodyEm>squash</BodyEm> team to <LinkTab href="https://gocrimson.com/sports/mens-squash/roster/sean-hughes/6640">2 national championships</LinkTab>. Previously, I was a 3x US national junior squash champion.</Body>
          <Body>I'm currently living with a friends in San Francisco. Send me an email at seanhughes610@gmail.com if you'd like to discuss Uber, <BodyEm>Crypto</BodyEm>, or catch up.</Body>
          <Body style={{"margin-top": "10px"}}>- Sean (2021)</Body>
        </div>
      </Row>
{/*led work on incentives for drivers, core rider experiences, and matching drivers with packages for new bets in delivery as a service and grocery*/}
      {/*. Body Text */}
      <div>
      </div>
    </Container>
  );
}

export default App;
