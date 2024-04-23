import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  BackHandler,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "@/constants/Colors";

const Home = () => {
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);
  return (
    <LinearGradient
      colors={[appColors.app.theme, appColors.app.themeEnd]}
      style={{
        backgroundColor: appColors.app.theme,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
            color: appColors.app.text,
          }}
        >
          Home
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({});
