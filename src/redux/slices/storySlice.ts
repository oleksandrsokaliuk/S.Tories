import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { Story } from "../../types/Story";

export const postStory = createAsyncThunk(
  "story/addStory",
  async (newStory: Story) => {
    try {
      const response = await api.postStory(newStory);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStories = createAsyncThunk("story/getStories", async () => {
  try {
    const response = await api.getStories();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getStoryById = createAsyncThunk(
  "story/getStoryById",
  async (id: string | undefined) => {
    try {
      const response = await api.getStoryById(id);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  stories: [] as Story[],
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
      state.stories.push({ ...action.payload });
    });
    builder.addCase(getStories.fulfilled, (state, action) => {
      state.stories = action.payload.reverse();
    });
    builder.addCase(getStoryById.fulfilled, (state, action) => {
      const thisStory = action.payload;
      const storyIndex = state.stories.findIndex(
        (story) => story._id === thisStory._id
      );
      state.stories[storyIndex] = thisStory;
    });
  },
});

// export const { addStory } = storySlice.actions;

export default storySlice.reducer;
