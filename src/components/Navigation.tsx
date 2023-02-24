import { useNavigate } from "react-router-dom";
import burgerMenuIcon from "../assets/menuicon.png";
import { useState } from "react";
import findIcon from "../assets/findIcon.svg";
import toggleMode from "../assets/toggleMode.svg";
import loginIcon from "../assets/loginIcon.svg";
import {
  LoginIcon,
  NavigationContainer,
  NavigationLinks,
  SearchBar,
  SearchBarIcon,
  SearchBarInput,
  ToggleModeIcon,
} from "../styles/Navigation.styled";

interface NavigationTitle {
  name: string;
  path: string;
}

const Navigation = () => {
  // hooks
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [searchBarWide, setSearchBarWide] = useState<boolean>(false);
  const [searchBarInputWide, setSearchBarInputWide] = useState<boolean>(false);
  const navigation = useNavigate();

  // logic
  const navigationTitles: NavigationTitle[] = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Read", path: "/read" },
    { name: "Dreams", path: "/stories" },
  ];

  return (
    <NavigationContainer>
      {navigationTitles.map((title, index) => (
        <NavigationLinks key={index} to={title.path}>
          {title.name}
        </NavigationLinks>
      ))}
      <SearchBar
        onMouseOver={() => {
          setSearchBarWide(true);
        }}
        onMouseLeave={() => {
          setSearchBarWide(false);
        }}
        searchBarWide={searchBarWide}
        searchBarInputWide={searchBarInputWide}
      >
        <SearchBarInput
          onFocus={() => {
            setSearchBarInputWide(true);
          }}
          onBlur={() => {
            setSearchBarInputWide(false);
          }}
          searchBarWide={searchBarWide}
          searchBarInputWide={searchBarInputWide}
        />
        <SearchBarIcon
          src={findIcon}
          searchBarWide={searchBarWide}
          searchBarInputWide={searchBarInputWide}
        />
      </SearchBar>

      <ToggleModeIcon src={toggleMode} />
      <LoginIcon
        src={loginIcon}
        onClick={() => {
          navigation("/login");
        }}
      />
      {/* <img
        src={burgerMenuIcon}
        className="burger-menu-icon"
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
      /> */}
    </NavigationContainer>
  );
};

export default Navigation;
