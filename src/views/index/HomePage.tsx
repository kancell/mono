import React, { useState } from 'react';

import background from 'assets/background.jpg';

function HomePage() {
  const [FullPageStage, setFullPageStage] = useState(false);
  return (
    <div className={`${FullPageStage ? 'w-96' : 'w-screen'}  h-screen flex justify-center flex-col items-center bg-cover bg-bottom`} style={{ backgroundImage: `url(${background})` }}>
      <div onClick={() => setFullPageStage(true)} onKeyDown={() => setFullPageStage(true)} className="w-28 h-10 my-1 text-white flex justify-center items-center border rounded">进入</div>
    </div>
  );
}

export default HomePage;
