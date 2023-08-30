// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";
import { SearchBarProps, ToggleModeProps } from "../../../types/types";
import { motion } from "framer-motion";

export const NavigationContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1 1 10px;
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
  color: #f8faff;
  transition: all 0.3s linear;
  position: relative;
  flex: 0 1 10px;
  &:hover {
    transform: scale(1.2);
    font-weight: 800;
  }
`;

/* Search bar */

export const SearchBar = styled(motion.div)<SearchBarProps>`
  display: flex;
  justify-content: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "stretch" : "center"};
  align-items: center;
  position: relative;
  background: #f8faff;
  border-radius: 42px;
  /* width: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "13%" : "42px"}; */
  transform: scale(1.2) translate(-20px);
  /* height: 60px; */
  /* width: 60px; */
  min-width: 60px;
  min-height: 50%;
  /* flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide
      ? "0 1 250px"
      : "0 1 10px"}; */
  overflow: hidden;
  /* transition: width 0.3s ease-in-out, filter, -webkit-filter 0.3s linear; */
  color: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "#b2b2b2" : "#191917"};
  cursor: pointer;
`;

export const SearchBarInput = styled.input<SearchBarProps>`
  /* width: 80%;
  height: 100%; */
  display: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "block" : "none"};
  flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "0" : "0 1 90%"};
  background: transparent;
  height: 100%;
  font-size: 1em;
  color: #f8faff;
  padding-left: 5%;
  outline: none;
  border: none;
  cursor: ${(props) => (props.searchBarInputWide ? "auto" : "inherit")};

  &:focus {
    outline: none;
  }
`;

export const SearchBarIcon = styled.img<SearchBarProps>`
  /* flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide
      ? "0 1 10%"
      : "0 1 100%"}; */
  transition: right 0.3s ease-in-out;
  /* padding-right: 10%; */
`;

export const ToggleModeIcon = styled.img<ToggleModeProps>`
  /* height: 140%; */
  cursor: pointer;
  transition: all 0.3s linear;
  flex: 0 1 10px;
  transform: ${({ whiteTheme }) =>
    whiteTheme ? "rotate(180deg)" : "rotate(0)"};
  color: #f8faff;

  &:hover {
    transform: ${({ whiteTheme }) =>
      whiteTheme ? "rotate(180deg) scale(1.2)" : "rotate(0) scale(1.2)"};
  }
`;

export const LoginIcon = styled.img`
  /* height: 140%; */
  cursor: pointer;
  transition: all 0.3s linear;
  flex: 0 1 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SoundIcon = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  flex: 0 1 10px;
  &:hover {
    transform: scale(1.2);
  }
`;
