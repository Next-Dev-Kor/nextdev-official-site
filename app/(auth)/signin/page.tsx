"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 p-8 rounded-lg border">
        <h1 className="text-2xl font-bold text-center">로그인</h1>
        <Button
          onClick={() => signIn("kakao", { callbackUrl: "/" })}
          className="bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
        >
          카카오로 로그인
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
