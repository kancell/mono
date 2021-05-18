import React, { useState } from 'react';

import Article from 'views/article/Article';
import background from 'assets/background.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
  const [FullPageStage, setFullPageStage] = useState(false);
  return (
    <div className="flex overflow-x-hidden">
      <div
        className={`${FullPageStage ? 'w-0 sm:w-36 lg:w-96' : 'w-screen'}  h-screen flex justify-center flex-col items-center bg-cover bg-bottom transition-all`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          onClick={() => setFullPageStage(true)}
          onKeyDown={() => setFullPageStage(true)}
          className="w-24 h-10 my-1 text-white flex justify-center transition-colors items-center border rounded cursor-pointer hover:bg-white hover:text-gray-500"
        >
          RECORD
        </div>
        <Link to="login">
          <div
            className="w-24 h-10 my-1 text-white flex justify-center transition-colors items-center border rounded cursor-pointer hover:bg-white hover:text-gray-500"
          >
            LOGIN
          </div>
        </Link>
      </div>
      <div className={`${FullPageStage ? 'flex-grow' : 'w-0'}  h-screen flex justify-center flex-col items-center bg-gray-100`}>
        <Article />
      </div>
    </div>
  );
}

export default HomePage;
