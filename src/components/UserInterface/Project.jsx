import React from 'react';
import PropTypes from 'prop-types';

const Project = () => {
  // Sample project data
  const projects = [
    {
      title: "AgroMaart - Online Fertilizer Shop",
      icon: "ri-shopping-cart-fill",
      description: "Developed a user-friendly web app for fertilizer shop management, connecting shop owners, farmers, and delivery staff. It features Role-Based Access for inventory and order management, product browsing, order placement, and real-time delivery status updates. Spring Security ensures secure login and data protection, improving efficiency, reducing manual work, and increasing transparency in fertilizer distribution.",
      additionalInfo: "Technologies: Spring Boot, Hibernate, MySQL, React, HTML, CSS",
      imageSrc: require('../../assets/images/AgroMart.webp'),
      animation: "fade-left",
    },
    
   
    {
  title: "Students Management System",
  icon: "ri-user-2-fill",
  description: "A powerful web application designed to streamline the management of student records. With an intuitive and secure interface, administrators can easily enroll, update, and search student data. The system features seamless record modification and retrieval, enhancing accuracy and operational efficiency. It reduces the time spent on manual processes, making academic record management smoother and more effective.",
  additionalInfo: "Technologies: Spring Boot, Hibernate, Thymeleaf, MySQL",
  imageSrc: require('../../assets/images/studentManagementSystem.webp'),
  animation: "fade-left",
}

    ,
    {
      title: "Employee Management System",
      icon: "ri-user-3-fill",
      description: "The Employee Management System is a Java-based web application used only Hibernate to connect with the database to perform operations. It allows administrators to add, update, and retrieve employee details.",
      additionalInfo: "Technologies: Java, MySQL, Hibernate",
      imageSrc: require('../../assets/images/EMS (2).webp'),
      animation: "fade-left",
    }
    ,
    {
      title: "Akshay Balte Website",
    icon: "ri-code-fill",
      description: "Created an interactive and responsive personal website using React, JavaScript, HTML, and CSS to showcase skills, projects, and achievements.",
      additionalInfo: "Technologies: React, JavaScript, HTML, CSS",
      imageSrc: require('../../assets/images/ABwebsite.png'),
      animation: "fade-left",
    }
    ,
    {
      title: "FruitBasket",
    icon: "ri-shopping-cart-fill",
      description: "A Java application demonstrating OOP concepts, Exception Handling, and Collections for managing a virtual fruit store, including inventory and order processing.",
      additionalInfo: "Technologies: Java, OOP, Exception Handling, Collections",
      imageSrc: require('../../assets/images/FruitBasket.webp'),
      animation: "fade-left",
    }
    
    ,
    {
      title: "Customer Management System",
      icon: "ri-account-box-fill",
      description: "A Java-based project implementing Data Structures and OOP principles to store, update, and manage customer details efficiently.",
      additionalInfo: "Technologies: Java, Data Structures ,Exception Handling, OOP",
      imageSrc: require('../../assets/images/CMS.png'),
      animation: "fade-left",
    },
    {
      title: "Rock Paper Scissors ",
      icon: "ri-gamepad-line",
      description: "Created an interactive Rock Paper Scissors game using JavaScript, HTML, and CSS. The game allows users to play against the computer, with simple controls and real-time feedback, offering an engaging and responsive gaming experience.",
      additionalInfo: "Technologies: JavaScript, HTML, CSS",
      imageSrc: require('../../assets/images/RPSLS.webp'),
      animation: "fade-left",
    },
    {
      title: "TicTacToe Game",
         icon: "ri-gamepad-line",
      description: "Created a simple web-based TicTacToe game using HTML, CSS, and JavaScript. The game allows two players to take turns, with a clear interface and real-time game status updates. It includes features like win detection and a reset option, providing an interactive and engaging experience.",
      additionalInfo: "Technologies: JavaScript, HTML, CSS",
      imageSrc: require('../../assets/images/unnamed.png'),
      animation: "fade-left",
    },
    {
      title: "Music Recommendation System",
      icon: "ri-music-fill",
      description: "Developed a music recommendation system using Python that suggests personalized songs based on user preferences and listening history. It uses collaborative and content-based filtering, along with machine learning from Scikit-Learn, to improve recommendation accuracy. Data is processed with Pandas and NumPy to understand user behavior, and the system scales to handle large datasets, offering a customized and engaging listening experience.",
      additionalInfo: "Technologies: Python, Flask, TensorFlow, Spotify API",
      imageSrc: require('../../assets/images/Music.webp'),
      animation: "fade-right",
    },
    {
      title: "Drug Review Using NLP",
      icon: "ri-brain-fill",
      description: "Developed a system using Natural Language Processing (NLP) to analyze drug reviews, identifying sentiment (positive, negative, neutral) and key insights on drug effectiveness and side effects. Text preprocessing and techniques like TF-IDF were used to clean and extract meaningful data from reviews. The results were visualized to highlight trends, providing valuable insights for doctors and patients to make informed medication decisions.",
      additionalInfo: "Technologies: Python, Flask, NLP, TensorFlow",
      imageSrc: require('../../assets/images/drug.webp'),
      animation: "fade-left",
    },
  ];

  return (
    <section id="project" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>PROJECTS</h2>
        </div>
        <div style={styles.gridContainer}>
          {projects.map((project, index) => (
            <TimelineCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ title, icon, description, additionalInfo, imageSrc, animation, index }) => {
  const cardStyle = {
    ...styles.cardContainer,
    backgroundColor: colorPalette[index % colorPalette.length],
  };

  return (
    <div className="timeline-card" style={cardStyle} data-aos={animation}>
      <div style={styles.iconContainer}>
        <img src={imageSrc} alt={`Icon for ${title}`} style={styles.iconImage} />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>
          {icon && <i className={`${icon} mr-2`} aria-hidden="true"></i>} {title}
        </h3>
        <p style={styles.cardDescription}>{description}</p>
        {additionalInfo && <p style={styles.cardAdditionalInfo}>{additionalInfo}</p>}
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const colorPalette = ['#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5', '#fbe9e7'];

const styles = {
  section: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #d7e9f7, #e1f5fe)',
    borderRadius: '1rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '1rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#0288d1',
    fontWeight: '600',
    fontSize: '2.8rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    flexShrink: 0,
  },
  iconImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: '1.8rem',
    color: '#0277bd',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#455a64',
    marginTop: '0.75rem',
  },
  cardAdditionalInfo: {
    fontSize: '0.9rem',
    color: '#607d8b',
    marginTop: '0.5rem',
    fontStyle: 'italic',
  },
};

export default Project;
