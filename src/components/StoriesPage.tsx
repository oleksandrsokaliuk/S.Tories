import api from "../api/api";
import { useSelector, useDispatch } from "react-redux";
// import { addStory } from "../redux/slices/fanficSlice";
import { useNavigate, Link } from "react-router-dom";
import { getStories } from "../redux/slices/storySlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";

const StoriesPage = () => {
  const allFanfics = useSelector(
    (state: RootState) => state.storySlice.stories
  );
  // const fanficsList = allFanfics.reverse();
  // console.log(fanficsList);
  const navigation = useNavigate();
  console.log(allFanfics);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStories());
  }, []);

  return (
    <>
      <div className="fanfics-main-div">
        {allFanfics &&
          allFanfics.map((fanfic) => (
            <div key={fanfic._id} className="fanfik-box">
              <Link to={`${fanfic._id}`} className="fanfik-box__main-header">
                {fanfic.articlesName}
              </Link>
              <h2 className="fanfik-box__second-header">
                {fanfic.description}
              </h2>
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
