import Manufacturing1 from "../../assets/images/Lozenges/lozenges_manu_1.jpeg";
import Manufacturing2 from "../../assets/images/Lozenges/lozenges_manu_2.jpeg";
import Manufacturing3 from "../../assets/images/Lozenges/lozenges_manu_3.jpeg";
import Manufacturing4 from "../../assets/images/Lozenges/lozenges_manu_4.jpeg";

const ManufacturingUnits = [
  Manufacturing1,
  Manufacturing2,
  Manufacturing3,
  Manufacturing4
];

export default function Manufacturing() {
  return (
    <section
      id="about"
      className="ls section-about s-py-xl-80 s-py-lg-80 s-py-md-80 s-py-50 text-center text-sm-left"
    >
      <div className="container px-xl-50">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h6 className="special-heading sub-title">
                <span>Manufacturing Unit</span>
              </h6>
              <h2 className="special-heading" style={{ fontSize: "34px" }}>
                An Insight into Lozenges Manufacturing
              </h2>
              <div className="divider-45 hidden-below-md"></div>
              <div className="divider-30 hidden-above-md"></div>
              <p className="text-justify">
                Our Lozenges Manufacturing Unit is a facility designed to
                deliver products of unmatched quality and authenticity. Equipped
                with the latest technology, the unit ensures precision and
                efficiency in every step of the production process.
              </p>
              <p className="text-justify">
                Hygiene is at the core of our operations, with strict protocols
                in place to maintain cleanliness and safety standards
                throughout. From sourcing the finest ingredients to using
                cutting-edge machinery, every aspect is carefully managed to
                preserve the authenticity and effectiveness of our lozenges.
              </p>
              <div className="divider-50 hidden-below-md"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {ManufacturingUnits.map((item, index) => (
                <div key={index} className="col-md-6 col-sm-12">
                  <img
                    alt="test"
                    className="card-img-top rounded-3"
                    style={{ height: "300px", width: "300px" }}
                    src={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
