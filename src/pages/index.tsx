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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
