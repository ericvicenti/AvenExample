import { View, Text, Button } from "react-native";
import React from "react";

import { createAppContainer } from "../navigation-native";
import { createStackNavigator } from "../navigation-stack";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Home Page</Text>
      <Button
        title="Go To Cameron"
        onPress={() => {
          navigation.navigate("Profile", { name: "Cameron" });
        }}
      />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>{navigation.getParam("name")}'s Profile</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const AppNavigator = createStackNavigator({ Home, Profile });

const App = createAppContainer(AppNavigator);

export default App;
