import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ServicesCard } from "./ServicesCard";
import { ProductCard } from "./ProductCard";

interface I_Menu {
  title: string;
  url: string;
}

export interface I_Rating {
  title: string;
  value: number;
}

export interface I_Features {
  title: string;
}

export interface I_SERVICE {
  labelType?: string;
  infoHeading: string;
  infoDescription: string;
  highlights?: string;
  extraHighlight: boolean;
  rating?: I_Rating[];
  features?: I_Features[];
}
export interface I_Product {
  title: string;
  description: string;
  offers: I_Features[];
  pricing: {
    original: number;
    discount: number;
    offer: number;
  };
}
const UpdateInfo = ({ date }: { date: Date }): React.ReactNode => {
  return (
    <div className="lastUpdateinfo info">
      <FaRegCheckCircle />
      <p>Last updated - {date.toDateString()}</p>
    </div>
  );
};

const AdditionalInfo = ({ title }: { title: string }): React.ReactNode => {
  return (
    <div className="info">
      <IoMdInformationCircleOutline />
      <p>{title}</p>
    </div>
  );
};

const OptionsMenu = ({ menu }: { menu: I_Menu[] }): React.ReactNode => {
  return (
    <div className="optionsMenu">
      {menu.map((link: I_Menu) => {
        return (
          <a href={link.url} key={link.url}>
            {link.title}
          </a>
        );
      })}
    </div>
  );
};

const NavigationBreadcrumb = (): React.ReactNode => {
  return (
    <div className="navigationBreadCrumb">
      <NavLink to={"#1"}>Home</NavLink>
      <BsChevronRight />
      <NavLink to={"#2"}>Hosting for all</NavLink>
      <BsChevronRight />
      <NavLink to={"#3"}>Hosting</NavLink>
      <BsChevronRight />
      <NavLink to={"#3"}>Hosting 6</NavLink>
      <BsChevronRight />
      <NavLink to={"#3"}>Hosting 5</NavLink>
    </div>
  );
};

export const MainSection: React.FC = () => {
  const options: I_Menu[] = [
    {
      title: "Tools",
      url: "#",
    },
    {
      title: "AWS Builder",
      url: "#",
    },
    {
      title: "Start Build",
      url: "#",
    },
    {
      title: "Build Supplies",
      url: "#",
    },
    {
      title: "Tooling",
      url: "#",
    },
    {
      title: "Blue Hosting",
      url: "#",
    },
  ];

  // assumnig data comes fri=om backend
  const services: I_SERVICE[] = [
    {
      labelType: "bestChoice",
      infoHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modiipsam ducimus",
      infoDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat maxime obcaecati facere dolor quia nihil ipsam ducimus, inventore quibusdam?",
      highlights:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugit ullam est eum rerum, temporibus labore saepe assumenda, animi veniam nesciunt molestiae quisveritatis porro!",
      extraHighlight: false,
    },
    {
      labelType: "bestValue",
      infoHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modiipsam ducimus",
      infoDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat maxime obcaecati facere dolor quia nihil ipsam ducimus, inventore quibusdam?",
      highlights:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugit ullam est eum rerum, temporibus labore saepe assumenda, animi veniam nesciunt molestiae quisveritatis porro!",
      extraHighlight: false,
    },
    {
      infoHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modiipsam ducimus",
      infoDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat maxime obcaecati facere dolor quia nihil ipsam ducimus, inventore quibusdam?",
      highlights:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fugit ullam est eum rerum, temporibus labore saepe assumenda, animi veniam nesciunt molestiae quisveritatis porro!",
      extraHighlight: false,
    },
    {
      infoHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modiipsam ducimus",
      infoDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat maxime obcaecati facere dolor quia nihil ipsam ducimus, inventore quibusdam?",
      extraHighlight: true,
      rating: [
        {
          title: "Building Responsive",
          value: 9.9,
        },
        {
          title: "Cool",
          value: 8.9,
        },
        {
          title: "Docs",
          value: 8.9,
        },
      ],
      features: [
        { title: "Documentation" },
        { title: "Easy Use" },
        { title: "Out of Box" },
      ],
    },
  ];

  const products: I_Product[] = [
    {
      title: "Webbuilder 1",
      description: "Computer modern with wix support",
      offers: [{ title: "20%" }, { title: "Limited time" }],
      pricing: {
        original: 49.96,
        offer: 39.96,
        discount: 20,
      },
    },
    {
      title: "Webbuilder 2",
      description: "Computer modern with wix support",
      offers: [{ title: "20%" }, { title: "Limited time" }],
      pricing: {
        original: 49.96,
        offer: 39.96,
        discount: 20,
      },
    },
    {
      title: "Webbuilder 3",
      description: "Computer modern with wix support",
      offers: [{ title: "20%" }, { title: "Limited time" }],
      pricing: {
        original: 49.96,
        offer: 39.96,
        discount: 20,
      },
    },
  ];

  return (
    <section className="mainSection">
      <h1>Best Website Builder in The US</h1>

      <div className="infoSection">
        <div className="info-elem-sec">
          <UpdateInfo date={new Date()} />
          <AdditionalInfo title="Advertising Disclousre Information" />
        </div>

        <div className="info-select-sec">
          <select>
            <option>Top relevant</option>
            <option>Top relevant</option>
            <option>Top relevant</option>
            <option>Top relevant</option>
            <option>Top relevant</option>
          </select>
        </div>
      </div>

      <OptionsMenu menu={options} />
      <NavigationBreadcrumb />

      <div className="services">
        {services.map((service, i) => {
          return (
            <ServicesCard
              key={`service-${i}`}
              index={i + 1}
              serviceInfo={service}
            />
          );
        })}
      </div>

      <div className="products">
        {products.map((product: I_Product) => {
          return <ProductCard product={product} key={product.title} />;
        })}
      </div>

      <div className="createAccount">
        <p>Signup and get special exclusive deals</p>
        <div>
          <input type="text" />
          <button>Signup</button>
        </div>
      </div>
    </section>
  );
};
