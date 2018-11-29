
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";
import Finish from "./components/Finish";
import Quiz from './Quiz';
// import MyNavigator from './MyNavigator';

const App = createStackNavigator({
  Quiz:{screen:Quiz},
  StartPage: { screen: StartPage },
  Questions: { screen: Questions },
  Finish: { screen: Finish }
});

export default App;
