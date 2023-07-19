import {useEffect} from 'react';
import {getImagesByPage} from '../modules/unsplashAPI';

const useUnsplashGallery = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const images = await getImagesByPage(1);

        console.log(images);
      } catch (e) {
        console.log('ERROR');
        console.log(e);
      }
    };

    void fetch();
  }, []);
};

export default useUnsplashGallery;
