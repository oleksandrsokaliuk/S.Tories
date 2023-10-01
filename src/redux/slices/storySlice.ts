import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api, { StoryI } from "../../api/api";
import { Story } from "../../types/Story";

interface postStoryI {
  story: Story;
  accessToken: any;
}

export const postStory = createAsyncThunk(
  "story/postStory",
  async (action: postStoryI) => {
    return await api.createStory(action.story, action.accessToken);
  }
);

export const getStories = createAsyncThunk("story/getStories", async () => {
  const response = await api.getAllStories();
  return response;
});

export const getStoryById = createAsyncThunk(
  "story/getStoryById",
  async (id?: string): Promise<StoryI[]> => {
    const response = await api.getStoryByStoryId(id);
    return response;
  }
);

export const editStory = createAsyncThunk(
  "story/editStory",
  async (id: string, body: any) => {
    try {
      const response = await api.editStory(id, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllStories = createAsyncThunk(
  "story/getAllStories",
  async () => {
    try {
      const response = await api.getAllStories();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteStory = createAsyncThunk(
  "story/deleteStory",
  async (id: string) => {
    try {
      const response = await api.deleteStory(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStoriesByUserId = createAsyncThunk(
  "story/getStoriesByUserId",
  async (userId: string) => {
    try {
      const response = await api.getStoriesByUserId(userId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const likeByStoryId = createAsyncThunk(
  "story/likeByStoryId",
  async (storyId: string) => {
    try {
      const response = await api.likeByStoryId(storyId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMyLikes = createAsyncThunk("story/getMyLikes", async () => {
  try {
    const response = await api.getMyLikes();
    return response;
  } catch (error) {
    console.log(error);
  }
});

// добавить все thunks в reducer storySlice

interface StoriesState {
  postedStory: StoryI[];
  myStories: string;
  allStories: StoryI[];
  storyById: StoryI[];
}

const initialState: StoriesState = {
  postedStory: [],
  myStories: "",
  allStories: [],
  // as Story[],
  storyById: [],
};

export const storySlice = createSlice({
  name: "storiesList",
  initialState,
  reducers: {
    // addFanfic: (state, action) => {
    //   console.log(action.payload);
    //   state.fanfics.push({ ...action.payload });
    //   console.log(current(state));
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(postStory.fulfilled, (state, action) => {
      state.postedStory = action.payload;
    });
    builder.addCase(getStories.fulfilled, (state, action) => {
      state.allStories = action.payload;
    });
    builder.addCase(getStoryById.fulfilled, (state, action) => {
      state.storyById = action.payload;
    });
  },
});

// export const { addStory } = storySlice.actions;

export default storySlice.reducer;
