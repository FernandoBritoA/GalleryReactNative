import routes from '../../utilities/routes';
import {ImageData} from '../ImageData';

export type RootStackParamList = {
  [routes.ImageGallery]: undefined;
  [routes.ImageDetail]: ImageData;
};
