import api, { StoryI } from "../api/api";
import { useSelector, useDispatch } from "react-redux";
// import { addStory } from "../redux/slices/fanficSlice";
import { useNavigate, Link } from "react-router-dom";
import { getStories } from "../redux/slices/storySlice";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../redux/store";
import OneStory from "./OneStory";
import DreamsGuardian from "./icons/DreamsGuardian";
import {
  StoriesBottomContainer,
  StoriesContainer,
  StoriesMiddleContainer,
  StoriesPageContainer,
  StoriesTopContainer,
} from "./read/styles/StoriesPage.styled";

const StoriesPage = () => {
  const allStories = useSelector(
    (state: RootState) => state.storySlice.allStories
  );
  const [topStories, setTopStories] = useState<StoryI[]>([]);
  const [middleStories, setMiddleStories] = useState<StoryI[]>([]);
  const [bottomStories, setBottomStories] = useState<StoryI[]>([]);
  // const fanficsList = allFanfics.reverse();
  // console.log(fanficsList);
  const navigation = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!allStories.length) {
      dispatch(getStories());
    } else {
      setTopStories(allStories.slice(0, 4));
      setMiddleStories(allStories.slice(4, 6));
      setBottomStories(allStories.slice(6, 10));
    }
  }, [allStories]);

  // useEffect(() => {
  //   console.log(allStories);
  // }, [allStories]);

  return (
    <StoriesPageContainer>
      <StoriesTopContainer>
        {topStories &&
          topStories.map((story: StoryI) => (
            <OneStory
              id={story.id}
              created_at={story.created_at}
              title={story.title}
              content={story.content}
              published={story.published}
              viewCount={story.viewCount}
              author={story.author}
            />
          ))}
      </StoriesTopContainer>
      <StoriesMiddleContainer>
        {middleStories[0] && (
          <OneStory
            id={middleStories[0].id}
            created_at={middleStories[0].created_at}
            title={middleStories[0].title}
            content={middleStories[0].content}
            published={middleStories[0].published}
            viewCount={middleStories[0].viewCount}
            author={middleStories[0].author}
          />
        )}
        <DreamsGuardian />
        {middleStories[1] && (
          <OneStory
            id={middleStories[1].id}
            created_at={middleStories[1].created_at}
            title={middleStories[1].title}
            content={middleStories[1].content}
            published={middleStories[1].published}
            viewCount={middleStories[1].viewCount}
            author={middleStories[1].author}
          />
        )}
      </StoriesMiddleContainer>
      <StoriesBottomContainer>
        {bottomStories &&
          bottomStories.map((story: StoryI) => (
            <OneStory
              id={story.id}
              created_at={story.created_at}
              title={story.title}
              content={story.content}
              published={story.published}
              viewCount={story.viewCount}
              author={story.author}
            />
          ))}
      </StoriesBottomContainer>
    </StoriesPageContainer>
  );
};

export default StoriesPage;
