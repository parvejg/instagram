import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/Landing-page";
import { SearchPage } from "./Components/Search-Page";
import { ExplorePage } from "./Components/Explore-page";
import { MessagePage } from "./Components/Message";
import { ExploreImageCard } from "./Components/ExploreImg-card";
import { NotificationPage } from "./Components/Notification";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="landing-page" Component={LandingPage} />
          <Route path="search-page" Component={SearchPage} />
          <Route path="explore-page" Component={ExplorePage} />
          <Route path="message-page" Component={MessagePage} />
          <Route path="notification-page" Component={NotificationPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
