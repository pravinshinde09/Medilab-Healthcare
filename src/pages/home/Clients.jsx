import React from "react";
import { Images } from "../../assets/images";

const ALL_CLIENTS = [
  {
    name: "Sapat",
    icon: Images.Client_5,
  },
  {
    name: "Aayushree Pharmaceuticals",
    icon: Images.Client_1,
  },
  {
    name: "Niya Healthcare Pvt. Ltd.",
    icon: Images.Client_2,
  },
  {
    name: "Sameeksha Pharmaceuticals Pvt. Ltd.",
    icon: Images.Client_3,
  },
  {
    name: "Tarun Pharmaceuticals",
    icon: Images.Client_4,
  },
];
const Clients = () => {
  return (
    <section className="ls container-px-0 s-py-80 px-xl-80">
      <div className="container">
        <h6 className="special-heading sub-title text-center">
          <span>Clientele</span>
        </h6>
        <h2 className="special-heading text-center"  style={{ fontSize: "34px", marginBottom: "2rem" }}>
          Our Valuable Clients
        </h2>
        <div className="row mt-4">
          <div className="col-sm-12 text-center">
            <div className="row justify-content-center">
              {ALL_CLIENTS.map((item) => (
                <div key={item.name} className="col col-sm-2">
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ height: "100px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
