import { useEffect, useState } from "react";
import {
  FlexTitle,
  FlexDescription,
  HomeContainer,
  SamplesMainContainer,
  SampleContainer,
  SampleParagraph,
  SamplesWideContainer,
  CloudImageLeft,
  CloudImageRight,
  CloudsContainer,
  MainHeader,
} from "./styles/HomePage.styles";
import Cloud from "./../../assets/cloud.png";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IUser } from "../../redux/slices/userSlice";
import LeftCloud from "../icons/LeftCloud";
import RightCloud from "../icons/RightCloud";
import Skyline from "../icons/Skyline";

interface StoryI {
  id?: string;
  title: string;
  content: string;
  created_at?: string;
  viewCount?: number;
  author?: string;
  likes?: number;
}

const WelcomePage = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const mockStories: StoryI[] = [
    {
      id: "1",
      title: "A Journey to the Stars",
      content:
        "I found myself flying through the night sky, surrounded by twinkling stars. It was a dream come true!",
      created_at: "2023-08-02",
      viewCount: 120,
      author: "Dreamer123",
      likes: 45,
    },
    {
      id: "2",
      title: "Underwater Adventure",
      content:
        "In my dream, I was exploring the depths of the ocean, swimming alongside colorful fish and mysterious creatures.",
      created_at: "2023-08-03",
      viewCount: 98,
      author: "DeepSeaDreamer",
      likes: 30,
    },
    {
      id: "3",
      title: "The Magical Forest",
      content:
        "I stumbled upon an enchanted forest where trees whispered secrets, and fireflies lit up the night like tiny lanterns.",
      created_at: "2023-08-04",
      viewCount: 150,
      author: "ForestExplorer",
      likes: 55,
    },
    {
      id: "4",
      title: "Lost in Time",
      content:
        "I found myself in a place where time had no meaning. Past, present, and future merged into one surreal experience.",
      created_at: "2023-08-05",
      viewCount: 80,
      author: "TimeTraveler",
      likes: 22,
    },
    {
      id: "5",
      title: "City of Dreams",
      content:
        "I explored a city where buildings were made of dreams, and the streets echoed with the whispers of forgotten aspirations.",
      created_at: "2023-08-06",
      viewCount: 110,
      author: "DreamWalker",
      likes: 40,
    },
    {
      id: "6",
      title: "In the Clouds",
      content:
        "I soared through the sky, surrounded by fluffy clouds that transformed into mythical creatures and familiar faces.",
      created_at: "2023-08-07",
      viewCount: 135,
      author: "CloudSurfer",
      likes: 60,
    },
    {
      id: "7",
      title: "Beneath the Waves",
      content:
        "I descended into the deep ocean, discovering a hidden world of bioluminescent wonders and ancient shipwrecks.",
      created_at: "2023-08-08",
      viewCount: 92,
      author: "DeepDiver",
      likes: 27,
    },
    {
      id: "8",
      title: "The Enchanted Garden",
      content:
        "I stepped into a garden where plants sang melodies and animals held conversations. Nature itself was alive with magic.",
      created_at: "2023-08-09",
      viewCount: 155,
      author: "GardenExplorer",
      likes: 75,
    },
    {
      id: "9",
      title: "A Night in Paris",
      content:
        "I wandered the streets of Paris at night, each cobblestone telling stories of love, art, and romance.",
      created_at: "2023-08-10",
      viewCount: 70,
      author: "ParisDreamer",
      likes: 19,
    },
    {
      id: "10",
      title: "Through the Looking Glass",
      content:
        "I entered a world where mirrors were portals to parallel dimensions, and reflections had a life of their own.",
      created_at: "2023-08-11",
      viewCount: 125,
      author: "MirrorTraveler",
      likes: 50,
    },
    {
      id: "11",
      title: "The Celestial Observatory",
      content:
        "I visited an observatory high in the mountains, where I gazed at distant galaxies and met ancient stargazers.",
      created_at: "2023-08-12",
      viewCount: 105,
      author: "Stargazer",
      likes: 38,
    },
    {
      id: "12",
      title: "The Labyrinth of Dreams",
      content:
        "I navigated a surreal labyrinth where every twist and turn revealed a different dream or nightmare.",
      created_at: "2023-08-13",
      viewCount: 88,
      author: "LabyrinthExplorer",
      likes: 29,
    },
    {
      id: "13",
      title: "A Night in Kyoto",
      content:
        "I wandered the historic streets of Kyoto at night, surrounded by the beauty of traditional Japan.",
      created_at: "2023-08-14",
      viewCount: 115,
      author: "KyotoDreamer",
      likes: 42,
    },
    {
      id: "14",
      title: "The Symphony of Elements",
      content:
        "I found myself in a world where the elements - earth, fire, water, and air - danced in harmony to create a breathtaking symphony.",
      created_at: "2023-08-15",
      viewCount: 145,
      author: "ElementalDreamer",
      likes: 63,
    },
    {
      id: "15",
      title: "In the Heart of the Jungle",
      content:
        "I ventured deep into the jungle, where exotic creatures and lush greenery created a mesmerizing tapestry of life.",
      created_at: "2023-08-16",
      viewCount: 75,
      author: "JungleExplorer",
      likes: 28,
    },
    {
      id: "16",
      title: "The Cosmic Dance",
      content:
        "I witnessed a celestial dance of planets and stars, where the universe itself was a grand ballroom of cosmic wonders.",
      created_at: "2023-08-17",
      viewCount: 132,
      author: "CosmicDancer",
      likes: 57,
    },
    {
      id: "17",
      title: "Beneath the Desert Sands",
      content:
        "I delved into the secrets hidden beneath the desert sands, uncovering ancient tombs and lost civilizations.",
      created_at: "2023-08-18",
      viewCount: 90,
      author: "DesertExplorer",
      likes: 31,
    },
    {
      id: "18",
      title: "The Dreamer's Canvas",
      content:
        "I painted my dreams on a canvas of stardust, creating worlds and stories with each brushstroke of imagination.",
      created_at: "2023-08-19",
      viewCount: 110,
      author: "CanvasDreamer",
      likes: 47,
    },
    {
      id: "19",
      title: "A Night in Venice",
      content:
        "I floated through the canals of Venice at night, the city of masks and masquerades, in a dreamlike gondola ride.",
      created_at: "2023-08-20",
      viewCount: 70,
      author: "VeniceDreamer",
      likes: 23,
    },
    {
      id: "20",
      title: "The Library of Imagination",
      content:
        "I explored a vast library where every book contained a world of its own, waiting to be read and experienced.",
      created_at: "2023-08-21",
      viewCount: 125,
      author: "ImaginationExplorer",
      likes: 54,
    },
  ];

  const [stories, setStories] = useState<StoryI[][]>([]);
  const userData = useSelector((state: RootState) => state.userSlice.user);
  const { currentTheme } = useSelector((state: RootState) => state.themeSlice);
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const storiesArray: StoryI[][] = [];
    const chunkSize = 5;
    for (let i = 0; i < mockStories.length; i += chunkSize) {
      const chunk = mockStories.slice(i, i + chunkSize);
      storiesArray.push(chunk);
    }
    setStories(storiesArray);
  }, []);
  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return (
    <>
      <HomeContainer>
        {/* <FlexTitle>S.Tories</FlexTitle>
        {user && <h2 style={{ zIndex: 1000 }}>Welcome {user.firstName}</h2>}
        <FlexDescription>This is a website about dreams</FlexDescription> */}
        <CloudsContainer>
          <LeftCloud />
          <MainHeader currentTheme={currentTheme}>S.Tories</MainHeader>
          <RightCloud />
        </CloudsContainer>
        <Skyline />
      </HomeContainer>
      {/* <SamplesMainContainer>
        <SamplesWideContainer>
          <SampleContainer>
            {stories[0] &&
              stories[0].map((story) => {
                const randomTransformValue = Math.floor(Math.random() * 25);
                return (
                  <SampleParagraph trnslt={randomTransformValue}>
                    {story.content}
                  </SampleParagraph>
                );
              })}
          </SampleContainer>
          <SampleContainer>
            {stories[1]?.map((story) => {
              const randomTransformValue = Math.floor(Math.random() * 25);
              return (
                <SampleParagraph trnslt={randomTransformValue}>
                  {story.content}
                </SampleParagraph>
              );
            })}
          </SampleContainer>
          <SampleContainer>
            {stories[2]?.map((story) => {
              const randomTransformValue = Math.floor(Math.random() * 35);
              return (
                <SampleParagraph trnslt={randomTransformValue}>
                  {story.content}
                </SampleParagraph>
              );
            })}
          </SampleContainer>
          <SampleContainer>
            {stories[3] &&
              stories[3].map((story) => {
                const randomTransformValue = Math.floor(Math.random() * 25);
                return (
                  <SampleParagraph trnslt={randomTransformValue}>
                    {story.content}
                  </SampleParagraph>
                );
              })}
          </SampleContainer>
        </SamplesWideContainer>
      </SamplesMainContainer> */}
    </>
  );
};

export default WelcomePage;
