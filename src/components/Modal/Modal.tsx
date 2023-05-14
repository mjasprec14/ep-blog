'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { IconContext } from 'react-icons';

type Props = {
  customClass: string;
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  customClass,
  children,
  toggleModal,
  setToggleModal,
}: Props) {
  return (
    <>
      {toggleModal ? (
        <div className='fixed min-h-screen w-full z-50 top-0 left-0 bg-black/50 grid place-items-center content-center'>
          <div
            className={`relative border border-gray-200 shadow-lg bg-white ${customClass}`}
          >
            <div
              className='absolute top-3 right-3 '
              onClick={() => setToggleModal((prev) => !prev)}
            >
              <IconContext.Provider
                value={{ className: 'text-gray-300 cursor-pointer' }}
              >
                <GrFormClose size={20} />
              </IconContext.Provider>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
