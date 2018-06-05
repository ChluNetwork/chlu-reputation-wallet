import React from "react";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";
import StarHalf from "@material-ui/icons/StarHalf"
import Web from "@material-ui/icons/Web"
import AccessTime from "@material-ui/icons/AccessTime"
import Lock from "@material-ui/icons/Lock"
import Business from "@material-ui/icons/Business"
import EuroSymbol from "@material-ui/icons/EuroSymbol"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";


// ##############################
// // // stories for Timeline view
// #############################

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "danger",
    badgeIcon: StarHalf,
    title: "The Importance of Online Ratings & Reviews",
    titleColor: "danger",
    body: (
      <p>
      Online ratings and reviews are absolutely critical to commercial success in today's economy. As early as 2012 a <a href="https://scholarship.sha.cornell.edu/chrpubs/5">study from Cornell University</a> showed that if a hotel on Tripadvisor could increase their average customer reviews by just one star, they could increase their prices by up to 11.2% without affecting their occupancy rate.
      </p>
    ),
    footerTitle: "Cornell University Study, 2012"
  },
  {
    // Second story
    badgeColor: "success",
    badgeIcon: Web,
    title: "Reputation Portability Problem",
    titleColor: "success",
    body: (
      <p>
        Reputation data portability is a major problem as <a href="https://medium.com/doteveryone/exploring-portable-ratings-for-gig-workers-5632fd9b262e">documented</a> by <a href="https://doteveryone.org.uk">DotEveryone</a>, the London based, fairer internet think tank.
      </p>
    ),
    footerTitle: "DotEveryone, fairer internet think tank, Feb 2018"
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: AccessTime,
    title: "Ratings & Reviews In the Gig Economy",
    titleColor: "info",
    body: (
      <div>
        <p>
          Wired Magazine writes about the <a href="https://www.wired.com/story/how-to-fix-ratings-in-the-gig-economy">importance of enabling ratings and reviews portability</a> in the burgeoning gig economy.
        </p>
      </div>
    ),
    footer: (
      "Wired Magazine, Dec 2017"
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: Lock,
    title: "Reputation Data Ownership & Control",
    titleColor: "warning",
    body: (
      <p>
        Sarah O’Connor at The Financial Times writes a highly informative piece on the importance of reputation and the current inability to port it across online platforms in the gig economy and how GDPR will help.
      </p>
    ),
    footer: (
      "Financial Times, April 2018"
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "info",
    badgeIcon: Business,
    title: "UK Government-Commissioned Independent Assessment of the Economy",
    titleColor: "info",
    body: (
      <div>
        <p>
          The <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/627671/good-work-taylor-review-modern-working-practices-rg.pdf">Taylor Report</a>, a 2017 independent assessment of the UK economy commissioned directly by the UK government explicitly highlights the problem and urges the government to enact legislation to address the issue, stating: Government should strongly encourage gig platforms to enable individuals to be able to carry their verified approval ratings with them when they move from the platform and to share them with third parties.
        </p>
      </div>
    ),
    footer: (
      "Taylor Report, July 2017"
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: EuroSymbol,
    title: "European General Data Protection Regulation (GDPR) Legislation",
    titleColor: "warning",
    body: (
      <p>
        European GDPR <a href="https://gdpr-info.eu/recitals/no-63/">data access rights</a> and <a href="https://www.i-scoop.eu/gdprarticle/gdpr-article-20-right-data-portability/">data portability legislation</a> enshrines the rights of EU citizens and businesses to access and port their reputation data.
      </p>
    ),
    footer: (
      "EU GDPR, May 2018"
    )
  }

];

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    title: "All Day Event",
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: "default"
  },
  {
    title: "Meeting",
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: "green"
  },
  {
    title: "Lunch",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: "red"
  },
  {
    title: "Nud-pro Launch",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "azure"
  },
  {
    title: "Birthday Party",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: "azure"
  },
  {
    title: "Click for Creative Tim",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "orange"
  },
  {
    title: "Click for Google",
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: "rose"
  }
];

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
  "فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.",
  "بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.",
  "تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlWebsite = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];
var rtlServer = [
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.",
  "قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي."
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
  headerRow: ["Name", "Position", "Office", "Age", "Actions"],
  footerRow: ["Name", "Position", "Office", "Age", "Actions"],
  dataRows: [
    ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
    ["Garrett Winters", "Accountant", "Tokyo", "63"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
    ["Airi Satou", "Accountant", "Tokyo", "33"],
    ["Brielle Williamson", "Integration Specialist", "New York", "61"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
    ["Jena Gaines", "Office Manager", "London", "30"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
    ["Charde Marshall", "Regional Director", "San Francisco", "36"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
    ["Michael Silva", "Marketing Designer", "London", "66"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
    ["Gloria Little", "Systems Administrator", "New York", "59"],
    ["Bradley Greer", "Software Engineer", "London", "41"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
    ["Jenette Caldwell", "Development Lead", "New York", "30"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
    ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
    ["Gavin Joyce", "Developer", "Edinburgh", "42"],
    ["Jennifer Chang", "Regional Director", "Singapore", "28"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
    ["Michelle House", "Integration Specialist", "Sidney", "37"],
    ["Suki Burks", "Developer", "London", "53"],
    ["Prescott Bartlett", "Technical Author", "London", "27"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
    ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
    ["Hope Fuentes", "Secretary", "San Francisco", "41"],
    ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
    ["Timothy Mooney", "Office Manager", "London", "37"],
    ["Jackson Bradshaw", "Director", "New York", "65"],
    ["Olivia Liang", "Support Engineer", "Singapore", "64"]
  ]
};

export {
  // data for React Big Calendar in Calendar view
  events,
  stories,
  // these 3 are used to create the tasks lists in TasksCard - Widget view
  bugs,
  website,
  server,
  // these 3 are used to create the tasks lists in TasksCard - RTLSupport view
  rtlBugs,
  rtlWebsite,
  rtlServer,
  // data for datatables.net in DataTables view
  dataTable
};
