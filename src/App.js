import React from "react";
import "./App.css";
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react'

class App extends React.Component {
  state = {};

  render() {
    return <div>App</div>;
  }
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "var(--color-blue)"
    },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--color-blue)"
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "var(--color-blue)"
  }
};

export default withAuthenticator(App, true, [], null, theme);
