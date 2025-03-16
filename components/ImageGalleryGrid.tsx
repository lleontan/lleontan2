import React from "react";
import { View, StyleSheet } from "react-native";
import ImageTile from "./ImageTile";
import ImageGalleryGridTile from "./ImageGalleryGridTile";
import styles from "./style";

interface ImageGalleryGridProps {
  columns: number;
  images: any[];
  onClickCallback;
}

const ImageGalleryGrid = ({
  columns,
  images,
  onClickCallback,
}: ImageGalleryGridProps) => {
  const gridColumns = `repeat(${columns}, 100px)`;

  return (
    <View style={styles.ImageGalleryGrid}>
      {images.map((image, index) => (
        <ImageGalleryGridTile
          key={index}
          url={image.url}
          alt={image.alt}
          onClickCallback={onClickCallback}
        />
      ))}
    </View>
  );
};

export default ImageGalleryGrid;
