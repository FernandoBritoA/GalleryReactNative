import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import GalleryImage from '../../components/gallery-image';
import routes from '../../utilities/routes';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.ImageDetail>;

const ImageDetail: React.FC<PropsT> = ({route}) => {
  const {description, urls, user} = route.params;

  return (
    <ScrollView
      style={styles.container}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}>
      <GalleryImage uri={urls.full} size="large" />

      <View style={styles.textContainer}>
        {description && <Text style={styles.titleText}>{description}</Text>}
        <Text style={styles.bodyText}>About the Author{'\n'}</Text>

        {user.first_name || user.last_name ? (
          <Text
            style={
              styles.bodyText
            }>{`Name: ${user.first_name} ${user.last_name}`}</Text>
        ) : null}

        {user.twitter_username && (
          <Text
            style={
              styles.bodyText
            }>{`Twitter: @${user.twitter_username}`}</Text>
        )}
        {user.instagram_username && (
          <Text
            style={
              styles.bodyText
            }>{`Instagram: @${user.instagram_username}`}</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ImageDetail;
