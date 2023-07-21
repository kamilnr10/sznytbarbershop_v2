import React from "react";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100vw;
  height: 80px;
  position: fixed;
  top: ${({ visible }) => (visible ? "0px " : "-80px")};
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5%;
  -webkit-box-shadow: inset 0px 12px 16px -3px #000000;
  -moz-box-shadow: inset 0px 12px 16px -3px #000000;
  box-shadow: inset 0px 12px 16px -3px #28282d;

  background-color: #000000;
  transition: 0.5s ease-in-out;

  @media screen and (min-width: 420px) {
    top: 0;
  }

  @media (min-width: 810px) {
    padding: 0 10%;
  }
`;

export const ImgWrapper = styled.div`
  /* width: 100px; */
  height: 80px;
  background-color: ${({ navopen }) => (navopen ? "#2a2a2f" : "rgba(0,0,0,0)")};
`;

export const Image = styled.img`
  height: 100%;
  width: 80px;
  object-fit: contain;
  background: none;
`;

export const MenuToggle = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: ${({ navopen }) => (navopen ? "#2a2a2f" : "rgba(0,0,0,0)")};
`;

export const HamBox = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3 ease;

  /* background-color: white; */
  background-color: ${({ navopen }) => navopen && "#2a2a2f"};
  /* padding: 1em; */

  /* &:hover,
  &:focus {
    background-color: #2a2a2f;
  } */

  .hamBoxOpen {
    background: #2a2a2f;
  }
`;

export const LineTop = styled.span`
  margin: 0 auto;
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  top: ${({ navOpen }) => (navOpen ? "21px" : "18px")};
  left: 0;
  right: 0;
  transform: ${({ navOpen }) => (navOpen ? "rotate(135deg)" : "rotate(0deg)")};
  transition: 0.4s ease-in-out;
  /* 
  .spin {
    top: 21px;
    transform: ;
    background: #cc0000;
  } */
`;

export const LineBottom = styled.span`
  margin: 0 auto;
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  bottom: ${({ navOpen }) => (navOpen ? "21px" : "18px")};
  left: 0;
  right: 0;
  transform: ${({ navOpen }) => (navOpen ? "rotate(225deg)" : "rotate(0deg)")};
  transition: 0.4s ease-in-out;

  /* .spin {
    bottom: 21px;
    transform: rotate(225deg);
    background: #ea0e0e;
  } */
`;

export const NavOverlay = styled.div`
  position: fixed;
  z-index: -2;
  top: ${({ navOpen }) => (navOpen ? "0" : "-120%")};

  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* padding: 4em; */
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  background: #18181c;

  div:first-child {
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.01;
    z-index: -1;
    pointer-events: none;
    background-image: url("noise.gif");
  }

  div:last-child {
    position: absolute;
    bottom: 0;
    left: 0;
    /* transform: translate(-50%, -50%); */
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 10px;
      padding: 10px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
`;

export const NavMenu = styled.nav`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    div {
      padding: 0 0 50px;
    }

    li {
      /* height: 80px; */
      /* margin: 15px 0; */
      display: flex;
      flex-direction: column;

      span {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        /* font-size: clamp(3rem, 2.7993rem + 0.9451vw, 4.75rem); */
        font-family: "Teko", sans-serif;
        color: #fff;
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
        font-family: "Teko", sans-serif;
        font-size: clamp(2rem, 1.7993rem + 0.9451vw, 4.75rem);
      }
    }
  }
`;
