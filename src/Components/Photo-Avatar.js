import "./Photo-Avatar.css";
export const PhotoAvatar = ({ src, userName, size }) => {
  return (
    <>
      <img alt="avatar-img" className={size} src={src} />
      <small className="content-avatar-userName">{userName}</small>
    </>
  );
};
