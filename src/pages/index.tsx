import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chessing</title>
        <meta
          name="description"
          content="Improve your chess game with finesse."
        />
        <link rel="icon" href="/chessing.png" />
      </Head>
      <section className="mb-40 bg-gradient-to-r from-violet-700 to-violet-500">
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:ml-auto">
              <button
                type="button"
                className="inline-block px-6 py-2.5 mr-2 bg-transparent text-pink-600 font-medium text-xs leading-tight uppercase rounded hover:text-pink-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </nav>

        <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-32 text-gray-800">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-gray-50">
                  Improve your chess game
                  <br />
                  <span className="text-pink-600">with finesse.</span>
                </h1>
                <p className="opacity-90 text-gray-50 text-xl">
                  Don&apos;t hold yourself back from the best techniques
                  available for learning chess. Sign up now for free to
                  transform your chess knowledge faster than ever before.
                </p>
              </div>
              <div className="mb-12 lg:mb-0 relative">
                <div
                  id="radius-shape-1"
                  className="absolute rounded-full shadow-lg"
                ></div>
                <div id="radius-shape-2" className="absolute shadow-lg"></div>
                <div className="block rounded-lg shadow-lg bg-glass px-6 py-12 md:px-12 bg-white">
                  <form>
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 mb-6 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                      placeholder="Email address"
                    />
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block px-6 py-2.5 mb-0 w-full bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn.discordapp.com/attachments/769296217166839818/959265601585561730/Nakamura_Hikaru_29290269410_cropped_cropped_cropped.png"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Hikaru Nakamura</h5>
              <h6 className="font-medium text-pink-600 mb-4">
                Chess Grandmaster
              </h6>
              <p className="mb-4">
                Chessing is responsible for all my wins against Magnus Carlsen
                in the last tournament. It&apos;s like Quizlet for chess... what
                a fantastic idea by the developers!
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn.discordapp.com/attachments/769296217166839818/959266570775965756/thumbnail_PXL_20210619_235510711_cropped.png"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Benjamin Moskalensky</h5>
              <h6 className="font-medium text-pink-600 mb-4">
                Amateur Chess Enthusiast
              </h6>
              <p className="mb-4">
                Chessing is AMAZING! I&apos;m messaging all my friends to try it
                out RIGHT NOW!!!!{' '}
              </p>
            </div>
            <div className="mb-0">
              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn.discordapp.com/attachments/769296217166839818/959265943782064178/index_cropped.png"
                  className="rounded-full shadow-lg w-32"
                />
              </div>
              <h5 className="text-lg font-bold mb-4">Anthony He</h5>
              <h6 className="font-medium text-pink-600 mb-4">
                Chess International Master
              </h6>
              <p className="mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                ></svg>
                This product truly transformed my chess learning journey.
                Addicted and can not stop using Chessing!
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://cdn.ttgtmedia.com/rms/computerweekly/Kasparov-29.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-3xl font-bold mb-6">
                    What makes chessing work?
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Chessing was designed by high-schoolers with PhDs in
                    neuroscience (with a focus in memory science). Our team
                    understands how important repitition is to memorize
                    something well!
                  </p>

                  <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        All openings included
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        First 15 moves of a line free
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Instant feedback
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Responsive developer team
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Mobile
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Made by the Chess community
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Scientifically proven results
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Used by professionals
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                          ></path>
                        </svg>
                        Amazing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
          <div className="container text-gray-800 px-4 md:px-12">
            <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6 bg-violet-600">
              <div className="flex flex-wrap justify-center text-center lg:text-left">
                <div className="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                  <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                    <div className="mb-10 lg:mb-0">
                      <h2 className="text-3xl font-bold">
                        So what are you waiting for?
                        <br />
                        <span className="text-pink-600">Sign up now.</span>
                      </h2>
                    </div>

                    <div className="mb-6 md:mb-0">
                      <div className="md:flex flex-row">
                        <input
                          type="text"
                          className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                          placeholder="Enter your email"
                        />
                        <button
                          type="submit"
                          className="inline-block px-7 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
