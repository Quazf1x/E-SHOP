type gameListTypes = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: object[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: object;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game?: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: object[];
  parent_platforms: object[];
  genres: object[];
  stores: object[];
  clip?: null;
  tags: object[];
  esrb_rating: object;
  short_screenshots: object[];
};

type gamePropTypes = {
  gameList: gameListTypes[];
};

export default gamePropTypes;