import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { PostCard } from './components/PostCard';
import { mockPosts } from './data/mockPosts';
import type { Post, SortOption, PlatformFilter } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('latest');

  const filteredPosts = useMemo(() => {
    let filtered = [...mockPosts];

    // Apply platform filter
    if (platformFilter !== 'all') {
      filtered = filtered.filter((post) => post.platform === platformFilter);
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.content.toLowerCase().includes(searchLower) ||
          post.author.name.toLowerCase().includes(searchLower) ||
          post.author.username.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOption === 'latest') {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
      return b.likes - a.likes;
    });

    return filtered;
  }, [mockPosts, platformFilter, search, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Controls
          search={search}
          setSearch={setSearch}
          platformFilter={platformFilter}
          setPlatformFilter={setPlatformFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;