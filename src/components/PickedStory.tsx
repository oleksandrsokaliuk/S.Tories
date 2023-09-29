import { useEffect, useState } from "react";
import api from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoryById } from "../redux/slices/storySlice";
import { AppDispatch } from "../redux/store";
import { Story } from "../types/Story";

const PickedStory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const storyId = useParams().id;
  // const pickedFanfic = useSelector((state) => state.fanficsSlice.fanfics).find(
  //   (fanfic) => fanfic._id == fanficId
  // );
  // console.log(pickedFanfic);
  const [story, setStory] = useState<Story>();

  const fetchOneStory = async () => {
    const response = await api.getStoryByStoryId(storyId);
    // setStory(response);
  };
  // useEffect(() => {
  //   try {
  //     dispatch(getStoryById(storyId));
  //     fetchOneStory();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <>
      <div>
        <h1>{story && story.articlesName}</h1>
        <h2>{story && story.description}</h2>
      </div>
    </>
  );
};

export default PickedStory;
