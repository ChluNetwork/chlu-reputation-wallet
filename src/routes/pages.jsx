import LoginPage from "views/Pages/LoginPage.jsx";
import HomePage from "views/Pages/HomePage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ExpandMore from "@material-ui/icons/ExpandMore"

const pagesRoutes = [
  {
    path: "/pages/home-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: HomePage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    path: "/pages/home-page/#more",
    name: "Learn More",
    short: "Learn",
    mini: "PP",
    icon: ExpandMore,
    component: HomePage
  },
  {
    redirect: true,
    path: "/",
    pathTo: "/pages/home-page",
    name: "Home Page"
  }
];


export default pagesRoutes;
