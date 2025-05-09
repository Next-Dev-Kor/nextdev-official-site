// app/(public)/recruit/page.tsx
import RecruitAPIs from "@/lib/apis/recruit";
import { RecruitPost } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EmailForm from "@/app/(route)/recruit/_components/email-form";
import RecruitPosts from "@/app/(route)/recruit/_components/recruit-posts";

const MOCK_DATA = [
  {
    id: 1,
    title: "IT 창업 및 웹/앱",
    description: "서비스에 관심이 많고",
  },
  {
    id: 2,
    title: "수도권 내에서",
    description: "활동이 가능한",
  },
  {
    id: 3,
    title: "열정적인",
    description: "성향을 가지신분",
  },
];

const RecruitPage = async () => {
  const posts = (await RecruitAPIs.getPosts()) as (RecruitPost & {
    position: string;
  })[];
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? Number(session.user.id) : null;

  return (
    <div className="py-24 flex flex-col gap-10 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <EmailForm userId={userId} />
      </div>
      <div>
        <div className="flex flex-col text-center gap-1">
          <span className="text-slate-700 text-lg">Recruitment target</span>
          <span className="font-semibold text-2xl text-black dark:text-white">
            모집 대상
          </span>
          <span className="text-md text-gray-500">
            아래 3가지 모두 해당되는 분이라면. 누구든 지원 가능해요!
          </span>
        </div>
        <div className="grid grid-cols-1 px-8 md:px-0 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
          {MOCK_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 items-center justify-center h-[240px] bg-[#181818] border rounded-2xl"
            >
              <span className="text-lg font-semibold text-black dark:text-white">
                {item.title}
              </span>
              <span className="text-md text-gray-500">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      <RecruitPosts posts={posts} />
    </div>
  );
};

export default RecruitPage;
