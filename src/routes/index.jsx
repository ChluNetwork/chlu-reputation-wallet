import Dashboard from "layouts/Dashboard.jsx";
import Pages from "layouts/Pages.jsx";

var indexRoutes = [
  { path: "/myreputation", name: "Home", component: Dashboard },
  { path: "/", name: "Pages", component: Pages }

];

export default indexRoutes;
