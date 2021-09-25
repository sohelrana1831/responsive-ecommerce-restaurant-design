import { FaPizzaSlice } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  background: transparent;
  display: flex;
  height: 80px;
  justify-content: center;
  front-weight: 700;
`;

// eslint-disable-next-line no-undef
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and(max - width: 400px) {
    position: absoolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    front-weight: bold;
  }
`;

// eslint-disable-next-line no-undef
export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
