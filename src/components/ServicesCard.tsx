import React from "react";
import IMG from "../assets/wordpress.webp";
import { IoIosTrophy } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { I_SERVICE, I_Rating, I_Features } from "./MainSection";

interface Props {
  serviceInfo: I_SERVICE;
  index: number;
}

const ExtraHighlight = ({
  rating,
  features,
}: {
  rating: I_Rating[];
  features: I_Features[];
}): React.ReactNode => {
  return (
    <div className="extraHighlight">
      <div className="extraRatingInfo">
        {rating.map((elem: I_Rating, i: number) => {
          return (
            <div key={`rating${i}`}>
              <span>{elem.value}</span>
              <p>{elem.title}</p>
            </div>
          );
        })}
      </div>

      <div className="features">
        {features.map((elem: I_Features, i: number) => {
          return (
            <div key={`features-${i}`}>
              <FaCircleCheck />
              <p>{elem.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ServicesCard: React.FC<Props> = ({ serviceInfo, index }) => {
  const {
    labelType,
    infoHeading,
    infoDescription,
    highlights,
    extraHighlight,
    features,
    rating,
  } = serviceInfo;
  return (
    <div className="serviceCard">
      {labelType && (
        <div className="label">
          {labelType == "bestChoice" ? <IoIosTrophy /> : <IoDiamondOutline />}
          <p>{labelType == "bestChoice" ? "Best Choice" : "Best Value"}</p>
        </div>
      )}

      <div className="cardContent">
        <div className="index">{index}</div>

        <div className="productImage">
          <img src={IMG} alt="service image" />
        </div>

        <div className="cardBody">
          <div className="serviceInfo">
            <h4>{infoHeading}</h4>
            <p>{infoDescription}</p>
          </div>

          <div className="highlight">
            <h4>Main Highlights</h4>
            {!extraHighlight && <p>[What you get] : {highlights}</p>}
            {extraHighlight && (
              <ExtraHighlight rating={rating!} features={features!} />
            )}
          </div>
          <button>
            See more
            <BsChevronDown size={13} />
          </button>
        </div>

        <div className="rating">
          <div>
            <p>9.3</p>
            <p>Exceptional</p>
            <div>⭐⭐⭐⭐⭐</div>
          </div>

          <button>View</button>
        </div>
      </div>
    </div>
  );
};
