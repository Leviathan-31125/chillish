import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./Pages/Landing";
import LevelUP from "./Pages/LevelUP";
import Books from "./Pages/Books";
import FocusAcademy from "./Pages/FocusAcademy";
import Articles from "./Pages/Articles";
import ArticleDetail from "./Pages/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="levelup" element={<LevelUP />} />
          <Route path="focus-academy" element={<FocusAcademy />} />
          <Route path="books" element={<Books />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
