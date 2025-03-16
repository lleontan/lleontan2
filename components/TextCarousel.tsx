import { View, type ViewProps, Animated } from "react-native";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "expo-router";
import "../global.css";
import styles from "./style";
const carouselDescriptors = [
  "Software engineer👨‍💻",
  "Swell dude🏄",
  "Likes cats🐈",
  "Has a lot of paintings🖼️",
  "Owns a couch🛋️",
  "Not paraplegic🏃",
  "Stable diffusion enthusiast🎨",
  "Suno enthusiast🎛️",
  "Creating shareholder value💹",
  "Favorite color is peach💹",
  "Collection of cat pics😻",
  "More books than can count📖",
  "Francis Fukuyama bookclub🏯",
  "Walk around barefoot🦶",
  "Can Ski⛷️",
  "Favorite food is meat🍖",
  "Want a capybara🥺",
  "Love dogs🥺",
  "1 man AI slop factory🏭",
  "Single😉?",
  "Insta full of wildlife🌻",
  "Lost in ikea, call the swedish police🌻",
  "Compiling something🤖",
  "Hyponitized by LED fans😵‍💫",
  "Buy data cloud😵‍💫",
  "Palutena main💃",
  "Map staring enthuiast🌐",
  "5'11🦵🦵",
  "180 cm🦵🦵",
  "Sucked into a spacetime paradox🌌",
  "Taken hostage by terrorists, watching tenet backwards🎥",
  "Yes👍?",
  "No🙅‍♂️?",
  "Hello world, this is a infinite carosel🎠",
  "Vive enthusiast👓",
  "vr dev👓",
  "Have a 5 digit social security number🥸",
  "Complete nonsense, read the rest of the website🥸",
  "My favorite crabs are blue, because they taste sweet🦀",
  "I think constantly of my first love😭",
  "Donate money to me🫰",
  "谭亮亮",
  "我不知道普通话🇨🇳",
  "0 felonies committed🤷",
  "lleontan👋",
  "Humblebrag about getting cheap art🧐",
  "Can cook chinese food🥘!",
  "Can cook western food🍔!",
  "Everything is canto fusion if you're brave enough🥘",
  "Literally a human fortune cookie🥠",
  "Be the change you want🥠",
  "Shameless💸",
  "Probably hangry😤",
  "Leon Tan",
  "Actually tan👨‍🌾",
  "Can cook rice👨‍🌾",
  "Stuffed animal sanctuary🥺",
  "Yelling at clouds",
  "Taking a nap",
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
