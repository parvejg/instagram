import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Components/Landing-page";
import { SearchPage } from "./Components/Search-Page";
import { ExplorePage } from "./Components/Explore-page";
import { MessagePage } from "./Components/Message";
import { NotificationPage } from "./Components/Notification";
import { CreateBtnSidebar } from "./Components/CreatePost-option";
import { CreateNewPost } from "./Components/CreateNew-postPage";
import { ProfilePage } from "./Components/Profile-page";
import { SignInPage } from "./Components/SignIn-page";

import { MoreOptions } from "./Components/MoreOptions-page";
import { SignUpPage } from "./Components/SignUp-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={SignInPage} />
          <Route path="/" Component={LandingPage} />
          <Route path="landing-page" Component={LandingPage} />
          <Route path="search-page" Component={SearchPage} />
          <Route path="explore-page" Component={ExplorePage} />
          <Route path="message-page" Component={MessagePage} />
          <Route path="notification-page" Component={NotificationPage} />
          <Route path="postSidebar-page" Component={CreateBtnSidebar} />
          <Route path="createPost-page" Component={CreateNewPost} />
          <Route path="profile-page" Component={ProfilePage} />
          <Route path="moreOptions-page" Component={MoreOptions} />
          <Route path="signUp-page" Component={SignUpPage} />
          <Route path="login-page" Component={SignInPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
