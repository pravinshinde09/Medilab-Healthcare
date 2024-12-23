import React, { useState, useEffect } from "react";
import { ProductData } from "../../../constants/ProductData";
import ProductCard from "./ProductCard";
import { ProductCategory } from "../../../constants/ProductCategory";
import ScrollAnimation from 'react-animate-on-scroll';
import InquiryFormModal from "./InquiryFormModal";
import { useNavigate } from 'react-router-dom';
import { RoutePath } from "../../../routes/RoutePaths";

const getFilteredProducts = (data, category, max) => {
  let filteredData = [];

  if (category !== "all") {
    filteredData = data.filter(item => item.Product_Category === category)
  }
  else {
    filteredData = [...ProductData];
  }

  return max === -1 ? filteredData : filteredData.splice(0, max);
}

const ProductList = ({ maxProducts = -1, showMore = false }) => {
  const[show,setShow]= useState(false);
  const handleShow = () => setShow(true)

  const [data, setData] = useState(getFilteredProducts([...ProductData], "all", maxProducts));
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    setData(getFilteredProducts([...ProductData], currentCategory, maxProducts));
  }, [currentCategory, maxProducts])
  const navigate = useNavigate();

  return (
    <section className=" scrolltop container px-xl-50 ls s-pt-xl-140 s-pt-lg-120 s-pt-md-80 s-pt-50 s-pb-xl-140 s-pb-lg-120 s-pb-md-70 s-pb-50 text-center text-sm-left ">
       <div className="divider-40 hidden-below-md"></div>
      <div className="divider-30 hidden-above-md"></div>
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={1}>
        <h6 className="special-heading sub-title text-center">
          <span>Own production</span>
        </h6>
        <h2 className="special-heading text-center">Popular Products</h2>
      </ScrollAnimation>
      <div className="divider-40 hidden-below-md"></div>
      <div className="divider-30 hidden-above-md"></div>
      <div className="product_tabs">
        <ul className="nav nav-tabs">
          {ProductCategory.map((item) => (
            <li className="nav-item active" key={item.id}>
              <a
                className="nav-link"
                id="tab01"
                data-toggle="tab"
                href="#tab01_pane"
                role="tab"
                aria-controls="tab01_pane"
                aria-expanded="true"
                onClick={() => setCurrentCategory(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center row justify-content-center"
      >
        <div
          className={showMore ? "col-lg-11 col-md-11 col-sm-12 col-xs-12 pane fade show active row": "col-lg-12 tab-pane fade show active row"}
          id="tab01_pane"
          role="tabpanel"
          aria-labelledby="tab01">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              id={item.id}
              category={item.category}
              mainCategory={item.Product_Category}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        {
          showMore && (
            <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center align-self-center">
              <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={2}>
                <button
                  type="button"
                  onClick={() => navigate(RoutePath.product)}
                  style={{ border: "1px solid var(--light-red)", backgroundColor: "var(--light-red)", color: "white", borderRadius: "50%", height: "40px", width: "40px", cursor: "pointer" }}>
                  <i className="fa fa-arrow-right" aria-hidden="true" style={{ marginBottom: "6px", marginLeft: "2px" }} />
                </button>
              </ScrollAnimation>
            </div>
          )
        }
      </div>
      <div className="text-center mt-5">
        <button type="button" className="button product_type_simple btn-sm text-center" onClick={handleShow}><i className="fa fa-download">&nbsp;</i>Download Brochure</button>
        <InquiryFormModal show={show} setShow={setShow}/>
      </div>
      <div className="divider-40 hidden-below-md"></div>
      <div className="divider-30 hidden-above-md"></div>
    </section>
  );
};

export default ProductList;