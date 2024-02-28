import React from "react";
import IMG from "../assets/wordpress.webp";
import { I_Product } from "./MainSection";

interface Props {
  product: I_Product;
}

const PrdouctOfferLabels = ({ title }: { title: string }): React.ReactNode => {
  return <div className="offerLabel">{title}</div>;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { title, description, offers, pricing } = product;
  return (
    <div className="productCard">
      <img src={IMG} alt="product image" />

      <div className="productLabels">
        {offers.map((elem: { title: string }) => {
          return <PrdouctOfferLabels title={elem.title} key={elem.title} />;
        })}
      </div>

      <div className="productInfo">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="productPricing">
        <p className="offerPrice">${pricing.offer}</p>
        <div>
          <p className="originalPrice">
            ${pricing.original}
            <sub className="discount">({pricing.discount}%)</sub>
          </p>
        </div>
      </div>

      <button>View</button>
    </div>
  );
};
