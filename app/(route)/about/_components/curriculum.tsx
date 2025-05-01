"use client";

import { useState } from "react";

interface CurriculumItem {
  id: number;
  value: string;
}

interface CurriculumData {
  title: string;
  [key: string]: CurriculumItem[] | string;
}

interface CurriculumProps {
  data: CurriculumData;
}

const Curriculum = ({ data }: CurriculumProps) => {
  const [curriculum, setCurriculum] = useState("plan");
  const curriculumKey = data
    ? Object.keys(data).filter((key) => key !== "title")
    : null;

  return (
    <section className="flex flex-col justify-center items-center gap-[48px] mt-[275px]">
      <div className="flex flex-col items-center justify-center">
        <span className="text-[rgb(105,105,105)] text-[9px] sm:text-[14px] md:text-[17px]">
          Curriculum
        </span>
        <div className="text-[15px] sm:text-[22px] md:text-[29px]">
          {data?.title}
        </div>
      </div>
      <div className="flex flex-col items-center gap-[33px] w-full">
        <div className="flex flex-wrap justify-center w-[429px] sm:w-[502px] md:w-full gap-[26px]">
          {curriculumKey?.map((item) => (
            <button
              key={item}
              className={`w-[92px] sm:w-[150px] md:w-[12%] xl:w-[156px] h-[31px] sm:h-[60px] text-[10px] sm:text-[20px] text-[rgb(105,105,105)] ${
                curriculum === item
                  ? "bg-[rgb(34,34,32)] rounded-sm text-white font-bold"
                  : null
              } cursor-pointer`}
              onClick={() => setCurriculum(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          <ul className="flex flex-col items-center gap-3 flex-nowrap w-[100%] sm:px-[70px] pt-[30px] sm:pt-[70px]">
            {(data?.[curriculum] as CurriculumItem[])?.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center w-[270px] sm:w-[430px] md:w-[697px] h-[38px] sm:h-[72px] text-[14px] sm:text-[20px] md:text-[25px] bg-[rgb(34,37,40)] rounded-sm pl-[20px] whitespace-nowrap"
              >
                0{item.id}&nbsp;
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
