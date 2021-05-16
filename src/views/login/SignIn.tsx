import React, { useState } from 'react';

function SignIn() {
  const [emailOrName, setEmailOrName] = useState('');
  const [password, setPassword] = useState('');

  const login = (account:string, accountPassword:string) => {
    console.log(account, accountPassword);
  };

  return (
    <>
      <form>
        <div className="mb-2 text-sm">
          <div className="mx-auto w-75 border-r border-l border-t  border-gray-200 rounded box-content">
            <input value={emailOrName} onChange={(e) => setEmailOrName(e.target.value)} className="h-10 w-72.5 pl-2.5 box-content" placeholder="邮箱地址/用户名" />
          </div>
          <div className="mx-auto w-75 border border-gray-200 rounded box-content">
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="h-10 w-72.5 pl-2.5 box-content" placeholder="密码" />
          </div>
        </div>
      </form>
      <button onClick={() => login(emailOrName, password)} type="submit" className="block w-75 h-10 mx-auto text-center bg-blue-middle rounded-full leading-10 text-white text-sm font-bold focus:outline-none">登录</button>
      <div className="mx-auto w-75 h-4.75 text-xs text-right leading-4 text-gray-500 mt-2.5">
        <a href="1">忘记密码</a>
      </div>
    </>
  );
}

export default SignIn;
