import React from 'react';

const IndustryVideo = () => {
  return (
    <section style={styles.videoSection}>
      <div style={styles.textContainer}>
        <h2 style={styles.videoTitle}>See How Our Lozenges Are Manufactured</h2>
        <p style={styles.videoDescription}>
          Watch our industry-leading process in manufacturing lozenges, ensuring the highest quality and safety standards. 
          This video provides a behind-the-scenes look at our state-of-the-art manufacturing facilities, where every step is 
          carefully controlled to meet rigorous health and safety guidelines. From ingredient sourcing to packaging, we pride ourselves 
          on delivering premium products that you can trust.
        </p>
        <p style={styles.videoDetails}>
          Our Lozenges are crafted using the latest technology, which ensures consistency in quality and potency. 
          The video also highlights how we maintain strict hygiene and quality control measures during production.
        </p>
      </div>
      <div style={styles.videoWrapper}>
        <iframe
          width="100%"
          height="500"
          backgroundColor='white'
          src="https://res.cloudinary.com/dk97z95ot/video/upload/v1734696357/VID-20241219-WA0053_rqmv4l.mp4"
          title="Industry Manufacturing Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  videoSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '40px',
    paddingBottom: '40px',
    textAlign: 'center',
    gap:'30px'
  },
  textContainer: {
    marginBottom: '20px',
    maxWidth: '800px',
    padding:'20px'
  },
  videoTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  videoDescription: {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
    backgroundColor:'white'
  },
  videoDetails: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    marginTop: '20px',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: '900px',
  },
};

export default IndustryVideo;
