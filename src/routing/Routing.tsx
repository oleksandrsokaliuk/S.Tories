import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import ReadPage from "../components/ReadPage";
import StoriesPage from "../components/StoriesPage";
import LoginPage from "../components/LoginPage";
import CreateStory from "../components/CreateStory";
import PickedStory from "../components/PickedStory";

const locations = {
  homePage: "/",
  readPage: "/read",
  storiesPage: "/stories",
  loginPage: "/login",
  createStory: "/addfanfic",
  pickedStory: "/fanfic/:id",
};

export const routes = [
  {
    path: locations.homePage,
    component: HomePage,
    name: "WelcomePage",
    exact: true,
  },
  {
    path: locations.readPage,
    component: ReadPage,
    name: "ReadPage",
    exact: true,
  },
  {
    path: locations.storiesPage,
    component: StoriesPage,
    name: "Fanfic",
    exact: true,
  },
  {
    path: locations.loginPage,
    component: LoginPage,
    name: "LoginPage",
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
