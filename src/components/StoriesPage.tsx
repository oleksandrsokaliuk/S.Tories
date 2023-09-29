import api from "../api/api";
import { useSelector, useDispatch } from "react-redux";
// import { addStory } from "../redux/slices/fanficSlice";
import { useNavigate, Link } from "react-router-dom";
import { getStories } from "../redux/slices/storySlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";

const StoriesPage = () => {
  const allStories = useSelector(
    (state: RootState) => state.storySlice.allStories
  );
  // const fanficsList = allFanfics.reverse();
  // console.log(fanficsList);
  const navigation = useNavigate();
  console.log(allStories);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!allStories.length) {
      dispatch(getStories());
    }
    console.log({ allStoriesLength: allStories.length });
  }, []);
  // useEffect(() => {
  //   console.log(allStories);
  // }, [allStories]);

  return (
    <>
      <div>
        {allStories &&
          allStories.map((story) => (
            <div key={story.id}>
              {/* <Link to={`${fanfic._id}`}>{fanfic.articlesName}</Link> */}
              <h2>{story.title}</h2>
            </div>
          ))}
      </div>
      <button
        onClick={() => {
          navigation("/addfanfic");
        }}
        className="add-fanfic"
      >
        +
      </button>
    </>
  );
};

export default StoriesPage;
