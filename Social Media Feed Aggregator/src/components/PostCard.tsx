import React from 'react';
import { Twitter, Instagram, Heart, Share2 } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const PlatformIcon = post.platform === 'twitter' ? Twitter : Instagram;
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-500">@{post.author.username}</p>
              </div>
              <PlatformIcon className={`h-5 w-5 ${post.platform === 'twitter' ? 'text-sky-500' : 'text-pink-500'}`} />
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-gray-900">{post.content}</p>
        
        {post.image && (
          <div className="mt-3">
            <img
              src={post.image}
              alt="Post content"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-pink-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span>{post.likes.toLocaleString()}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>{post.shares.toLocaleString()}</span>
            </button>
          </div>
          <time className="text-sm">
            {new Date(post.timestamp).toLocaleDateString()}
          </time>
        </div>
      </div>
    </div>
  );
}