import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import background from 'assets/background.jpg';
import logo from 'assets/logo.svg';
import iconApple from 'assets/icon/icon-apple-black.svg';
import iconGoogle from 'assets/icon/icon-google.svg';
import iconWeibo from 'assets/icon/icon-weibo.svg';

import SignIn from './SignIn';

function Login() {
  const match = useRouteMatch();
  const [accountType, setAccountType] = useState('');
  // const a:number = 1;
  return (
    <div className="w-screen h-screen flex justify-center bg-cover bg-bottom" style={{ backgroundImage: `url(${background})` }}>
      {accountType}
      <header className="flex flex-col mt-20vh">
        <div className="box-content bg-white bg-opacity-92 w-90.75 h-95.5 py-10 rounded">
          <div className="h-23.25 mb-7.5">
            <img src={logo} className="w-44 h-16 mx-auto mb-3" alt="logo" />
            <p className="text-xs font-bold text-gray-500 text-center">鼠人的洞，用来放牢骚</p>
          </div>
          <BrowserRouter>
            <Switch>
              <Route path={`${match.url}/sign_in`}>
                <SignIn />
              </Route>
              <Route path="/">
                <div className="mb-5.5">
                  <Link to="1" onClick={() => setAccountType('signUp')} className="block w-75 h-10 mx-auto text-center bg-blue-middle rounded-full leading-10 text-white text-sm font-bold mb-2">注册账号</Link>
                  <Link to={`${match.url}/sign_in`} className="block w-75 h-10 mx-auto text-center bg-blue-middle bg-opacity-4 rounded-full leading-10 text-gray-500 text-sm font-bold">登录</Link>
                </div>
                <div>
                  <p className="text-center text-xs text-gray-500 mb-3.5">用其他账号开始</p>
                  <div className="h-10 flex justify-center">
                    <a href="3" className="login_other_account" style={{ backgroundImage: `url(${iconApple})` }}>通过Apple账号继续</a>
                    <a href="3" className="login_other_account" style={{ backgroundImage: `url(${iconGoogle})` }}>通过Google账号继续</a>
                    <a href="3" className="login_other_account" style={{ backgroundImage: `url(${iconWeibo})` }}>通过微博账号继续</a>
                    <a href="3" className="login_other_account" style={{ backgroundImage: `url(${iconWeibo})` }}>通过微博账号继续</a>
                  </div>
                </div>
              </Route>
            </Switch>
          </BrowserRouter>
          <div className="w-75 mx-auto pt-3.5 mt-4 border-r-0 border-l-0 border-b-0 border-t border-opacity-8 text-center text-black text-opacity-32 text-xs ">
            <p>五阴炽盛</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
