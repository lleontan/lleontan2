import { Text, View, Image, StyleSheet } from "react-native";
import { HeaderBar } from "@/components/HeaderBar";
import "../global.css";
import styles from "../components/style";
import ImageGalleryGrid from "@/components/ImageGalleryGrid";

export default function Gallery() {
  const AI_ART_GRID = [
    {
      id: "fib1",
      url: require("../assets/images/fibonaci1.png"),
      desc: "Fibonacci encoding",
    },
    {
      id: "fib3",
      url: require("../assets/images/fibonacci2.png"),
      desc: "Fibonacci encoding 2",
    },
    {
      id: "joebidenthanosmorph",
      url: require("../assets/images/joebidenthanosmorph.png"),
      desc: "Fibonacci encoding",
    },
    {
      id: "luffy",
      url: require("../assets/images/luffy.png"),
      desc: "Luffy encoding",
    },
    {
      id: "luffy",
      url: require("../assets/images/waveclouds.png"),
      desc: "Waveclouds encoding",
    },
  ];
  const fullScreenImage = () => {};
  return (
    <View style={styles.page}>
      <HeaderBar></HeaderBar>
      <div style={styles.flexColumnFullWidth}>
        <div style={styles.centeredText}>
          <h2 style={styles.headingMed}>Gallery</h2>
          <p></p>
        </div>
        <ImageGalleryGrid
          columns={3}
          images={AI_ART_GRID}
          onClickCallback={fullScreenImage}
        ></ImageGalleryGrid>
      </div>
    </View>
  );
}
