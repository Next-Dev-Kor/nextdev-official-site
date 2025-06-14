'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

import Image from 'next/image';
import kakao from '../../public/kakao.png';

const SocialLogin = () => {
  return (
    <div className="space-y-[10px]">
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
        onClick={() => signIn('kakao', { callbackUrl: '/' })}
        className="w-full bg-[#FEE500] text-black hover:bg-[#FEE500]/90 h-15 cursor-pointer"
      >
        <Image src={kakao} alt="kakao" width={18} height={18} /> 카카오 로그인
      </Button>
    </div>
  );
};

export default SocialLogin;
