import React from 'react';
import {Image} from 'react-native';
//import styles from './index.styles';

type PropsT = {
  uri: string;
  size: 'large' | 'small';
};

const GalleryImage: React.FC<PropsT> = ({uri, size}) => (
  <Image source={{uri}} />
);

export default GalleryImage;
