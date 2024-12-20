import React from 'react';
import Cherry from '../../assets/images/Lozenges/cherry.jpeg';
import Ginger from '../../assets/images/Lozenges/ginger.jpeg';
import Orange from '../../assets/images/Lozenges/orange.jpeg';
import Honey from '../../assets/images/Lozenges/honey.jpeg';
import Mint from '../../assets/images/Lozenges/mint.jpeg';
import Lemon from '../../assets/images/Lozenges/lemon.jpeg';

const LozengesCard = () => {
  const flavors = [
    { title: "Mint", img: Mint },
    { title: "Lemon", img: Lemon },
    { title: "Cherry", img: Cherry },
    { title: "Honey", img: Honey },
    { title: "Ginger", img: Ginger },
    { title: "Orange", img: Orange },
  ];

  return (
    <div style={styles.cardContainer}>
      {flavors.map((flavor, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{flavor.title}</h3>
          <div style={styles.imageBox}>
            <img src={flavor.img} alt={flavor.title} style={styles.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "10px",
  },
  card: {
    width: "150px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s",
    cursor: "pointer",
    flexDirection: "column",
  },
  title: {
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  imageBox: {
    marginBottom: "10px",  
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover", 
  },
};

export default LozengesCard;
