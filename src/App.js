import Header from "./components/sections/header/Header";
import MainPage from "./pages/mainPage/MainPage";
import Upload from "./pages/uploadPage/Upload";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<MainPage />} />
          <Route path="video" element={<MainPage />} />
          <Route path="video/:videoID" element={<MainPage />} />
          <Route path="upload" element={<Upload />} />
          <Route
            path="*"
            element={
              <>
                <h1>Video not Found</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
