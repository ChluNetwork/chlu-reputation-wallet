import React from "react";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Person from "@material-ui/icons/Person";
import AccountBox from "@material-ui/icons/AccountBox";
import Web from "@material-ui/icons/Web";
import StarHalf from "@material-ui/icons/StarHalf";
import Business from "@material-ui/icons/Business";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const style = {
  profileText: {
    fontWeight: "300",
    margin: "10px 0px 0px 0px",
    textAlign: "center"
  },
  card: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "1px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
  },
  ...regularFormsStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      design: false,
      code: false,
      develop: false
    };
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isValidated() {
    return true;
  }

  testSubmit(event) {
    event.preventDefault();
    alert('LOAD THE CRAWLER RESULTS');
  }


  render() {
    const { classes } = this.props;
    return (
    <div>
      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={9} style={{ backgroundColor: 'rgba(200, 200, 200, .2)' }}>
          <h4 className={classes.profileText}>Do You Manage An Online Profile That Receives Ratings & Reviews?</h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3} style={{ backgroundColor: 'rgba(200, 200, 200, .2)' }}>
          <InfoArea
            title="Select Profile Type"
            description="Select Your Profile Type That Currently Receives Reviews - Individual, Business or Specific Product"
            icon={AccountBox}
            iconColor="rose"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3} style={{ backgroundColor: 'rgba(200, 200, 200, .2)' }}>
          <InfoArea
            title="Profile Websites"
            description="Enter Your Email & Password On the Sites Where That Profile Exists"
            icon={Web}
            iconColor="primary"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3} style={{ backgroundColor: 'rgba(200, 200, 200, .2)' }}>
          <InfoArea
            title="Get Portable Reputation"
            description="We Merge, Normalize & Decentrally Store Your Ratings & Reviews So You Can Take them to Any Website"
            icon={StarHalf}
            iconColor="info"
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <br></br>
        <NavPills
          color="info"
          alignCenter
          tabs={[
            {
              tabButton: "Individuals",
              tabIcon: Person,
              tabContent: (
                <Card
                  cardTitle="To begin, simply enter your email & password for any of the sites below on which you have an active profile.
                  We extract, merge and decentrally store your reputation in a portable format so you own and control it."
                  content={
                    <span>
                    <form onSubmit={this.testSubmit}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Linkedin Email
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your LinkedIn email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Linkedin Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md5"
                            ref="password"
                            type="password"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your LinkedIn password"
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            UpWork Email
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your UpWork email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            UpWork Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md5"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your UpWork password"
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Fiverr Email
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Fiverr email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Fiverr Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md5"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Fiverr password"
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Flexhire Email
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Flexhire email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Flexhire Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <CustomInput
                            id="md5"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Flexhire password"
                          />
                        </GridItem>
                      </GridContainer>
                      </form>
                    </span>
                  }
                />
              )
            },
            {
              tabButton: "Businesses",
              tabIcon: Business,
              tabContent: (
                <Card
                  cardTitle="To begin, simply enter your email & password for any of the sites below on which you have an active profile.
                  We extract, merge and decentrally store your reputation in a portable format so you own and control it."
                  content={
                    <span>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <FormLabel className={classes.labelHorizontal}>
                          Yelp Email
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                          id="md3"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: ""
                          }}
                          helpText="We never store your Yelp email"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <FormLabel className={classes.labelHorizontal}>
                          Yelp Password
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                          id="md5"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: ""
                          }}
                          helpText="We never store your Yelp password"
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <FormLabel className={classes.labelHorizontal}>
                          TripAdvisor Email
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                          id="md3"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: ""
                          }}
                          helpText="We never store your TripAdvisor email"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <FormLabel className={classes.labelHorizontal}>
                          TripAdvisor Password
                        </FormLabel>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                          id="md5"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: ""
                          }}
                          helpText="We never store your TripAdvisor password"
                        />
                      </GridItem>
                    </GridContainer>
                    </span>
                  }
                />
              )
            },
            {
              tabButton: "Product Owners",
              tabIcon: ShoppingCart,
              tabContent: (
              <Card
                cardTitle="To begin, simply enter your email & password for any of the sites below on which you have an active profile.
                We extract, merge and decentrally store your reputation in a portable format so you own and control it."
                content={
                  <span>
                  <GridContainer>
                    <GridItem xs={12} sm={2}>
                      <FormLabel className={classes.labelHorizontal}>
                        Amazon Email
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={10}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Amazon email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            Amazon Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            id="md5"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Amazon password"
                          />
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={2}>
                      <FormLabel className={classes.labelHorizontal}>
                        Taobao Email
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={10}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            id="md3"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Taobao email"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={2}>
                          <FormLabel className={classes.labelHorizontal}>
                            TripAdvisor Password
                          </FormLabel>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <CustomInput
                            id="md5"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: ""
                            }}
                            helpText="We never store your Taobao password"
                          />
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  </span>
                }
              />
              )
            }
          ]}
        />
      </GridContainer>
      <GridContainer justify="flex-end">
        <GridItem xs={12} sm={12} md={12} className={classes.infoText}>
          <h7>Chlu guarantees that no information submitted from this form is ever stored on our system</h7>
          <br></br>
          <h7>By submitting this form you acknowledge you are entitled to invoke your <a href="https://gdpr-info.eu/recitals/no-63/">data access rights</a> and
          <a href="https://www.i-scoop.eu/gdprarticle/gdpr-article-20-right-data-portability/"> data portability rights</a> under European <a href="https://www.eugdpr.org/">GDPR</a> legislation.
          </h7>
        </GridItem>
      </GridContainer>
    </div>

    );
  }
}

export default withStyles(style)(Step3);
