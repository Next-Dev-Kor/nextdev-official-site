"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">또는</span>
        </div>
      </div>
      <Button
        type="button"
        onClick={() => signIn("kakao", { callbackUrl: "/" })}
        className="w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
      >
        카카오로 로그인
      </Button>
    </div>
  );
};

export default SocialLogin;
