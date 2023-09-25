import axios from "axios";
import { Story } from "../types/Story";

export const server = axios.create({
  baseURL: "http://localhost:3001",
});

const postStory = async (story: Story) => {
  const newStory = await server.post("/new-fanfic", story);
  return newStory; // ?
};

const getStories = async () => {
  const allStories = await server.get("getFanfics");
  return allStories.data;
};

const getStoryById = async (id?: string) => {
  const story = await server.get(`getFanficById/${id}`);
  return story.data[0];
};

const getMe = async (token: string) => {
  const authHeader = {
    Authorization: "Bearer " + token,
  };
  return await axios.get("http://localhost:3001/auth/me", {
    headers: authHeader,
  });
};

const api = {
  postStory,
  getStories,
  getStoryById,
  getMe,
};

export default api;
