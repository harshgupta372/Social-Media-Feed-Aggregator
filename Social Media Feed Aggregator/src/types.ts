export interface Post {
  id: string;
  platform: 'twitter' | 'instagram';
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  shares: number;
  timestamp: string;
}

export type SortOption = 'latest' | 'popular';
export type PlatformFilter = 'all' | 'twitter' | 'instagram';