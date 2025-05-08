"use client";

import LoginForm from "./login-form";
import SocialLogin from "./social-login";

const LoginModal = () => {
  return (
    <>
      <div className="space-y-6">
        <LoginForm />
        <SocialLogin />
      </div>
    </>
  );
};

export default LoginModal;
