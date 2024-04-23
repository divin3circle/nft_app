import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { filters } from "./utils/Data";
import { Ionicons } from "@expo/vector-icons";
import { Select } from "native-base";

function FilterItem({
  item,
  selectedFilter,
}: {
  item: {
    id: number;
    name: string;
  };
  selectedFilter: number;
}) {
  return (
    <LinearGradient
      colors={
        selectedFilter === item.id
          ? [appColors.app.button, appColors.app.buttonEnd]
          : ["transparent", "transparent"]
      }
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginHorizontal: 5,
      }}
    >
      <Text
        style={{
          color: appColors.app.text,
          fontSize: 16,
          fontFamily: "SpaceMono",
          marginHorizontal: 10,
        }}
      >
        {item.name}
      </Text>
    </LinearGradient>
  );
}

const Home = () => {
  const [selectedFilter, setSelectedFilter] = React.useState(1);
  const flatListRef = React.useRef<FlatList | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [period, setPeriod] = React.useState<string>("");

  const handleFilter = (id: number, index: number) => {
    setSelectedFilter(id);
    setSelectedItemIndex(index);
    // if (flatListRef.current) {
    //   flatListRef.current.scrollToIndex({
    //     animated: true,
    //     viewOffset: 0,
    //     index: id - 1,
    //   });
    // }
  };

  React.useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: selectedItemIndex,
        animated: true,
      });
    }
  }, [selectedFilter]);

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
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* user */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            width: "100%",
          }}
        >
          <View>
            <Text
              style={{
                color: appColors.app.text,
                fontSize: 20,
                fontFamily: "SpaceMono",
              }}
            >
              Hello👋!
            </Text>
            <Text
              style={{
                color: appColors.app.text,
                fontSize: 26,
                fontWeight: "bold",
                fontFamily: "SpaceMono",
              }}
            >
              Sylus Abel
            </Text>
          </View>
          <LinearGradient
            colors={[appColors.app.button, appColors.app.buttonEnd]}
            style={{
              borderRadius: 50,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 1, y: 1 }}
          >
            <Entypo name="menu" size={30} color={appColors.app.text} />
          </LinearGradient>
        </View>
        {/* search */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            width: "80%",
            borderColor: appColors.app.text,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 50,
            padding: 10,
            marginVertical: 20,
          }}
        >
          <Entypo
            name="magnifying-glass"
            size={30}
            color={appColors.app.button}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={appColors.app.button}
            style={{
              color: appColors.app.button,
              fontSize: 14,
              fontFamily: "SpaceMono",
              width: "75%",
            }}
          />
        </View>
        {/* filters */}
        <View
          style={{
            marginVertical: 20,
            height: 30,
          }}
        >
          <FlatList
            key={selectedFilter}
            data={filters}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleFilter(item.id, index)}
              >
                <FilterItem item={item} selectedFilter={selectedFilter} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            // estimatedItemSize={157}
            horizontal
            showsHorizontalScrollIndicator={false}
            getItemLayout={
              (data, index) => ({
                length: 8,
                offset: 8 * index,
                index,
              }) // replace ITEM_SIZE with your item size
            }
          />
        </View>
        {/* trending */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: appColors.app.text,
              fontSize: 22,
              fontFamily: "SpaceMono",
            }}
          >
            Trending Collection
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: appColors.app.button,
                fontSize: 13,
                fontFamily: "SpaceMono",
              }}
            >
              This Week
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={appColors.app.button}
            />
          </Pressable>
        </View>
        {/* nfts */}
        <View></View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({});
