import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import LandingPage from "./LandingPage";
import { Button } from "@material-ui/core";

var uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      login: false,
      buttonSignup: true,
      buttonLogin: true,
      buttonBack: false,
      buttonBack2: false
    };
  }
  // useEffect(() => {
  //   const authObs = firebase.auth().onAuthStateChanged((user)=>{
  //     setUser(user)
  //   })
  //   return authObs;
  // })
  // const [user, setUser] = useState(null)

  state = { isSignIn: false };
  //   uiConfig = {
  //     signInFlow: "popup",
  //     signInOptions: [
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     ],
  //     callbacks: {
  //       signInSuccess: () => false,
  //     },
  //   };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignIn: !!user });
    });
  };

  loginButton() {
    this.setState({
      login: !this.state.login,
      buttonLogin: !this.state.buttonLogin,
      buttonSignup: !this.state.buttonSignup,
      buttonBack: !this.state.buttonBack,
    });
  }

  signupButton() {
    this.setState({
      signup: !this.state.signup,
      buttonSignup: !this.state.buttonSignup,
      buttonLogin: !this.state.buttonLogin,
      buttonBack2: !this.state.buttonBack2,
    });
  }

  render() {
    return (
      <div>
        {this.state.isSignIn ? (
          <Redirect to={{ pathname: "/landingPage" }}></Redirect>
        ) : (
          <div className="login">
            {/* {this.state.landingVisible && (<Route exact path="/landingPage" component={LandingPage} />)} */}
            <TwitterIcon className="twitterIcon" />
            <div>
              <h1>See what’s happening in the world right now</h1>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                Join Twitter today.
              </h3>
            </div>
            {this.state.signup && (
              <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
            )}
            {this.state.buttonSignup && (
              <Button
                className="signup-button"
                onClick={() => this.signupButton()}
              >
                Sign up
              </Button>
            )}
           
            {this.state.buttonLogin && (
              <Button
                className="login-button"
                onClick={() => this.loginButton()}
              >
                Log in
              </Button>
            )}
            {this.state.login && (
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
            {this.state.buttonBack && (
              <Button
                className="back-button"
                onClick={() => {(this.loginButton())}}
              >
                Back
              </Button>
            )}
            {this.state.buttonBack2 && (
              <Button
                className="back-button"
                onClick={() => {(this.signupButton())}}
              >
                Back
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Login;
