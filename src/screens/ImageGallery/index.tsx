import React from 'react';
import {View} from 'react-native';
import useUnsplashGallery from '../../hooks/use-unsplash-gallery';
//import styles from './index.styles';

type PropsT = {};

const ImageGallery: React.FC<PropsT> = ({}) => {
  useUnsplashGallery();

  return <View />;
};

export default ImageGallery;
