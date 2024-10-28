import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    platform: 'twitter',
    author: {
      name: 'Sarah Johnson',
      username: 'sarahj_tech',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    content: 'Just launched our new AI project! 🚀 The future of tech is here! #AI #Innovation',
    likes: 1234,
    shares: 234,
    timestamp: '2024-03-15T10:30:00Z',
  },
  {
    id: '2',
    platform: 'instagram',
    author: {
      name: 'Mike Chen',
      username: 'mikechen_photos',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    content: 'Capturing the perfect sunset in San Francisco 📸 #Photography #SanFrancisco',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    likes: 2891,
    shares: 145,
    timestamp: '2024-03-15T09:15:00Z',
  },
  {
    id: '3',
    platform: 'twitter',
    author: {
      name: 'Tech Insider',
      username: 'techinsider',
      avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150',
    },
    content: 'Breaking: Major breakthrough in quantum computing announced! Thread 🧵👇 #QuantumComputing #Tech',
    likes: 5678,
    shares: 890,
    timestamp: '2024-03-15T08:45:00Z',
  },
  {
    id: '4',
    platform: 'instagram',
    author: {
      name: 'Travel Adventures',
      username: 'wanderlust_daily',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    },
    content: 'Lost in the streets of Tokyo 🗼 #Japan #Travel',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
    likes: 3456,
    shares: 234,
    timestamp: '2024-03-15T07:20:00Z',
  },
];