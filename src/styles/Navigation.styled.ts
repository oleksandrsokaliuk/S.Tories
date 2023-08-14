// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

interface SearchBarProps {
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  searchBarWide: boolean;
  searchBarInputWide: boolean;
}

interface ToggleModeProps {
  whiteTheme: boolean;
}

export const NavigationContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  margin-top: 30px;
  width: 100%;
  height: 30px;
  z-index: 50;
  &:hover > *:not(:hover) {
    filter: blur(4px);
  }
`;

export const NavigationLinks = styled(Link)`
  text-decoration: none;
  width: 140px;
  height: 110px;
  font-family: "Rock Salt", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 107px;
  color: #191917;
  transition: all 0.3s linear;
  position: relative;
  &:hover {
    transform: scale(1.2);
    font-weight: 800;
  }
`;

/* Search bar */

export const SearchBar = styled.div<SearchBarProps>`
  display: flex;
  position: relative;
  background: #191917;
  border-radius: 42px;
  width: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "13%" : "42px"};
  transform: scale(1.2) translate(-20px);
  height: 140%;
  overflow: hidden;
  transition: width 0.3s ease-in-out, filter, -webkit-filter 0.3s linear;
  align-items: center;
  color: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "#b2b2b2" : "#191917"};
  cursor: pointer;
`;

export const SearchBarInput = styled.input<SearchBarProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  font-size: 1em;
  color: inherit;
  padding-left: 5%;
  cursor: ${(props) => (props.searchBarInputWide ? "auto" : "inherit")};

  &:focus {
    outline: none;
  }
`;

export const SearchBarIcon = styled.img<SearchBarProps>`
  position: absolute;
  top: 25%;
  right: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "10%" : "25%"};
  height: 20px;
  transition: right 0.3s ease-in-out;
`;

export const ToggleModeIcon = styled.img<ToggleModeProps>`
  height: 140%;
  cursor: pointer;
  transition: all 0.3s linear;
  transform: ${({ whiteTheme }) =>
    whiteTheme ? "rotate(180deg) scale(1.2)" : "scale(1.2) rotate(0)"}; ;
`;

export const LoginIcon = styled.img`
  height: 140%;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.2);
  }
`;
