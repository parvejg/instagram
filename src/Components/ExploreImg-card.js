import "./ExploreImg-card.css";
import { ExplorePageImg } from "./ReusableComponents/Images";
export const ExploreImageCard = () => {
  return (
    <div className="exploreimg-card-wrapper">
      <ExplorePageImg />
      <div className="explore-imgCard-content-wrapper"></div>
    </div>
  );
};
