import {useEffect, useState} from 'react';
import {getImagesByPage} from '../modules/unsplashAPI';
import {ImageData} from '../types/ImageData';

type ReturnT = {
  loadNextPage: () => void;
  images: ImageData[];
};

const useUnsplashGallery = (): ReturnT => {
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageData[]>([]);

  const loadNextPage = () => setPage(page + 1);

  const getNewImages = async () => {
    const newImages = await getImagesByPage(page);

    setImages([...images, ...newImages]);
  };

  useEffect(() => {
    void getNewImages();
  }, [page]);

  return {images, loadNextPage};
};

export default useUnsplashGallery;
