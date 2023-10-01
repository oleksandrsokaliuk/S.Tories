import { useNavigate } from "react-router-dom";
import burgerMenuIcon from "../assets/menuicon.png";
import { useEffect, useState } from "react";
import findIcon from "../../assets/findIcon.svg";
import soundIcon from "../../assets/sound.svg";
import toggleMode from "../../assets/toggleMode.svg";
import loginIcon from "../../assets/loginIcon.svg";

import {
  LoginIcon,
  // NavigationContainer,
  NavigationLinks,
  ProfileIcon,
  SearchBar,
  SearchBarIcon,
  SearchBarInput,
  SoundIcon,
  ToggleModeIcon,
} from "./styles/Navigation.styled";
import { NavigationTitle } from "../../types/types";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { IUser, addUser } from "../../redux/slices/userSlice";
import { useCookies } from "react-cookie";
import api from "../../api/api";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [searchBarWide, setSearchBarWide] = useState<boolean>(false);
  const [searchBarInputWide, setSearchBarInputWide] = useState<boolean>(false);
  const [whiteTheme, setWhiteTheme] = useState<boolean>(false);
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
  const userData = useSelector((state: RootState) => state.userSlice.user);
  const [user, setUser] = useState<IUser>();
  const [cookies, setCookie] = useCookies(["token"]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  useEffect(() => {
    if (cookies.token) {
      try {
        const userData = async () => {
          const response = await api.getMe(cookies.token);
          dispatch(addUser(response));
        };
        userData();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <nav>
      {navigationTitles.map((title, index) => (
        <NavigationLinks key={index} to={title.path}>
          {title.name}
        </NavigationLinks>
      ))}
      {/* <SearchBar
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
      </SearchBar> */}

      <ToggleModeIcon
        src={toggleMode}
        onClick={() => {
          setWhiteTheme((state) => !state);
        }}
        whiteTheme={whiteTheme}
      />
      <SoundIcon src={soundIcon} />
      {user?.picture ? (
        <ProfileIcon
          src={
            user.picture
              ? user.picture
              : "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
          }
          alt="profile"
          onClick={() => {
            navigation("/user");
          }}
        />
      ) : (
        <LoginIcon
          src={loginIcon}
          onClick={() => {
            navigation("/login");
          }}
        />
      )}
      {/* <img
        src={burgerMenuIcon}
        className="burger-menu-icon"
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
      /> */}
    </nav>
  );
};

export default Navigation;
