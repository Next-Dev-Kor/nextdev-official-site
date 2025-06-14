'use client';

const FindForm = () => {
  return (
    <div className="flex gap-5 justify-center text-sm text-muted-foreground">
      <div>
        <button className="cursor-pointer">비밀번호 찾기</button>
      </div>
      <span>|</span>
      <div>
        <button className="cursor-pointer">아이디 찾기</button>
      </div>
      <span>|</span>
      <div>
        <button className="cursor-pointer">회원가입</button>
      </div>
    </div>
  );
};

export default FindForm;
