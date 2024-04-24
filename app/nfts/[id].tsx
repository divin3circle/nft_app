import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Link, useGlobalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "@/constants/Colors";
import { nfts } from "@/utils/Data";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

const NFTDetails = () => {
  const { id } = useGlobalSearchParams();
  const nft = nfts.find((nft) => nft.id === Number(id));
  //   console.log(nft);
  return (
    <LinearGradient
      colors={[appColors.app.theme, appColors.app.theme]}
      style={{
        flex: 1,
      }}
    >
      <View style={{}}>
        <ImageBackground
          source={nft?.nft_image}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <LinearGradient
            colors={["transparent", appColors.app.theme]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 50,
              height: "90%",
              //   backgroundColor: "blue",
              marginBottom: -50,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingHorizontal: 20,
              marginVertical: 40,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                borderRadius: 25,
                overflow: "hidden",
                width: 50,
                height: 50,
              }}
            >
              <BlurView
                intensity={40}
                tint="light"
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="/home" asChild>
                  <Ionicons
                    name="arrow-back"
                    size={27}
                    color={appColors.app.text}
                  />
                </Link>
              </BlurView>
            </View>
            <View>
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  borderRadius: 25,
                  overflow: "hidden",
                  width: 50,
                  height: 50,
                }}
              >
                <BlurView
                  intensity={40}
                  tint="light"
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                    }}
                  >
                    🔥
                  </Text>
                </BlurView>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 30,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                //  marginVertical: 40,
              }}
            >
              <View>
                <Text
                  style={{
                    color: appColors.app.text,
                    fontFamily: "SpaceMono",
                    fontSize: 30,
                    paddingVertical: 5,
                  }}
                >
                  {nft?.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={nft?.creator_image}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    style={{
                      color: appColors.app.text,
                      fontFamily: "SpaceMono",
                      fontSize: 15,
                    }}
                  >
                    Owned by{" "}
                    <Text
                      style={{
                        color: appColors.app.primary,
                      }}
                    >
                      {nft?.creator}
                    </Text>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 30,
                  overflow: "hidden",
                  width: 60,
                  height: 60,
                }}
              >
                <BlurView intensity={40}>
                  <Image
                    source={require("../../assets/images/eth.png")}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                  />
                </BlurView>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "SpaceMono",
                    fontSize: 20,
                    color: appColors.app.text,
                  }}
                >
                  Description
                </Text>
                <Text
                  style={{
                    fontFamily: "SpaceMono",
                    fontSize: 15,
                    color: appColors.app.text,
                  }}
                >
                  Floor Price:
                  <Text
                    style={{
                      color: appColors.app.primary,
                    }}
                  >
                    {nft?.price} ETH
                  </Text>
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: appColors.app.button,
                    fontSize: 14,
                    fontFamily: "SpaceMono",
                  }}
                >
                  {nft?.description.substring(0, 150)}...
                  <Text
                    style={{
                      color: appColors.app.primaryEnd,
                    }}
                  >
                    More
                  </Text>
                </Text>
              </View>
              <LinearGradient
                colors={[appColors.app.button, appColors.app.buttonEnd]}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 50,
                  marginTop: 20,
                }}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: appColors.app.primary,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="cart-outline"
                      size={30}
                      color={appColors.app.text}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "SpaceMono",
                      color: appColors.app.text,
                    }}
                  >
                    Swipe To Buy Now
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Ionicons
                      name="chevron-forward-outline"
                      size={30}
                      color={appColors.app.themeEnd}
                    />
                    <Ionicons
                      name="chevron-forward-outline"
                      size={30}
                      color="gray"
                    />
                    <Ionicons
                      name="chevron-forward-outline"
                      size={30}
                      color={appColors.app.text}
                    />
                  </View>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({});
