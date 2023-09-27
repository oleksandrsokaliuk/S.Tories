import { Route, Routes } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import ReadPage from "../components/read/ReadPage";
import StoriesPage from "../components/StoriesPage";
import LoginPage from "../components/authorization/login/LoginPage";
import CreateStory from "../components/CreateStory";
import PickedStory from "../components/PickedStory";
import RegistrationPage from "../components/authorization/registration/RegistrationPage";
import TokenAcceptor from "../components/authorization/login/TokenAcceptor";
import UserConfig from "../components/authorization/configuration/UserConfig";

export const locations = {
  homePage: "/",
  shareStory: "/share",
  voyage: "/voyages",
  loginPage: "/login",
  registrationPage: "/registration",
  createStory: "/addfanfic",
  pickedStory: "/fanfic/:id",
  loginToken: "/auth/:token/:email/:firstName/:lastName/:picture",
  userConfig: "/user",
};

export const routes = [
  {
    path: locations.homePage,
    component: HomePage,
    name: "WelcomePage",
    exact: true,
  },
  {
    path: locations.voyage,
    component: ReadPage,
    name: "ReadPage",
    exact: true,
  },
  {
    path: locations.shareStory,
    component: StoriesPage,
    name: "Stories",
    exact: true,
  },
  {
    path: locations.loginPage,
    component: LoginPage,
    name: "LoginPage",
    exact: true,
  },
  {
    path: locations.registrationPage,
    component: RegistrationPage,
    name: "LoginPage",
    exact: true,
  },
  {
    path: locations.loginToken,
    component: TokenAcceptor,
    name: "TokenRedirect",
    exact: true,
  },
  {
    path: locations.createStory,
    component: CreateStory,
    name: "addFanfic",
    exact: true,
  },
  {
    path: locations.pickedStory,
    component: PickedStory,
    name: "pickedFanfic",
    exact: true,
  },
  {
    path: locations.userConfig,
    component: UserConfig,
    name: "userConfig",
    exact: true,
  },
];

const Routing = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};

export default Routing;
