import Social from "../assets/projectsImages/social.png";
import Covid from "../assets/projectsImages/covid.png";
import Youtubeclone from "../assets/projectsImages/youtubeclone.png";
import GymFitness from "../assets/projectsImages/gymFitness.png";
import GithubFinder from "../assets/projectsImages/githubFinder.png";
import ExpenseTracker from "../assets/projectsImages/expenseTracker.png";
import izCommerce from "../assets/projectsImages/izCommerce.png";

const Work = () => {
  return (
    <div
      id='work'
      className='w-full py-52 text-gray-300 bg-[#0a192f]  sm:py-0 pt-32 xs:pt-0 overflow-x-hidden overflow-y-hidden'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Work
          </p>
          <p className='py-6'>&#047;&#047; Check out some of my recent work </p>
        </div>

        {/* projects showcasing portfolio*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid item   */}
          {/* IZ Commerce 2.o */}
          <div
            style={{ backgroundImage: `url(${izCommerce})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}{" "}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                IZ Commerce 2.0
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://iz-commerce.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/wajahatabbas27/Amazon-2.0-E-commerce'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Social App */}
          <div
            style={{ backgroundImage: `url(${Social})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                IZ Social Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://iz-social-app.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/wajahatabbas27/IZ-Social-Media-Platform-Frontend'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Covid tracker */}
          <div
            style={{ backgroundImage: `url(${Covid})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                COVID-19 Tracker App
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='http://covid-tracker-by-wajahat-abbas.surge.sh/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/wajahatabbas27/Covid-19-Tracker'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Youtube Clone */}
          <div
            style={{ backgroundImage: `url(${Youtubeclone})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Youtube Clone
              </span>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://clone-b9180.web.app/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/wajahatabbas27/Youtube-Clone'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
          {/* Gym Fitness Application */}
          <div
            style={{ backgroundImage: `url(${GymFitness})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Gym Fitness App
              </span>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://wajahats-fitness-gym.netlify.app/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/wajahatabbas27/Gym-Fitness-Application'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* github Finder */}
          <div
            style={{ backgroundImage: `url(${GithubFinder})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Github Finder Application
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://githubfinder-az.netlify.app/user/wajahatabbas27'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/wajahatabbas27/Github-Finder'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
          <div
            style={{ backgroundImage: `url(${ExpenseTracker})` }}
            className='shadow-lg shadow-[#040c16] flex justify-center items-center group container rounded-md mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* Expense Tracker */}
            <div className='opacity-0 hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Expense Tracker App
              </span>
              <div className='pt-8 text-center'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='http://expense-tracker-app-by-wajahatabbas.surge.sh/'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/wajahatabbas27/React-Expense-Tracker-App'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
