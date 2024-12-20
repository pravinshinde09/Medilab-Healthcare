import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import LOZENGES from "../../assets/images/Lozenges/Lozenges";

const LozengesCarousel = () => {
  return (
    <section
      id="about"
      className="ls section-about s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 text-center text-sm-left"
    >
      <div className="container px-xl-50">
        <div className="row">
          <div className="col-md-6">
            <h6 className="special-heading sub-title">
              <span>Lozenges</span>
            </h6>
            <h2 className="special-heading" style={{ fontSize: "34px" }}>
              The Soothing Power of Lozenges
            </h2>
            <div className="divider-45 hidden-below-md"></div>
            <div className="divider-30 hidden-above-md"></div>
            <p className="text-justify">
              Lozenges are medicated tablets designed to dissolve slowly in the
              mouth, providing soothing relief for throat irritation, cough, and
              mouth infections. Available in various flavors, they combine
              effective ingredients to deliver quick relief and freshness. Ideal
              for both adults and children, they’re a convenient solution for
              on-the-go care.
            </p>
            <div className="divider-50 hidden-below-md"></div>
            <Link to="" className="btn btn-maincolor medium-btn">
              View More
            </Link>
          </div>

          {/* Carousel */}
          <div className="col-md-6">
            <Carousel
             interval={3000} 
             controls={false} 
             indicators={false} 
            >
              {LOZENGES.map((lozenge) => (
                <Carousel.Item key={lozenge.id}>
                  <img
                    className="d-block w-100 carousel-img"
                    src={lozenge.url}
                    alt={`Lozenge Image ${lozenge.id}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .carousel-img {
          width: 100%;
          height: 300px;
        }
      `}</style>
    </section>
  );
};

export default LozengesCarousel;
