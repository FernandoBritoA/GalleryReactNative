import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './index.styles';

type PropsT = {
  uri: string;
  onPress?: () => void;
  size: 'large' | 'small';
};

const GalleryImage: React.FC<PropsT> = ({uri, size, onPress}) => {
  const isFullSizeImage = size === 'large';
  const dimensionsStyle = isFullSizeImage
    ? styles.largeImage
    : styles.smallImage;

  return (
    <TouchableOpacity onPress={onPress} disabled={isFullSizeImage}>
      <Image source={{uri}} style={[styles.baseImage, dimensionsStyle]} />
    </TouchableOpacity>
  );
};

export default GalleryImage;
