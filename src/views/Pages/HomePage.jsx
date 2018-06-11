import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles";

// @material-ui/icons
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Lock from "@material-ui/icons/Lock";
import CallMerge from "@material-ui/icons/CallMerge";
import Web from "@material-ui/icons/Web";
import Payment from "@material-ui/icons/Payment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Timeline from "components/Timeline/Timeline.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";
import Wizard from "components/Wizard/Wizard.jsx";



import { stories, bugs, website, server } from "variables/general.jsx";

import image from "assets/img/faces/card-profile1-square.jpg";

import avatar from "assets/img/faces/avatar.jpg";

//import homePageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

import homePageStyle from "assets/jss/material-dashboard-pro-react/views/homePageStyle.jsx";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  testSubmit(event) {
    console.log("submitting register form");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>Manage Your Reputation</h2>
              <h5 className={classes.description}>
                Chlu is a Cryptocurrency and Decentralized Reputation Wallet.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card
                cardTitle=""
                titleAlign="center"
                customCardTitleClasses={classes.cardTitle}
                customCardClasses={classes.cardClasses}
                content={
                  <div>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={5}>
                        <div className={classes.center}>
                          <h3>For Online Review Writers</h3>
                        </div>
                        <InfoArea
                          title="Pay"
                          description="Use Your Chlu Wallet to Pay With Crypto."
                          icon={Payment}
                          iconColor="rose"
                        />
                        <InfoArea
                          title="Review"
                          description="Use Your Chlu Wallet to Write Verified Reviews for Online Products & Services."
                          icon={ThumbsUpDown}
                          iconColor="primary"
                        />
                        <InfoArea
                          title="Earn Chlu"
                          description="Earn Redeemable Chlu Tokens for Writing Verified Reviews."
                          icon={MonetizationOn}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={5}>
                        <div className={classes.center}>
                          <h3>For Online Review Recipients</h3>
                        </div>
                        <InfoArea
                          title="Own"
                          description="Take ownership of all your ratings and reviews."
                          icon={Lock}
                          iconColor="rose"
                        />
                        <InfoArea
                          title="Merge"
                          description="Merge your ratings and reviews from multiple websites."
                          icon={CallMerge}
                          iconColor="primary"
                        />
                        <InfoArea
                          title="Port"
                          description="Take your merged ratings and reviews to any website."
                          icon={Web}
                          iconColor="info"
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12}>
                        <Wizard
                          validate
                          steps={[
                            { stepName: "1: Create Your Wallet", stepComponent: Step1, stepId: "get started" },
                            { stepName: "2: Save Your D.I.D.", stepComponent: Step2, stepId: "about" },
                            { stepName: "3: Claim Your Reputation", stepComponent: Step3, stepId: "reviews" },
                          ]}
                          title="Let's Get Started"
                          subtitle="Follow The Three Easy Steps Below To Begin"
                        />
                      </GridItem>
                    </GridContainer>

                  </div>
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.learnMore}><a name="more"></a>Learn More - The Problem With Ratings & Reviews Today</h2>
            </GridItem>
            <GridItem xs={12}>
              <Card plainCard content={<Timeline stories={stories} />} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(homePageStyle)(HomePage);
