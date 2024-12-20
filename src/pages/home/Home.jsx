import React from "react";
import ProductList from "../product/product/ProductList";
import LozengesCarousel from "./LozengesCarousel";
import Banner from "./Banner";
import Clients from "./Clients";
import Categories from "./Categories";
import StickyForm from "../../components/common/StickyForm";

const Home = () => {
  return (
    <>
      <Banner />
      <div id="canvas">
        <div id="box_wrapper">
          <LozengesCarousel />
          <ProductList maxProducts={4} showMore={true} />
          <Categories />
          <Clients />
          <StickyForm />
        </div>
      </div>
    </>
  );
};

export default Home;
