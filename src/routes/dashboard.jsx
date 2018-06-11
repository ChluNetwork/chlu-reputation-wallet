import MyReputation from "views/Dashboard/MyReputation.jsx";
import PayAndReview from "views/Dashboard/PayAndReview.jsx";


// @material-ui/icons
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import StarsIcon from "@material-ui/icons/Stars";
import CompareArrows from "@material-ui/icons/CompareArrows";


var dashRoutes = [
  {
    path: "/myreputation",
    name: "My Reputation",
    icon: StarsIcon,
    component: MyReputation
  },
  {
    path: "/payandreview",
    name: "Pay & Review",
    icon: RecordVoiceOverIcon,
    component: PayAndReview
  },
  {
    path: "/myreputation",
    name: "Reviews Received",
    icon: ThumbsUpDownIcon,
    component: MyReputation
  },
  {
    path: "/myreputation",
    name: "Transactions",
    icon: CompareArrows,
    component: MyReputation
  },
  { redirect: true, path: "/", pathTo: "/myreputation", name: "My Reputation" }
];
export default dashRoutes;
