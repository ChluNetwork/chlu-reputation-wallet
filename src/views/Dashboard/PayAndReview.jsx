import React from "react";
// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";
import Step4 from "./WizardSteps/Step4.jsx";


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";





class PayAndReview extends React.Component {


  testSubmit(event) {
    event.preventDefault();
    alert('LOAD THE CRAWLER RESULTS2');
  }

  render() {
    const { classes } = this.props;

    return (
    <GridContainer justify="center">
      <ItemGrid xs={12} sm={12}>
        <Wizard
          validate
          steps={[
            { stepName: "About", stepComponent: Step1, stepId: "about" },
            { stepName: "Reviews", stepComponent: Step2, stepId: "reviews" },
          ]}
          title="Your Chlu Wallet Profile"
          subtitle="Manage Your Online Reputation + Pay, Review & Earn Chlu"
        />
      </ItemGrid>
    </GridContainer>

    );
  }
}

export default PayAndReview;
