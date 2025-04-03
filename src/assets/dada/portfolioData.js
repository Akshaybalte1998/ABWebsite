import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/cdac.png";

const portfolios = [
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "CDAC",
    title: "PG-DAC",
    description: 
      "I recently completed a **Post Graduate Diploma in Advanced Computing (PG-DAC)** from IACSD, Pune, where I honed my technical skills and gained a deeper understanding of advanced computing principles.",
    technologies: ["Full Stack Development"],
    siteUrl: "#",
  },
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Internship",
    title: "Aivarient",
    description: 
      "Completed an internship focused on **Machine Learning** using Python at Aivarient, where I applied theoretical concepts to real-world problems.",
    technologies: ["Machine Learning", "Python"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Pre-CAT",   
    title: "Sunbeam Institute",
    description: 
      "Undertook a comprehensive **Pre-CAT** course for CDAC at Sunbeam Institute, enhancing my foundational knowledge in computing.",
    technologies: ["C", "C++", "Data Structures"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Certification",
    title: "Machine Learning with Python by IBM",
    description: 
      "Successfully earned a certification in **Machine Learning with Python** from IBM, equipping myself with the skills to implement machine learning algorithms.",
    technologies: ["Python", "Machine Learning"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "UX",
    title: "SQL Mastery",
    description: 
      "Completed a course on **MySQL** through Great Learning, gaining proficiency in database management and SQL queries.",
    technologies: ["SQL"],
    siteUrl: "#",
  },
];

export default portfolios;
