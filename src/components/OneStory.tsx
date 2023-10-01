import { FC } from "react";
import { StoryI } from "../api/api";
import {
  StoryContainer,
  StoryDescriptionContainer,
  StoryHeader,
  StoryHeaderContainer,
  StoryHeaderLikes,
} from "./read/styles/StoriesPage.styled";

const OneStory: FC<StoryI> = ({
  id,
  created_at,
  updated_at,
  title,
  content,
  published,
  viewCount,
  authorId,
  author,
}) => {
  return (
    <StoryContainer key={id}>
      {/* <Link to={`${fanfic._id}`}>{fanfic.articlesName}</Link> */}
      <StoryHeaderContainer>
        <StoryHeader>{title}</StoryHeader>
        {/* <p>{created_at}</p>
      <p>{content}</p>
      <p>{published}</p> */}
        <StoryHeaderLikes>{viewCount}</StoryHeaderLikes>
      </StoryHeaderContainer>
      <StoryDescriptionContainer>
        {author.picture !== null && <img src={author.picture} alt="user" />}
        {author.firstName && author.lastName !== null && (
          <h4>{`${author.firstName} ${author.lastName}`}</h4>
        )}
      </StoryDescriptionContainer>
      {/* починить, чтобы вместе фотки не приходил null, добавить рандомные картинки для аватарок на сервере  */}
    </StoryContainer>
  );
};

export default OneStory;
