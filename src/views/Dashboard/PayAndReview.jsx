import React from "react";
// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";





class PayAndReview extends React.Component {

  render() {
    const { classes } = this.props;

    return (
    <GridContainer justify="center">
      <ItemGrid xs={12} sm={12} md={10}>
        <RegularCard
          cardTitle="Register"
          titleAlign="center"
        />
      </ItemGrid>
    </GridContainer>

    );
  }
}

export default PayAndReview;
