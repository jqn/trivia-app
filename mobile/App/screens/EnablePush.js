import React from "react";
import { View } from "react-native";

import Container from "../components/Container";
import Card from "../components/Card";
import { TitleText, StandardText } from "../components/Text";
import {
  PrimaryButton,
  SecondaryButton,
  HorizontalButtons
} from "../components/Button";

import * as UserData from "../util/UserData";

class EnablePush extends React.Component {
  handleEnable = () => {
    this.props.enablePushNotifications().then(() => {
      this.props.completeOnboarding();
      this.props.goTo("Question");
    });
  };

  handleDismiss = () => {
    this.props.completeOnboarding();
    this.props.goTo("Question");
  };

  render() {
    return (
      <Container>
        <Card>
          <TitleText>Get Notified?</TitleText>
          <StandardText>
            We use push notifications so we can remind you when new trivia
            questions are available!
          </StandardText>
        </Card>
        <HorizontalButtons>
          <SecondaryButton onPress={this.handleDismiss}>
            No thanks
          </SecondaryButton>
          <PrimaryButton onPress={this.handleEnable}>Notify me!</PrimaryButton>
        </HorizontalButtons>
      </Container>
    );
  }
}

export default props => (
  <UserData.Consumer>
    {({ completeOnboarding, enablePushNotifications }) => (
      <EnablePush
        {...props}
        completeOnboarding={completeOnboarding}
        enablePushNotifications={enablePushNotifications}
      />
    )}
  </UserData.Consumer>
);
