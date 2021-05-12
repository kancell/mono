import React from 'react';
import background from 'assets/background.jpg';

function Login() {
  // const a:number = 1;
  return (
    <div className="w-screen h-screen flex justify-center bg-cover bg-bottom" style={{ backgroundImage: `url(${background})` }}>
      <header className="flex flex-col mt-20vh">
        <div className="box-content bg-white bg-opacity-92 w-90.75 h-95.5 py-10 rounded">
          <img src={background} className="h-12 w-12" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Login;
