import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/Landing-page";
import { SearchPage } from "./Components/Search-Page";
import { ExplorePage } from "./Components/Explore-page";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="landing-page" Component={LandingPage} />
          <Route path="search-page" Component={SearchPage} />
          <Route path="explore-page" Component={ExplorePage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
