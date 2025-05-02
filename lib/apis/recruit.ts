export async function getPosts() {
  const res = await fetch("http://localhost:3000/api/recruit");
  return res.json();
}

const RecruitAPIs = {
  getPosts,
};

export default RecruitAPIs;
