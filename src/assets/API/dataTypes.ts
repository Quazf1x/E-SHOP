type GameListTypes = {
  count: number;
  results: GameDataType[];
};

type HomeGameScreensTypes = {
  count: number;
  description: string;
  next: string;
  results: ScreenDetails[];
};

type GameScreensTypes = {
  count: number;
  results: ScreenDetails[];
};

type ScreenDetails = {
  background_image?: string;
  image?: string;
  id: number;
};

type GameDetailsTypes = {
  description_raw: string;
  parent_platforms: GamePlatformsType[];
  id: number;
  slug: string;
  name: string;
  nameOriginal: string;
  description: string;
  metacritic: number;
  metacriticPlatforms: object;
  released: string;
  tba: boolean;
  updated: Date;
  backgroundImage: string;
  backgroundImageAdditional: string;
  website: string;
  rating: number;
  ratingTop: number;
  ratings: object[];
  reactions: { [key: string]: number };
  added: number;
  addedByStatus: object;
  playtime: number;
  screenshotsCount: number;
  moviesCount: number;
  creatorsCount: number;
  achievementsCount: number;
  parentAchievementsCount: number;
  redditURL: string;
  redditName: string;
  redditDescription: string;
  redditLogo: string;
  redditCount: number;
  twitchCount: number;
  youtubeCount: number;
  reviewsTextCount: number;
  ratingsCount: number;
  suggestionsCount: number;
  alternativeNames: any[];
  metacriticURL: string;
  parentsCount: number;
  additionsCount: number;
  gameSeriesCount: number;
  userGame: null;
  reviewsCount: number;
  saturatedColor: string;
  dominantColor: string;
  parentPlatforms: object[];
  platforms: object[];
  stores: object[];
  developers: GameDeveloperType[];
  genres: object[];
  tags: GameTagType[];
  publishers: object[];
  esrbRating: object;
  clip: null;
  descriptionRaw: string;
};

type GameDataType = {
  [key: string]: string | null | number | boolean | object;
  background_image: string;
  name: string;
  id: number;
};

type GameTagType = {
  id: number;
  name: string;
};

type GameDeveloperType = {
  name: string;
};

type GamePlatformsType = {
  platform: {
    name: string;
  };
};

export type {
  GameListTypes,
  GameDetailsTypes,
  GameScreensTypes,
  HomeGameScreensTypes,
  ScreenDetails,
  GameDeveloperType,
  GamePlatformsType,
  GameTagType,
};
