import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/Landing-page";
import { SearchPage } from "./Components/Search-Page";
import { ExplorePage } from "./Components/Explore-page";
import { MessagePage } from "./Components/Message";
import { NotificationPage } from "./Components/Notification";
import { CreateBtnSidebar } from "./Components/CreatePost-option";
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
          <Route path="postSidebar-page" Component={CreateBtnSidebar} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
