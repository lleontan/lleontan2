import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";

interface ScrollableDivProps {
  yScrollPosition: number;
}


const ScrollableDiv: React.FC<Props> = ({ yScrollPosition }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [animateNextTextIn, setAnimateNextTextIn] = useState(false);

  useEffect(() => {
    console.log("vvv", yScrollPosition);
    if (yScrollPosition >= textArray.length * 100) {
      //resetAnimation();
    }
  }, [yScrollPosition]);

  const animateTextIn = () => {
    Animated.timing(textIndex, {
      toValue: textIndex + 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setTextIndex(new Animated.Value(0));
    setAnimateNextTextIn(true);
  };

  const resetAnimation = () => {
    setTextIndex(new Animated.Value(0));
    setAnimateNextTextIn(false);
  };

  return (
    <View>
      {textArray.map((text, index) => (
        <Animated.Text
          key={index}
          style={[
            { bottom: textIndex },
            animateNextTextIn
              ? { transform: [{ translateY: -100 }], opacity: 1 }
              : null, // show text
            !animateNextTextIn && index === textIndex
              ? { transform: [{ translateY: 0 }], opacity: 0 }
              : null, // hide text
          ].filter(Boolean)} // Removes null values
        >
          {text}
        </Animated.Text>
      ))}
    </View>
  );
};

export default ScrollableDiv;
