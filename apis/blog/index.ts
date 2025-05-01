export async function getArticles() {
  const res = await fetch("http://localhost:3000/api/blog/article");
  return res.json();
}

export async function getActivities() {
  const res = await fetch("http://localhost:3000/api/blog/activity");
  return res.json();
}

const BlogAPIs = {
  getArticles,
  getActivities,
};

export default BlogAPIs;
