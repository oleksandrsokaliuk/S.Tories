// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";
import { SearchBarProps, ToggleModeProps } from "../../../types/types";

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* padding: 0 5%; */
  flex: 1 1 10px;
  z-index: 50;
`;

export const NavigationHeader = styled.h1`
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 2em;
  text-transform: capitalize;
  color: #f8faff;
  z-index: 2;
  flex: 0 1 100px;
  text-align: center;

  @media (max-width: 850px) {
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
  flex: 0 1 10px;
  &:hover {
    transform: scale(1.2);
    font-weight: 800;
  }
`;

/* Search bar */

export const SearchBar = styled.div<SearchBarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #191917;
  border-radius: 42px;
  /* width: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "13%" : "42px"}; */
  transform: scale(1.2) translate(-20px);
  height: 60px;
  width: 60px;
  flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "0 1 15%" : "0 1 3%"};
  overflow: hidden;
  transition: width 0.3s ease-in-out, filter, -webkit-filter 0.3s linear;
  color: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "#b2b2b2" : "#191917"};
  cursor: pointer;
`;

export const SearchBarInput = styled.input<SearchBarProps>`
  /* position: relative; */
  width: 100%;
  height: 100%;
  flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "0" : "0 1 90%"};
  background: rgba(255, 255, 255, 0);
  font-size: 1em;
  color: inherit;
  padding-left: 5%;
  outline: none;
  border: none;
  cursor: ${(props) => (props.searchBarInputWide ? "auto" : "inherit")};

  &:focus {
    outline: none;
  }
`;

export const SearchBarIcon = styled.img<SearchBarProps>`
  /* position: absolute; */
  flex: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "0 1 10%" : "0 1 100%"};
  /* top: 25%;
  right: ${(props) =>
    props.searchBarWide || props.searchBarInputWide ? "10%" : "25%"};
  height: 20px; */
  transition: right 0.3s ease-in-out;
  padding-right: 10%;
`;

export const ToggleModeIcon = styled.img<ToggleModeProps>`
  /* height: 140%; */
  cursor: pointer;
  transition: all 0.3s linear;
  flex: 0 1 10px;
  transform: ${({ whiteTheme }) =>
    whiteTheme ? "rotate(180deg) scale(1.2)" : "scale(1.2) rotate(0)"};
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

export const ProfileIcon = styled.img`
  /* height: 65%; */
  cursor: pointer;
  transition: all 0.3s linear;
  /* flex: 0 1 10px; */
  border-radius: 50%;
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

export const TitleItem = styled.li`
  flex: 1;
  text-align: center;
  font-size: 2em;
  margin: 1%;
  cursor: pointer;
  color: white;
`;
