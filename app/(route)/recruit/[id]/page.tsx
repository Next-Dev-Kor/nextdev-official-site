import { getRecruitDetail } from "@/apis/recruit";
import { getPositionImage } from "@/utils/position";
import Image from "next/image";

type Params = Promise<{ id: string }>;

const RecruitDetailPage = async (props: { params: Params }) => {
  const params = await props.params;

  const post = await getRecruitDetail(params.id);

  return (
    <div className="pt-40 flex flex-col gap-16 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <div className="w-full h-[400px] relative">
        <Image
          src={getPositionImage(post.position)}
          alt={post.position}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">
          {post.title}
        </h1>
        <div className="mb-6 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
          <p className="text-gray-600 text-center lg:text-left">
            포지션: {post.position}
          </p>
          <div className="text-sm text-gray-500 text-center lg:text-left flex gap-2 items-center justify-center">
            <span>{new Date(post.startDate).toLocaleDateString()}~</span>
            <span>{new Date(post.endDate).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="mb-6 text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-4">상세 설명</h2>
          <p className="whitespace-pre-wrap leading-relaxed text-gray-700 lg:pr-20">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruitDetailPage;
