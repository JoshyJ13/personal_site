import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-auto items-front justify-between p-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black ">
      
      <Image
        src="/moon1.png"
        alt="Moon"
        width={300}
        height={300}
        className="absolute top-0 left-0 -ml-20 -mt-20"
      />

      <div className='flex flex-col w-1/3  inline-block rounded-lg border border-transparent px-5 py-4 justify-items-start bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-80'>
        <h1 className='text-3xl mb-1 font-bold start-0 w-auto'>Joshua Foster</h1>
        <h2 className='text-1xl start-0'>Graduate Student</h2>
        <h3 className='text-1xl'>Computer Science & Cybersecurity</h3>
      </div>

      <div className="mb-32 grid gap-x-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Education{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find out more about my Education!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Experience{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about my experience in Computer Science!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Research{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A look into the research projects I am working on.
          </p>
        </a>

        
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about me!
          </p>
        </a>
      </div>
    </main>
  )
}
