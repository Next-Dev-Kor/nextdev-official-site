import axios from "axios";
import { RecruitPost } from "@prisma/client";

export async function getRecruitDetail(id: string) {
  const res = await axios.get<RecruitPost>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/recruit/${id}`
  );
  return res.data;
}

export async function updateEmail(email: string, userId: number) {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/recruit/notification`,
    {
      email,
      userId,
    }
  );
  return res.data;
}

const RecruitAPIs = {
  updateEmail,
  getRecruitDetail,
};

export default RecruitAPIs;
