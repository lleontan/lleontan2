import { Text, View, Image, StyleSheet, Animated } from "react-native";
import { HeaderBar } from "@/components/HeaderBar";
import { TextCarousel } from "@/components/TextCarousel";
import "react-multi-carousel/lib/styles.css";
import "../global.css";
import styles from "../components/style";
import ScrollableDiv from "@/components/ScrollableDiv";
import { useEffect, useState } from "react";

const currentPage = "index";
const textArray: String[] = [
  "Engineering",
  "Design",
  "Solutions",
  "Resolutions",
];
export default function Index() {
  return (
    <View>
      <HeaderBar></HeaderBar>
      <div style={{ ...styles.flexColumn, ...styles.contentBody }}>
        <div style={styles.mainIntroLeftShift}>
          <div style={styles.leftShiftMed}>
            <h3 style={styles.bigImpression}>Full</h3>
            <h3 style={styles.bigImpression}>Stack</h3>
            <TextCarousel list={textArray} styleProp={styles.introCarousel}></TextCarousel>
          </div>
          <p></p>
        </div>
      </div>
    </View>
  );
}
