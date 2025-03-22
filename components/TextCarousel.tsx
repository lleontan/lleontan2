import { View, type ViewProps, Animated } from "react-native";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "expo-router";
import "../global.css";
import styles from "./style";
const carouselDescriptors = [
  "Software engineer👨‍💻",
  "Swell dude🏄",
  "Likes cats🐈",
];
const stayDuration = 6000;
const fadeInDuration = 2000;
const debug = true;
export type TextCarouselProps = ViewProps & {
  list?: string[];
  styleProp?: Object;
};

export function TextCarousel({
  list,
  styleProp,
  ...otherProps
}: TextCarouselProps) {
  const [motionCounter, setMotionCounter] = useState(0);

  const [desc, setDesc] = useState("");

  const [randomizedList, setRandomizedList] = useState([""]);
  const opacity = useRef(new Animated.Value(0)).current;

  const animationFn = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: fadeInDuration,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: stayDuration,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: fadeInDuration,
      }),
    ]).start(() => {
      setMotionCounter((motionCounter) => motionCounter + 1);
      animationFn();
    });
  };

  useEffect(() => {
    animationFn();
    if (debug) {
      opacity.addListener(({ value }) => {
        console.log(
          "opacity animation value: ",
          value,
          ":motion:",
          motionCounter
        );
      });
    }
  }, []);

  useEffect(() => {
    setDescByRule();
  }, [motionCounter]);

  const randomizeList = (array: string[]) => {
    if (!array) {
      array = carouselDescriptors;
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const getListValue = (index) => {
    return randomizedList[index];
  };
  const getTransform = () => {
    return opacity;
  };
  const setDescByRule = () => {
    setDesc(list[motionCounter % list?.length]);
  };
  return (
    <View
      className="textCarousel"
      style={{ ...styles.textCarousel, ...styleProp }}
    >
      <Animated.View // Special animatable View
        style={{
          opacity: opacity, // Bind opacity to animated value
          //transform: [{ translateY: getTransform() }],
        }}
      >
        <div style={styles.textCarouselTransitionSlide}>
          <span>{desc}</span>
        </div>
      </Animated.View>
    </View>
  );
}
