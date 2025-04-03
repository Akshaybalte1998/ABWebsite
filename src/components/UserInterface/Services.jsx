import React from 'react';
import PropTypes from 'prop-types';

const Services = () => {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        {/* Education Section */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>EDUCATIONAL JOURNEY </h2>
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineContent}>
            <TimelineCard
              title="CDAC"
              icon="ri-graduation-cap-fill"
              description="PG-DAC, IACSD, Pune"
              date="March 2024 – August 2024"
              additionalInfo="60.8%"
              imageSrc={require('../../assets/images/cdac_logo.png')}
              animation="fade-left"
            />

            <TimelineCard
              title="Internship"
              icon="ri-robot-2-fill"
              description="Machine Learning Intern, Aiverient, Pune"
              date="June 2022 – February 2023"
              additionalInfo="Worked on ML algorithms and data analysis."
              imageSrc={require('../../assets/images/Aivarient.png')}
              animation="fade-right"
            />

            <TimelineCard
              title="B.Tech Mechanical Engineering"
              icon="ri-graduation-cap-fill"
              description="DKTE Textile and Engineering Institute, Ichalkaranji"
              date="2016 – 2020"
              additionalInfo="7.78 CGPA"
              imageSrc={require('../../assets/images/btech.png')}
              animation="fade-left"
            />

            <TimelineCard
              title="HSC"
              icon="ri-school-fill"
              description="A.K. Junior College, Atpadi"
              date="2014 – 2016"
              additionalInfo="67.54%"
              imageSrc={require('../../assets/images/hsc.png')}
              animation="fade-right"
            />

            <TimelineCard
              title="SSC"
              icon="ri-school-fill"
              description="Shree Bhavnai Vidyalaya, Atpadi"
              date="2014"
              additionalInfo="90.60%"
              imageSrc={require('../../assets/images/ssc.png')}
              animation="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ title, icon, description, date, additionalInfo, imageSrc, animation }) => (
  <div style={styles.cardContainer}>
    <div style={styles.iconContainer}>
      <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
    </div>
    <div style={styles.cardContent}>
      <div data-aos={animation} data-aos-duration="1200" style={styles.timelineCard}>
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`}></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {date && <p style={styles.cardDate}>{date}</p>}
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  </div>
);

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
  additionalInfo: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

const styles = {
  section: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #f3e5f5, #f1f8e9)',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#8e24aa',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
  },
  timelineContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Better wrapping on small screens
    gap: '1.5rem',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column', // Stacks image and text on mobile screens
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#fce4ec',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    textAlign: 'center', // Ensures text is centered on smaller screens
    wordWrap: 'break-word',
  },
  timelineCard: {
    padding: '1.25rem',
    borderRadius: '0.75rem',
    backgroundColor: '#f3e5f5',
    width: '100%', // Ensures proper width across screen sizes
  },
  iconContainer: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e24aa',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    color: '#fff',
  },
  iconImage: {
    maxWidth: '30px',
    maxHeight: '30px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#8e24aa',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  cardDate: {
    fontSize: '0.875rem',
    color: '#777',
    marginBottom: '0.5rem',
  },
  cardAdditionalInfo: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#e91e63',
  },
};

export default Services;
