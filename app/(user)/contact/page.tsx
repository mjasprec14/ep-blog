'use client';
import { useState } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { SlLocationPin, SlPhone } from 'react-icons/sl';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    region: '',
    message: '',
  });

  console.log(formValues);

  return (
    <section id='contact'>
      <div className='max-w-7xl mx-auto mt-1 pb-4 px-2 xs:px-2 md:px-10'>
        <h1 className='text-gray-500 text-sm text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4 drop-shadow-lg font-semibold'>
          Get in touch
        </h1>

        <div className=' min-h-screen w-full grid grid-cols-1 md:grid-cols-2 '>
          <div className='px-4'>
            <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4 drop-shadow-lg font-semibold'>
              Our Contact Info
            </h2>
            <div className='space-y-6 '>
              <div className='flex flex-row items-center space-x-6 flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter min-w-[360px] w-full h-fit text-gray-500 dark:text-white'>
                <SlPhone size={30} />
                <span className='text-lg '>+639151321954</span>
              </div>
              <div className='flex flex-row items-center space-x-6 flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter min-w-[360px] w-full h-fit text-gray-500 dark:text-white'>
                <TfiEmail size={30} />
                <span className='text-lg '>me@gmail.com</span>
              </div>
              <div className='flex flex-row items-center space-x-6 flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter min-w-[360px] w-full h-fit text-gray-500 dark:text-white'>
                <SlLocationPin size={30} />
                <span className='text-lg '>Philippines</span>
              </div>
            </div>
          </div>
          <div className=' px-4'>
            <h2 className='text-gray-500 text-xs text-center uppercase tracking-[12px] xs:text-left xs:tracking-[20px pt-8 pb-4 drop-shadow-lg font-semibold'>
              Send us a message
            </h2>
            <form className='w-full flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5 '>
              <label htmlFor='email'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Email
                </span>
                <input
                  id='email'
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                  placeholder='Your email'
                  required
                  type='email'
                  className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>

              <label htmlFor='name'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Name
                </span>
                <input
                  id='name'
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                  placeholder='Your name'
                  required
                  type='text'
                  className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>

              <label htmlFor='company'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Company
                </span>
                <input
                  id='company'
                  value={formValues.company}
                  onChange={(e) =>
                    setFormValues({ ...formValues, company: e.target.value })
                  }
                  placeholder='Your company'
                  required
                  type='text'
                  className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>

              <label htmlFor='phone'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Phone
                </span>
                <input
                  id='phone'
                  value={formValues.phone}
                  onChange={(e) =>
                    setFormValues({ ...formValues, phone: e.target.value })
                  }
                  placeholder='Your phone'
                  required
                  type='text'
                  className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>

              <label htmlFor='region'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Region
                </span>
                <input
                  id='region'
                  value={formValues.region}
                  onChange={(e) =>
                    setFormValues({ ...formValues, region: e.target.value })
                  }
                  placeholder='Your region'
                  required
                  type='text'
                  className='w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>

              <label htmlFor='message'>
                <span className='font-semibold text-base text-gray-700 dark:text-white'>
                  Message
                </span>
                <input
                  id='message'
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                  placeholder='Your message'
                  required
                  type='text'
                  className='w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0'
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
