import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View>
          <Text style={styles.topic}>Login</Text>
          <Text style={styles.subtopic}>Please Login to continue.</Text>
        </View>
        <View style={styles.field}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
            }}
          />
          <TextInput style={styles.input} placeholder="EMAIL"></TextInput>
        </View>
        <View style={styles.field}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://flyclipart.com/thumb2/password-png-icon-free-download-121695.png",
            }}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="PASSWORD"
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.buttonIn}
          >
            <Text style={styles.buttonText}> LOGIN </Text>
          </TouchableOpacity>
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
  },

  buttonIn: {
    marginTop: 30,
    backgroundColor: "blue",
    borderRadius: 30,
    width: 130,
    height: 50,
    justifyContent: "center",
    alignSelf: "flex-end",
  },

  buttonText: {
    fontSize: 15,
    alignSelf: "center",
    color: "#fff",
  },

  logo: {
    width: 22,
    height: 25,
  },

  field: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#B8B8B8",
  },

  input: {
    marginLeft: 5,
  },
});

export default Login;
