import axios from 'axios';
import type {AxiosResponse} from 'axios';
import {ImageData} from '../types/ImageData';

const UNSPLASH_ACCESS_KEY = 'VuwlgS2CYvnrr5u3WHy8Y_gpKmlNcB0ZWtl2-Iv12WE';

const formatApiResponse = (data: ImageData[]): ImageData[] =>
  data.map(image => ({
    id: image.id,
    description: image.description,
    urls: image.urls,
    user: {
      first_name: image.user.first_name,
      last_name: image.user.last_name,
      instagram_username: image.user.instagram_username,
      twitter_username: image.user.twitter_username,
    },
  }));

export const getImagesByPage = async (page: number): Promise<ImageData[]> => {
  try {
    const url = `https://api.unsplash.com/photos?client_id=${UNSPLASH_ACCESS_KEY}&page=${page}`;

    const response: AxiosResponse<ImageData[]> = await axios.get(url);

    return formatApiResponse(response.data);
  } catch (e) {
    return [];
  }
};
