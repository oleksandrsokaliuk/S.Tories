import axios from "axios";
import { Story } from "../types/Story";

export interface StoryI {
  id: string;
  created_at: string;
  updated_at?: string;
  title: string;
  content: string;
  published: boolean;
  viewCount: number;
  authorId?: string;
  author: {
    firstName?: string | null;
    id: string;
    picture?: string | null;
    lastName?: string | null;
  };
}

export interface EndpointReturnI {
  message: string;
  responseObject: StoryI[];
}

interface StoriesEndpointsI {
  postStory: string;
  getStoryByStoryId: string;
  editStory: string;
  deleteStory: string;
  getAllStories: string;
  getStoriesByUserId: string;
  likeByStoryId: string;
  getMyLikes: string;
}

interface UserEndppointsI {
  getMe: string;
}

const storiesEndpoints: StoriesEndpointsI = {
  postStory: "/story", // post
  getStoryByStoryId: "/story/", // get
  editStory: "/story/", // put
  deleteStory: "/story/", // delete
  getAllStories: "/story/all", // get
  getStoriesByUserId: "/story/user/:userId", // get
  likeByStoryId: "/story/like/:id", // put
  getMyLikes: "/story/my/favourites",
};

const userEndpoints: UserEndppointsI = {
  getMe: "/auth/me",
};

export const server = axios.create({
  baseURL: "http://localhost:3001",
});

const createStory = async (
  story: Story,
  accessToken: any
): Promise<StoryI[]> => {
  const response: EndpointReturnI = await server.post(
    storiesEndpoints.postStory,
    story,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.responseObject; // ?
};

const getStoryByStoryId = async (id?: string): Promise<StoryI[]> => {
  const response: EndpointReturnI = await server.get(
    `${storiesEndpoints.getStoryByStoryId}${id}`
  );
  return response.responseObject;
};

// no type for body - need to change
const editStory = async (id: string, body: any) => {
  const response: EndpointReturnI = await server.put(
    `${storiesEndpoints.editStory}${id}`,
    body
  );
  return response.responseObject;
};

const deleteStory = async (id: string) => {
  const response: EndpointReturnI = await server.delete(
    `${storiesEndpoints.deleteStory}${id}`
  );
  return response.responseObject;
};

const getAllStories = async () => {
  const response = await server.get<EndpointReturnI>(
    storiesEndpoints.getAllStories
  );

  return response.data.responseObject;
};

const getStoriesByUserId = async (userId: string) => {
  const response: EndpointReturnI = await server.get(
    `${storiesEndpoints.getStoriesByUserId}${userId}`
  );
  return response.responseObject;
};

const likeByStoryId = async (storyId: string) => {
  const response: EndpointReturnI = await server.get(
    `${storiesEndpoints.likeByStoryId}${storyId}`
  );
  return response.responseObject;
};

const getMyLikes = async () => {
  const response: EndpointReturnI = await server.get(
    storiesEndpoints.getMyLikes
  );
  return response.responseObject;
};

const getMe = async (accessToken: string) => {
  const response: EndpointReturnI = await server.get(userEndpoints.getMe, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.responseObject;
};

const api = {
  createStory,
  getStoryByStoryId,
  editStory,
  deleteStory,
  getAllStories,
  getStoriesByUserId,
  likeByStoryId,
  getMyLikes,
  getMe,
};

export default api;
