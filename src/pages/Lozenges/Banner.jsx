import React from "react";
import BgImage from "../../assets/images/Lozenges/bgImage.jpg";

const Banner = () => {
  return (
    <section style={styles.bannerSection}>
      <img src={BgImage} alt="Lozenges Background" style={styles.bgImage} />
      <div style={styles.overlay}>
        <div style={styles.contentContainer}>
          <h2 style={styles.title}>Lozenges Tablet</h2>
          <p style={styles.description}>
            Our Lozenges are scientifically crafted to provide effective relief
            and care, addressing diverse health concerns with precision and
            trust.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  bannerSection: {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    width: "100%",
    height: "300px",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  contentContainer: {
    textAlign: "left",
    maxWidth: "600px",
  },
  title: {
    fontSize: "40px",
    color: "black",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "16px",
    color: "black",
    lineHeight: "1.6",
  },
};

export default Banner;
