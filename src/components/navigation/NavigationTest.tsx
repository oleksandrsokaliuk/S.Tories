import { useNavigate } from "react-router-dom";
import burgerMenuIcon from "../assets/menuicon.png";
import { useEffect, useState } from "react";
import findIcon from "../../assets/findIcon.svg";
import soundIcon from "../../assets/sound.svg";
import toggleMode from "../../assets/toggleMode.svg";
import loginIcon from "../../assets/loginIcon.svg";

import {
  LoginIcon,
  NavigationHeader,
  NavigationLinks,
  NavigationList,
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
import Sun from "../icons/Sun";

const NavigationTest = () => {
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
    console.log({ picture: user?.picture });
  }, [userData]);

  useEffect(() => {
    if (cookies.token) {
      try {
        const userData = async () => {
          const response = await api.getMe(cookies.token);
          dispatch(addUser(response.data));
        };
        userData();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <nav>
      <NavigationList>
        <li style={{ flex: "0 1 150px" }} onClick={() => navigation("/")}>
          {/* <ToggleModeIcon
            src={toggleMode}
            onClick={() => {
              setWhiteTheme((state) => !state);
            }}
            whiteTheme={whiteTheme}
          /> */}
          <Sun />
        </li>
        <li style={{ flex: "0 1 10px" }}>
          <NavigationHeader>S.Tories</NavigationHeader>
        </li>
        <li style={{ flex: "0 1 10px" }}>
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
        </li>
      </NavigationList>
    </nav>
  );
};

export default NavigationTest;
