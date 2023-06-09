import { ChangeEvent } from 'react';

type Props = {
  searchText: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchFilter({
  searchText,
  handleSearchChange,
}: Props) {
  return (
    <div className='w-full md:w-auto'>
      <input
        type='text'
        placeholder='search...'
        value={searchText}
        className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0'
        onChange={handleSearchChange}
      />
    </div>
  );
}
