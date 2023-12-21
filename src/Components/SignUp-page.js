import { FaFacebook } from "react-icons/fa";
import "./SignUp-page.css";
export const SignUpPage = () => {
  return (
    <div className="signUp-page-container">
      <div className="signUp-page">
        <h1 className="insta-heading-landing-page">Instagram</h1>
        <p>Sign up to see photos and videos from your friends</p>

        <a
          className="facebook-link"
          href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522h2vnxhvdmow61e5hvli75ietd14chdr96wsdv56md2t1b77ry0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D63a8bc5d-8c76-4f51-be42-da61be707066%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522h2vnxhvdmow61e5hvli75ietd14chdr96wsdv56md2t1b77ry0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
        >
          <FaFacebook /> Log in with facebook
        </a>
        <input
          className="sign-in-email-input"
          placeholder="phone number, email user name"
          type="text"
        />
        <input
          className="sign-in-password-input"
          placeholder="password"
          type="password"
        />
        <button className="log-in-btn">Log in</button>
        <p>-------or--------</p>
        <a
          className="facebook-link"
          href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522h2vnxhvdmow61e5hvli75ietd14chdr96wsdv56md2t1b77ry0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D63a8bc5d-8c76-4f51-be42-da61be707066%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522h2vnxhvdmow61e5hvli75ietd14chdr96wsdv56md2t1b77ry0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
        >
          <FaFacebook /> Log in with facebook
        </a>
        <a href="#" className="forget-link">
          Forget password ?
        </a>
      </div>
      <div className="sign-up-link-wrapper">
        Don't have an account?{" "}
        <a href="" className="sign-up-link">
          Sign up
        </a>
      </div>
    </div>
  );
};
