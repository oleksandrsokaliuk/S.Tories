import axios from "axios";
import { Story } from "../types/Story";

const server = axios.create({
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

const getStoryById = async (id: string | undefined) => {
  const story = await server.get(`getFanficById/${id}`);
  return story.data[0];
};

const api = {
  postStory,
  getStories,
  getStoryById,
};

export default api;
