import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";

const NFTDetails = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View>
      <Text>NFTDetails</Text>
    </View>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({});
