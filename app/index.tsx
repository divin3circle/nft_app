import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { appColors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useNavigation } from "expo-router";

const AuthScreen = () => {
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
      {/* logo & desc */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* logo */}
        <View
          style={{
            justifyContent: "flex-start",
          }}
        >
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/images/app-logo.png")}
          />
        </View>
        {/* desc */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Discover</Text>
          <Text style={styles.text}>
            Unique{" "}
            <Text
              style={{
                color: appColors.app.primary,
                textDecorationLine: "underline",
              }}
            >
              NFT
            </Text>{" "}
            Art
          </Text>
          <Text style={styles.text}>& Collections</Text>
        </View>
      </View>
      {/* mascot */}

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/auth-ape.png")}
          style={{
            aspectRatio: 1,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            position: "absolute",
            bottom: 40,
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Pressable>
              <Link href="/home" asChild>
                <LinearGradient
                  colors={[appColors.app.button, appColors.app.buttonEnd]}
                  style={{
                    backgroundColor: appColors.app.button,
                    padding: 10,
                    borderRadius: 50,
                    paddingHorizontal: 30,
                    marginHorizontal: 10,
                    paddingVertical: 20,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Link href="/home" asChild>
                    <Text
                      style={{
                        textAlign: "center",
                        color: appColors.app.text,
                        fontFamily: "SpaceMono",
                        fontSize: 20,
                      }}
                    >
                      G
                    </Text>
                  </Link>
                </LinearGradient>
              </Link>
            </Pressable>

            <Link href="/home" asChild>
              <LinearGradient
                colors={[appColors.app.button, appColors.app.buttonEnd]}
                style={{
                  backgroundColor: appColors.app.button,
                  padding: 10,
                  borderRadius: 50,
                  marginHorizontal: 10,
                  width: "70%",
                  paddingVertical: 15,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Link href="/home" asChild>
                  <Text
                    style={{
                      textAlign: "center",
                      color: appColors.app.text,
                      fontFamily: "SpaceMono",
                      fontSize: 20,
                    }}
                  >
                    Sign In
                  </Text>
                </Link>
              </LinearGradient>
            </Link>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "SpaceMono",
                color: appColors.app.text,
                fontSize: 16,
              }}
            >
              Don't have an account?
            </Text>
            <Pressable>
              <Text
                style={{
                  fontFamily: "SpaceMono",
                  color: appColors.app.primary,
                  fontSize: 16,
                }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.app.text,
    fontSize: 30,
    fontFamily: "SpaceMono",
  },
});
