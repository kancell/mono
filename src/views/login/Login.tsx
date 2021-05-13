import React from 'react';
import background from 'assets/background.jpg';
import logo from 'assets/logo.svg';
import iconApple from 'assets/icon/icon-apple-black.svg';
import iconGoogle from 'assets/icon/icon-google.svg';
import iconWeibo from 'assets/icon/icon-weibo.svg';

function Login() {
  // const a:number = 1;
  return (
    <div className="w-screen h-screen flex justify-center bg-cover bg-bottom" style={{ backgroundImage: `url(${background})` }}>
      <header className="flex flex-col mt-20vh">
        <div className="box-content bg-white bg-opacity-92 w-90.75 h-95.5 py-10 rounded">
          <div className="h-24 mb-7.5">
            <img src={logo} className="w-44 h-16 mx-auto mb-3" alt="logo" />
            <p className="text-xs font-bold text-gray-500 text-center">鼠人的洞，用来放牢骚</p>
          </div>
          <div className="mb-5.5">
            <a href="1" className="block w-75 h-10 mx-auto text-center bg-blue-middle rounded-full leading-10 text-white text-sm font-bold mb-2">注册账号</a>
            <a href="2" className="block w-75 h-10 mx-auto text-center bg-white rounded-full leading-10 text-gray-500 text-sm font-bold">登录</a>
          </div>
          <div className="mb-4">
            <p className="text-center text-xs text-gray-500 mb-3.5">用其他账号开始</p>
            <div className="h-10 flex justify-center">
              <a href="3" className="flex w-10 h-10 mx-1 text-zero bg-6 bg-center bg-no-repeat bg-gray-200 rounded-full" style={{ backgroundImage: `url(${iconApple})` }}>通过Apple账号继续</a>
              <a href="3" className="flex w-10 h-10 mx-1 text-zero bg-6 bg-center bg-no-repeat bg-gray-200 rounded-full" style={{ backgroundImage: `url(${iconGoogle})` }}>通过Google账号继续</a>
              <a href="3" className="flex w-10 h-10 mx-1 text-zero bg-6 bg-center bg-no-repeat bg-gray-200 rounded-full" style={{ backgroundImage: `url(${iconWeibo})` }}>通过微博账号继续</a>
            </div>
          </div>
          <div className="w-75 mx-auto border border-gray-300">1</div>
        </div>
      </header>
    </div>
  );
}

export default Login;
