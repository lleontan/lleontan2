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

        <div style={{ ...styles.centeredText }}>
          <h2 style={styles.headingMed}>This is me</h2>
          <p>I make a lot of AI art. Its really neat :)</p>
          <p>No, you're not getting contact details</p>
        </div>
      </div>
    </View>
  );
}
