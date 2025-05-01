import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

const fetchCoreValue = async () => {
  const data = await axios.get(`${baseURL}/api/about/corevalue`);
  return data.data;
};

const fetchCurriCulum = async () => {
  const data = await axios.get(`${baseURL}/api/about/curriculum`);
  return data.data;
};

const fetchExecutives = async () => {
  const data = await axios.get(`${baseURL}/api/about/executives`);
  return data.data;
};

const fetchActivityRecords = async () => {
  const data = await axios.get(`${baseURL}/api/about/activityrecords`);
  return data.data;
};

const AboutAPIs = {
  fetchCoreValue,
  fetchCurriCulum,
  fetchExecutives,
  fetchActivityRecords,
};

export default AboutAPIs;
