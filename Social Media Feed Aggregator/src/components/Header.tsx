import React from 'react';
import { Layout } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Layout className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Social Feed</h1>
          </div>
        </div>
      </div>
    </header>
  );
}