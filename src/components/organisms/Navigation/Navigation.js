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
import { motion } from "framer-motion";
import booksy from "../../../assets/booksy-logo.png";
import { ReactComponent as ReactLogo } from "../../../assets/booksy.svg";

const MenuToggleWrapper = styled.div`
  /* width: 44px; */
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 5px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:focus {
      background-color: #363636;
    }
    svg {
      transition: all 0.4s ease-in-out;

      &:hover {
        border-radius: 10px;
        background-color: #363636;
      }
      path {
        /* fill: #b700ff; */
        fill: #fdfdfd;
      }
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    path {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: auto;
    }
  }
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

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
        <Link to="/" onClick={() => setNavOpen(false)}>
          <Image src={logo} alt="" />
        </Link>
      </ImgWrapper>
      <MenuToggleWrapper>
        <div>
          <a
            href="https://booksy.com/pl-pl/138044_sznyt-barbershop_barber-shop_3_warszawa"
            target="_blank"
          >
            <ReactLogo style={{ width: "80px" }} />
          </a>
        </div>
        <MenuToggle onClick={() => setNavOpen(!navOpen)}>
          <HamBox navOpen={navOpen}>
            {/* <Button>
            <svg width="40" height="40" viewBox="0 0 23 23">
              <Path
                d="M 4 5.423 L 19 5.423"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 4 11.423 L 19 11.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                d="M 4 17.423 L 19 17.423"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </Button> */}
            <LineTop navOpen={navOpen}></LineTop>
            <LineBottom navOpen={navOpen}></LineBottom>
          </HamBox>
        </MenuToggle>
      </MenuToggleWrapper>
      <NavOverlay navOpen={navOpen}>
        <NavMenu>
          <ul>
            <li>
              <span>01</span>
              <Link to="/team" onClick={() => setNavOpen(false)}>
                Zespół
              </Link>
            </li>
            <li>
              <span>02</span>
              <Link to="/gallery" onClick={() => setNavOpen(false)}>
                Galeria
              </Link>
            </li>
            <li>
              <span>03</span>
              <Link to="/contact" onClick={() => setNavOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li>
              <span>04</span>
              <Link to="/findus" onClick={() => setNavOpen(false)}>
                Gdzie jesteśmy
              </Link>
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
