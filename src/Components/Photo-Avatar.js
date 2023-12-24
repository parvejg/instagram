import "./Photo-Avatar.css";
export const PhotoAvatar = ({ className, src, userName }) => {
  return (
    <>
      <img alt="avatar-img" src={src} className={className} />
      <small className="content-avatar-userName">{userName}</small>
    </>
  );
};
