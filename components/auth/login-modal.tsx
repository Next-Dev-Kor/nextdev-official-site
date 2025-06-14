'use client';

import LoginForm from './login-form';
import SocialLogin from './social-login';
import FindForm from './find-form';
import Banner from '../common/banner';

const LoginModal = () => {
  return (
    <>
      <div className=" space-y-[13px]">
        <h1 className="text-center font-bold text-3xl">NEXTDEV</h1>
        <LoginForm />
        <SocialLogin />
        <FindForm />
        <Banner />
      </div>
    </>
  );
};

export default LoginModal;
