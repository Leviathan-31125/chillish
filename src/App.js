import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
