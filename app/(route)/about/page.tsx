import Footer from "@/components/footer";
import { records, corevalue } from "@/constants/about";
import Image from "next/image";
import Curriculum from "@/app/(route)/about/_components/curriculum";
import {
  ActivityRecords,
  CoreValueData,
  Executive,
} from "@/app/(route)/about/types";

const AboutPage = async () => {
  async function getCoreValue() {
    const res = await fetch("http://localhost:3000/api/about/corevalue");
    return res.json();
  }

  async function getCurriculum() {
    const res = await fetch("http://localhost:3000/api/about/curriculum");
    return res.json();
  }

  async function getExecutives() {
    const res = await fetch("http://localhost:3000/api/about/executives");
    return res.json();
  }

  async function getActivityRecords() {
    const res = await fetch("http://localhost:3000/api/about/activityrecords");
    return res.json();
  }

  const [coreValueData, curriCulumData, executivesData, activityData] =
    await Promise.all([
      getCoreValue(),
      getCurriculum(),
      getExecutives(),
      getActivityRecords(),
    ]);

  const coreValue = coreValueData?.coreValue as CoreValueData;
  const executives = executivesData?.executives as Executive[];
  const activityRecords = activityData?.activity_records as ActivityRecords;

  return (
    <div className="w-full bg-black text-white">
      <section className="pt-[150px]">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[rgb(105,105,105)] text-[9px] sm:text-[14px] md:text-[17px]">
            Core Value
          </span>
          <div className="text-[15px] sm:text-[22px] md:text-[29px]">
            {coreValue?.title}
          </div>
          <p className="pt-[10px] text-[11px] sm:text-[16px] md:text-[19px]">
            {coreValue?.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] mt-[20px]">
          {coreValue?.core_value.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center relative w-[300px] sm:w-[380px] md:w-[30%] xl:w-[380px] h-[323px] bg-[rgb(24,24,24)] rounded-sm text-[27px] pt-9 group hover:bg-[rgba(0,0,0,0.6)]"
            >
              <div className="flex flex-col justify-center items-center absolute">
                {item.id}&nbsp;
                {item.title}
                <Image
                  alt={corevalue[idx].src}
                  src={corevalue[idx].src}
                  width={230}
                  height={230}
                  className="group-hover:blur-sm"
                />
              </div>
              <div className="relative flex flex-col w-[237px] opacity-0 group-hover:opacity-100 text-2xl text-center transition-opacity duration-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Curriculum data={curriCulumData} />

      <section className="flex flex-col items-center gap-15">
        <div className="flex flex-col items-center justify-center mt-[275px]">
          <span className="text-[rgb(105,105,105)] text-[9px] sm:text-[14px] md:text-[17px]">
            Executives
          </span>
          <h1 className="text-[15px] sm:text-[22px] md:text-[29px]">
            1기 임원진
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-[26px] lg:gap-[26px] w-full xl:w-[1200px]">
          {executives &&
            executives?.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center w-[40%] lg:w-[359px] h-[239px] sm:h-[423px] bg-[rgb(24,24,24)] rounded-sm"
              >
                <div className="flex gap-1 items-center justify-center mt-10 mb-4 font-bold">
                  <span className="text-[7px] sm:text-[17px] px-[6px] py-[7px]">
                    {item.position}
                  </span>
                  <span className="text-[16px] sm:text-[28px]">
                    {item.name}
                  </span>
                </div>
                <span className="text-[6px] sm:text-[15px] text-[rgb(188,188,188)]">
                  {item.university}, {item.team}
                </span>
                <p className="text-[6px] sm:text-[15px] px-[10px] py-[16px] mt-[16px] mb-[30px] bg-[rgb(34,34,32)] rounded-lg">
                  {item.message}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-[275px] mb-[200px] md:mb-[340px]">
        <div className="flex flex-col items-center justify-center mt-[275px]">
          <span className="text-[9px] sm:text-[14px] md:text-[17px] text-[rgb(105,105,105)]">
            Activity Records
          </span>
          <h1 className="text-[15px] sm:text-[22px] md:text-[29px]">
            1기 활동 레코드
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-[30px] mt-12 w-full px-[20px]">
          {activityRecords &&
            Object.values(activityRecords).map((item, idx) => (
              <div key={idx} className="w-full xl:w-[380px]">
                <div className="flex flex-col justify-center items-center gap-[8px] w-[204px] md:w-full xl:w-[380px] h-[150px] md:h-[210px] lg:h-[280px] bg-[rgb(24,24,24)] rounded-sm mb-[15px] mx-auto">
                  <div className="text-[10px] md:text-[16px] lg:text-[20px]">
                    {records[idx].title}
                  </div>
                  <span className="text-[24px] md:text-[38px] lg:text-[45px]">
                    {item}
                    {records[idx].number}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
