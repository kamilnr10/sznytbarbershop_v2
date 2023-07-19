import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { LockScreen } from "../../atoms/LockScreen/LockScreen";
import { debounce } from "../../../helpers/debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  NavigationWrapper,
  ImgWrapper,
  Image,
  MenuToggle,
  HamBox,
  LineTop,
  LineBottom,
  NavOverlay,
  NavMenu,
} from "./Navigation.styles";
import styled from "styled-components";

const IconsContainer = styled.div`
  margin: 0 0 80px;
`;

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 90);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <NavigationWrapper visible={visible}>
      <ImgWrapper>
        <Link to="/">
          <Image src={logo} alt="" />
        </Link>
      </ImgWrapper>
      <MenuToggle onClick={() => setNavOpen(!navOpen)}>
        <HamBox navOpen={navOpen}>
          <LineTop navOpen={navOpen}></LineTop>
          <LineBottom navOpen={navOpen}></LineBottom>
        </HamBox>
      </MenuToggle>
      <NavOverlay navOpen={navOpen}>
        <NavMenu>
          <ul>
            <li>
              <span>01</span>
              <Link to="/team" onClick={() => setNavOpen(false)}>
                Team
              </Link>
            </li>
            <li>
              <span>02</span>
              <a href="#gallery" onClick={() => setNavOpen(false)}>
                Gallery
              </a>
            </li>
            <li>
              <span>03</span>
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <span>04</span>
              <a href="#findus" onClick={() => setNavOpen(false)}>
                Find Us
              </a>
            </li>
          </ul>
          <IconsContainer>
            <a
              href="https://www.instagram.com/sznytbarbershop/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <a
              href="https://www.facebook.com/profile.php?id=100083469366100"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </IconsContainer>
        </NavMenu>
      </NavOverlay>
      {navOpen && <LockScreen />}
    </NavigationWrapper>
  );
};

export default Navigation;
