export interface ImageData {
  id: string;
  description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    first_name: string | null;
    last_name: string | null;
    instagram_username: string | null;
    twitter_username: string | null;
  };
}
