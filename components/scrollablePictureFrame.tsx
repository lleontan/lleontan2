import { View, type ViewProps, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import "../global.css";
import styles from "./style";

export type ScrollabePictureFrameProps = ViewProps & {
  currentPage?: string;
  imageSources?: string[];
};

export function ScrollablePictureFrame({
  currentPage,
  imageSources,
  ...otherProps
}: ScrollabePictureFrameProps) {
  return (
    <View style={styles.lrScrollFrame}>
      {imageSources.map((imageSource, index) => (
        <Image
          key={index}
          style={styles.lrScrollFrameImage}
          source={imageSource}
        />
      ))}
    </View>
  );
}
