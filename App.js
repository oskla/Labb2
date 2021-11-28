import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <View style={styles.toptop}>
          <Image
            style={{ width: "50px", height: "50px" }}
            source={require("./assets/house.png")}
          />
          <Text
            style={{ fontSize: "1rem", fontWeight: "bold", color: "#468499" }}
          >
            SmartHome
          </Text>
        </View>
        <View style={styles.headline2}>
          <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Rooms</Text>
        </View>
        <View style={styles.topBox}>
          <View style={styles.topBoxes}>
            <Image
              style={{ width: "100px", height: "100px" }}
              source={require("./assets/living-room.png")}
            />
            <Text>Living Room</Text>
          </View>
          <View style={styles.topBoxes}>
            <Image
              style={{ width: "100px", height: "100px" }}
              source={require("./assets/bed.png")}
            />
            <Text>Bedroom</Text>
          </View>
          <View style={styles.topBoxes}>
            <Image
              style={{ width: "100px", height: "100px" }}
              source={require("./assets/kitchen.png")}
            />
            <Text>Kitchen</Text>
          </View>
        </View>
        <StatusBar style="auto" />

        <View style={styles.middleBox}>
          <View style={styles.device}>
            <View style={styles.headline}>
              <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Devices
              </Text>
            </View>
            <View style={styles.deviceBox}>
              <View style={styles.indicatorGreen}></View>
              <View style={styles.deviceName}>
                <Text>Living Room Lamp</Text>
              </View>

              <View style={styles.onOff}>
                <Button title="On">On</Button>
                <Button title="Off">Off</Button>
              </View>
            </View>
          </View>
          <View style={styles.device}>
            <View style={styles.deviceBox}>
              <View style={styles.indicator}></View>
              <View style={styles.deviceName}>
                <Text>Heater</Text>
              </View>
              <View style={styles.onOff}>
                <Button title="On">On</Button>
                <Button title="Off">Off</Button>
              </View>
            </View>
          </View>
          <View style={styles.device}>
            <View style={styles.deviceBox}>
              <View style={styles.indicator}></View>
              <View style={styles.deviceName}>
                <Text>TV</Text>
              </View>
              <View style={styles.onOff}>
                <Button title="On">On</Button>
                <Button title="Off">Off</Button>
              </View>
            </View>
            <View style={styles.bottom}>
              <Text style={{ fontWeight: "bold" }}>Total Devices On: 1</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    backgroundColor: "fff",
    padding: "20px",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toptop: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headline: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
  },
  headline2: {
    backgroundColor: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  topBox: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topBoxes: {
    backgroundColor: "#ffe4e1",
    width: "110px",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
  },

  middleBox: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  middleBoxes: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  device: {
    flex: 1,
    backgroundColor: "675",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceBox: {
    backgroundColor: "#ddeecc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "400px",
  },
  indicator: {
    height: "20px",
    width: "20px",
    backgroundColor: "red",
    alignItems: "center",
  },
  indicatorGreen: {
    height: "20px",
    width: "20px",
    backgroundColor: "green",
    alignItems: "center",
  },
  deviceName: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
});
