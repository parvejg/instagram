import "./SignInPage.css";
export const SignInPage = () => {
  return (
    <div className="signIn-page-wrapper">
      <div className="signInpage-img-wrapper">
        <img src="https://static.toiimg.com/thumb/resizemode-4,msid-92982598,imgsize-14370,width-720/92982598.jpg" />
      </div>
      <div className="sign-in-page-wrapper">
        <h1>Instagram</h1>
        <input placeholder="phone number, email user name" type="text" />
        <input placeholder="password" type="password" />
        <button>Log in</button>
        <p>-------or--------</p>
      </div>
    </div>
  );
};
