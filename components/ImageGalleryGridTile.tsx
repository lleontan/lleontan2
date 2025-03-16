import React from "react";
import { View, type ViewProps, Image } from "react-native";
import styles from "./style";

interface ImageTileProps {
  url: any;
  alt: string;
  onClickCallback?: (url: string) => void;
}

const ImageGalleryGridTile = ({ url, onClickCallback }: ImageTileProps) => {
  const handleImageClick = () => {
    if (onClickCallback) {
      onClickCallback(url);
    }
  };

  return (
    <View>
      <div className="image-tile" onClick={handleImageClick}>
        <Image source={url} alt="Image" style={styles.ImageGalleryGridTileImage}/>
      </div>
    </View>
  );
};

export default ImageGalleryGridTile;
