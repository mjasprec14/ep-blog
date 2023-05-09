'use client';
import { getPosts } from '@sanity-utils';
import { Post } from '@sanity-typings';
import { useState, useEffect } from 'react';

import { ArticlesCard } from '@components';

export default function Articles() {
  const [isShowMore, setShowMore] = useState<boolean>(false);
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts: Post[] = await getPosts();
      setArticles(posts);
    };

    fetchPosts();
  }, []);

  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center py-16 space-y-8'>
      <h1 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left  xs:tracking-[20px] pb-4 drop-shadow-lg'>
        Recent articles
      </h1>
      <div className='max-w-7xl min-h-screen space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {isShowMore
            ? articles?.map((post) => (
                <ArticlesCard
                  key={post?._id}
                  post={post}
                />
              ))
            : articles.slice(0, 9)?.map((post) => (
                <ArticlesCard
                  key={post?._id}
                  post={post}
                />
              ))}
        </div>

        <div className='grid'>
          <button
            onClick={() => {
              setShowMore((prev) => !prev);
            }}
            className='m-auto border py-2 px-3 rounded-lg hover:bg-black hover:text-white'
          >
            {!isShowMore ? 'Show more' : 'Show less'}
          </button>
        </div>
      </div>
    </section>
  );
}
