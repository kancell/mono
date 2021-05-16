import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <form>
        <div className="mb-2 text-sm">
          <div className="mx-auto w-75 border-r border-l border-t  border-gray-200 rounded box-content">
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 w-72.5 pl-2.5 box-content" placeholder="邮箱地址" />
          </div>
          <div className="mx-auto w-75 border border-gray-200 rounded box-content">
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="h-10 w-72.5 pl-2.5 box-content" placeholder="密码" />
          </div>
        </div>
      </form>
      <a href="2" className="block w-75 h-10 mx-auto text-center bg-blue-middle rounded-full leading-10 text-white text-sm font-bold">
        下一步
      </a>
    </>
  );
}

export default SignUp;
