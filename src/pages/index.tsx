/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Header from '../components/header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-screen bg-[url('https://cdn.discordapp.com/attachments/943206869856571432/959256017491873802/unknown.png')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-8xl font-bold text-white">
              Improve your chess game{' '}
              <span className="italic text-pink-300"> with finesse.</span>
            </h1>
            <p className="mb-5 text-white text-3xl">
              Don&apos;t hold yourself back from the best techniques available
              for learning chess. Use Chessing and start training like the pros
              immediately.
            </p>
            <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-8 px-16 rounded-full inline-flex items-center text-3xl my-10">
              <span>Let&apos;s get started</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
