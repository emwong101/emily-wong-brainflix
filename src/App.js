import "./App.scss";
import Comments from "./components/sections/comments/Comments";
import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import NextVideos from "./components/sections/nextVideos/NextVideos";
import VideoDescription from "./components/sections/videoDescription/VideoDescription";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoDescription />
      <Comments />
      <NextVideos />
    </>
  );
}

export default App;
