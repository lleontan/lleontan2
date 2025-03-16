import { Text, View, Image, StyleSheet } from "react-native";
import { HeaderBar } from "@/components/HeaderBar";
import "../global.css";
import styles from "../components/style";

export default function About() {
  const images = [{ url: "../assets/images/joebidenthanosmorph.png" }];
  const fullScreenImage = () => {};
  return (
    <View style={styles.page}>
      <HeaderBar></HeaderBar>
      <div style={styles.flexColumnFullWidth}>
        <Image
          style={styles.fullsizedLogo}
          source={require("../assets/images/ai_selfportrait.png")}
        ></Image>

        <div style={{ ...styles.centeredText, ...styles.headingMed }}>
          <h2>This is me</h2>
          <p></p>
        </div>
      </div>
    </View>
  );
}
