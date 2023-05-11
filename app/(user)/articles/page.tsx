'use client';
import { getPosts } from '@sanity-utils';
import { Post } from '@sanity-typings';
import { useState, useEffect, ChangeEvent } from 'react';

import { ArticlesCard, SearchFilter } from '@components';

export default function Articles() {
  const [isShowMore, setShowMore] = useState<boolean>(false);
  const [articles, setArticles] = useState<Post[]>([]);

  const [searchText, setSearchText] = useState<string>('');
  const [searchedResult, setSearchedResult] = useState<Post[]>([]);
  const [searchTimeOut, setSearchTimeOut] = useState<any>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts: Post[] = await getPosts();
      setArticles(posts);
    };

    fetchPosts();
  }, []);

  const filterArticles = (text: string): Post[] => {
    const regex = new RegExp(text, 'i');

    return articles.filter(
      (article) =>
        regex.test(article.title) ||
        regex.test(article.author.name) ||
        regex.test(article.categories[0].title)
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    clearTimeout(searchTimeOut);
    setSearchText(e.target.value);

    setSearchTimeOut(
      setTimeout(() => {
        setSearchedResult(filterArticles(e.target.value));
      }, 500)
    );
  };

  const handleCategoryClick = (category: string): void => {
    setSearchText(category);
    setSearchedResult(filterArticles(category));
  };

  return (
    <section className='min-h-screen max-w-7xl mx-auto flex py-16'>
      <div className='mx-auto flex flex-col space-y-6'>
        <div className='flex flex-col-reverse gap-6 md:flex-row items-center md:items-baseline md:justify-between '>
          <h1 className='text-gray-500 text-xs text-center md:text-left uppercase tracking-[12px] xs:text-left xs:tracking-[20px] drop-shadow-lg'>
            Recent articles
          </h1>
          <SearchFilter handleSearchChange={handleSearchChange} />
        </div>

        <div className='min-h-screen space-y-8 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {searchText
              ? searchedResult
                  .slice(0, isShowMore ? searchedResult.length : 9)
                  .map((result) => (
                    <ArticlesCard
                      key={result?._id}
                      post={result}
                    />
                  ))
              : articles
                  .slice(0, isShowMore ? articles.length : 9)
                  .map((result) => (
                    <ArticlesCard
                      key={result?._id}
                      post={result}
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
      </div>
    </section>
  );
}
