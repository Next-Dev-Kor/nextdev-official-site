import axios from "axios";

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
};

export default RecruitAPIs;
