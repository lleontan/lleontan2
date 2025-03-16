import { View, type ViewProps } from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";
import "../global.css";
import styles from "./style";

export type HeaderBarProps = ViewProps & {
  currentPage?: string;
};

export function HeaderBar({ currentPage, ...otherProps }: HeaderBarProps) {
  const [nameHover, setNameHover] = useState(false);

  let leftList = [
    {
      title: "lleontan",
      hoverText: "谭亮亮",
      id: "",
      useNameHover: false,
    },
  ];
  const [rightList, setRightList] = useState([
    { title: "about", id: "about", hovered: false },
    { title: "gallery", id: "gallery", hovered: false },
  ]);
  const setRightListHovered = (id, value) => {
    setRightList((prevItems) =>
      prevItems.map((item) => {
        return item.id === id ? { ...item, hovered: value } : item;
      })
    );
  };
  const pushHoveredColorList = (element, ret) => {
    if (!ret) {
      ret = [];
    }
    if (element.hovered) {
      ret.push(styles.linkHovered);
    }
    return ret;
  };
  const pushHoveredLeftList = (ret) => {
    if (!ret) {
      ret = [];
    }
    if (nameHover) {
      ret.push(styles.leftLinksHovered);
    }
    return ret;
  };
  return (
    <View className="headerBar" style={styles.headerBar}>
      <div
        style={{
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <div
          style={styles.fixedWidthWrapper}
          onMouseLeave={(event) => {
            setNameHover(false);
          }}
        >
          {leftList.map((element, index) => (
            <Link
              key={index}
              href={"/" + element.id}
              style={pushHoveredLeftList([styles.leftLinks])}
              onMouseEnter={(event) => {
                setNameHover(true);
              }}
            >
              {element.useNameHover && nameHover
                ? element.hoverText
                : element.title}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {rightList.map((element, index) => (
          <div key={index} style={styles.fixedWidthRightWrapper}>
            <Link
              className="content-center"
              href={"/" + element.id}
              style={pushHoveredColorList(element, [styles.rightLinks])}
              onMouseEnter={(event) => {
                setRightListHovered(element.id, true);
              }}
              onMouseLeave={(event) => {
                setRightListHovered(element.id, false);
              }}
            >
              {element.title}
            </Link>
          </div>
        ))}
      </div>
    </View>
  );
}
