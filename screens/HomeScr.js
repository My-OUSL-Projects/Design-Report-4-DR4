import * as React from "react";
import { StyleSheet, Text, View, SectionList, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View>
          <Text style={styles.topic}>Welcome to the Book App</Text>
          <Text style={styles.subtopic}>
            In here you can browse and read your favourite books
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={{ fontSize: 18 }}>Book List</Text>
          <SectionList
            sections={[
              { title: "G", data: ["Gamperaliya"] },
              { title: "K", data: ["Kaliyugaya"] },
              { title: "M", data: ["Madol Doova"] },
              { title: "T", data: ["Thunmanhandiya"] },
            ]}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={styles.field}>
          <Text style={{ fontSize: 18 }}>Category List</Text>
          <FlatList
            data={[
              { key: "Action and Adventure" },
              { key: "Literary Fiction" },
              { key: "Short Stories" },
            ]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 22,
  },

  page: {
    marginTop: 100,
    textAlign: "left",
    marginLeft: 50,
    marginRight: 40,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  topic: {
    fontSize: 35,
    fontWeight: "bold",
  },

  subtopic: {
    fontSize: 15,
    marginBottom: 10,
  },

  field: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
});

export default Home;
