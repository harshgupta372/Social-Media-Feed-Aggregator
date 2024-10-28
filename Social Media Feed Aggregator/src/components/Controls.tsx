import React from 'react';
import { Search } from 'lucide-react';
import { PlatformFilter, SortOption } from '../types';

interface ControlsProps {
  search: string;
  setSearch: (value: string) => void;
  platformFilter: PlatformFilter;
  setPlatformFilter: (value: PlatformFilter) => void;
  sortOption: SortOption;
  setSortOption: (value: SortOption) => void;
}

export function Controls({
  search,
  setSearch,
  platformFilter,
  setPlatformFilter,
  sortOption,
  setSortOption,
}: ControlsProps) {
  return (
    <div className="bg-white shadow-sm mb-6 p-4 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex space-x-4">
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value as PlatformFilter)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="all">All Platforms</option>
            <option value="twitter">Twitter</option>
            <option value="instagram">Instagram</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>
    </div>
  );
}