import Dashboard from "views/Dashboard/Dashboard.jsx";
import PayAndReview from "views/Dashboard/PayAndReview.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";
import SettingsIcon from "@material-ui/icons/Settings";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import StarsIcon from "@material-ui/icons/Stars";
import CompareArrows from "@material-ui/icons/CompareArrows";

var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/rtl/rtl-support-page",
    name: "RTL Support",
    mini: "RS",
    component: RTLSupport
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/myreputation",
    name: "My Reputation",
    icon: StarsIcon,
    component: Dashboard
  },
  {
    path: "/payandreview",
    name: "Pay & Review",
    icon: RecordVoiceOverIcon,
    component: PayAndReview
  },
  {
    path: "/dashboard",
    name: "Reviews Received",
    icon: ThumbsUpDownIcon,
    component: Dashboard
  },
  {
    path: "/dashboard",
    name: "Transactions",
    icon: CompareArrows,
    component: Dashboard
  },
  { redirect: true, path: "/", pathTo: "/myreputation", name: "My Reputation" }
];
export default dashRoutes;
