import React from 'react';
import {FlatList, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import useUnsplashGallery from '../../hooks/use-unsplash-gallery';
import {ImageData} from '../../types/ImageData';
import GalleryImage from '../../components/gallery-image';
import routes from '../../utilities/routes';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.ImageGallery>;

const ImageGallery: React.FC<PropsT> = ({navigation}) => {
  const {images, loadNextPage} = useUnsplashGallery();

  const renderItem = ({item}: {item: ImageData}) => {
    const onImagePress = () => {
      navigation.navigate(routes.ImageDetail, item);
    };

    return (
      <GalleryImage uri={item.urls.small} onPress={onImagePress} size="small" />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={loadNextPage}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default ImageGallery;
