import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Image, FlatList } from "react-native";

import Single_ChatRoomPreview from "../../components/Single_ChatRoomPreview";
import Single_ChatRoom from "../ChatRoom";
import ChatRooms from "../../assets/dummy-data/ChatRooms";

export default function TabOneScreen() {
  return (
    // <View style={styles.container}>
    //   <FlatList
    //     data={ChatRooms}
    //     // horizontal // 控制 FlatList 滚动方向
    //     showsVerticalScrollIndicator={false} // 是否显示垂直滚动条
    //     renderItem={({ item }) => (
    //       <Single_ChatRoomPreview data_roomPreview={item} />
    //     )}
    //     // ListHeaderComponent={() => <Text>Hello</Text>}
    //   />
    // </View>
    <View style={styles.container}>kkkW</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },

  avatar: {
    marginLeft: 10,
    marginRight: 14,
    flexDirection: "row",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  badgeCont: {
    position: "absolute",
    right: -10,
    backgroundColor: "yellowgreen",
    borderWidth: 1,
    borderColor: "white",
    height: 20,
    paddingHorizontal: 4.6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "white",
  },

  textContainer: {
    flex: 1,
    padding: 3,
    justifyContent: "center",
  },

  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  name: {
    fontSize: 18,
  },

  msgTime: {
    fontSize: 12,
    color: "gray",
  },

  messagePreview: {
    color: "gray",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
