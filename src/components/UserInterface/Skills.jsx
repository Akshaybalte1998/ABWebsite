import React from 'react';

// Define the styles
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  padding: '2rem',
};

const skillsSectionStyle = {
  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
  borderRadius: '12px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  textAlign: 'center',
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: '#333',
};

const badgeStyle = {
  margin: '5px',
  display: 'inline-block',
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const badgeHoverStyle = {
  ...badgeStyle,
  transform: 'scale(1.1)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const Skills = () => {
  return (
    <section id="Skills" style={{ padding: '4rem', backgroundColor: '#e8f5e9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', color: '#007396' }}>
      
        SKILLS & EXPERTISE

        </h2>

        <div style={containerStyle}>
          {/* Frontend Section */}
          <div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #1c1c1c, #2a2a2a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Frontend
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['JavaScript', 'HTML5', 'CSS3', 'React'].map(skill => {
      const badgeColor = {
        JavaScript: '#f7df1e', // Yellow
        HTML5: '#e34f26', // Red
        CSS3: '#1572b6', // Blue
        React: '#61dafb', // Light Blue
      }[skill];

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase()}&logoColor=black`}
          alt={skill}
          style={{
            ...badgeStyle,
            filter: 'brightness(1.2)', // Slightly brighter badges
            margin: '10px', 
            borderRadius: '10px', // More rounded corners
            cursor: 'pointer', 
            boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
            transition: 'box-shadow 0.3s, transform 0.3s, filter 0.3s', // Smooth transition
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            e.currentTarget.style.filter = 'brightness(1.4)'; // Increase brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.filter = 'brightness(1.2)'; // Reset brightness
          }}
        />
      );
    })}
  </div>
</div>





          {/* Backend Section */}
          <div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #282c34, #1c1f24)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Light blue for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Backend
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Java', 'Node.js', 'CSharp', 'C++'].map(skill => {
      const badgeColor = {
        Java: '#007396',     // Java Color
        'Node.js': '#8CC84B', // Node.js Color
        CSharp: '#68217A',   // C# Color
        'C++': '#00599C',    // C++ Color
      }[skill];

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase().replace('.', '-')}&logoColor=white`}
          alt={skill}
          style={{
            margin: '10px',
            borderRadius: '10px',
            filter: 'brightness(1.2)', // Slightly brighter badges
            transition: 'box-shadow 0.3s, transform 0.3s, filter 0.3s', 
            cursor: 'pointer',
            boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            e.currentTarget.style.filter = 'brightness(1.4)'; // Increase brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.filter = 'brightness(1.2)'; // Reset brightness
          }}
        />
      );
    })}
  </div>
</div>


          {/* MERN Stack Section */}
          <div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Shadow for depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    MERN Stack
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['MongoDB', 'Express.js', 'React', 'Node.js'].map(skill => {
      const badgeColor = {
        MongoDB: '#47A248',    // Green
        'Express.js': '#000000', // Black
        React: '#61DAFB',       // Light Blue
        'Node.js': '#8CC84B',   // Green
      }[skill];

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase().replace('.', '-')}&logoColor=white`}
          alt={`${skill} logo`}
          style={{
            ...badgeStyle,
            filter: 'brightness(1.2)', // Slightly brighter badges
            margin: '10px',
            borderRadius: '10px', // More rounded corners
            boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
            transition: 'box-shadow 0.3s, transform 0.3s', // Smooth transition
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            e.currentTarget.style.filter = 'brightness(1.4)'; // Increase brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.filter = 'brightness(1.2)'; // Reset brightness
          }}
        />
      );
    })}
  </div>
</div>



          {/* Additional Sections */}
          <div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Shadow for depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Darker color for the title
    textAlign: 'center', 
    marginBottom: '15px', 
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Light shadow for effect
  }}>
    Testing
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Selenium', 'JUnit'].map(skill => {
      // Define badge colors based on skill
      const badgeColor = {
        Selenium: '#43B02A', // Green for Selenium
        JUnit: '#F44336',     // Red for JUnit
      };

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor[skill].replace('#', '')}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
          alt={skill}
          style={{
            ...badgeStyle,
            margin: '10px', // Added margin for spacing between badges
            transition: 'transform 0.3s, box-shadow 0.3s, filter 0.3s', // Transition for smooth effects
            boxShadow: `0 0 5px ${badgeColor[skill]}`, // Initial shadow
            filter: 'brightness(1.1)', // Slightly brighter badges
          }}
          onMouseOver={(e) => {
            // Set glow effect based on the skill being hovered
            e.currentTarget.style.boxShadow = skill === 'Selenium' 
              ? `0 0 15px rgba(67, 176, 40, 0.7)` // Green glow on hover for Selenium
              : `0 0 15px rgba(244, 67, 54, 0.7)`; // Red glow on hover for JUnit
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            e.currentTarget.style.filter = 'brightness(1.3)'; // Increase brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 5px ${badgeColor[skill]}`; // Restore shadow
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.filter = 'brightness(1.1)'; // Reset brightness
          }}
        />
      );
    })}
  </div>
</div>


<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Shadow for depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Tools & Platforms
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Git', 'GitHub', 'Docker', 'Visual_Studio_Code'].map(skill => {
      const badgeColor = {
        Git: '#F05032', // Git color (red)
        GitHub: '#181717', // GitHub color (dark gray)
        Docker: '#2496ED', // Docker color (blue)
        Visual_Studio_Code: '#007ACC', // VS Code color (blue)
      }[skill];

      return (
        <a 
          key={skill} 
          href={`https://www.${skill.toLowerCase().replace('_', '-')}.com`} // Link to the tool's website
          target="_blank" 
          rel="noopener noreferrer"
          style={{ margin: '10px', display: 'inline-block' }} // Ensure proper layout and spacing
          title={`Learn more about ${skill}`} // Tooltip
        >
          <img
            src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
            alt={`${skill} logo`} // Enhanced alt text
            style={{
              ...badgeStyle,
              filter: 'brightness(1.2)', // Slightly brighter badges
              margin: '10px',
              borderRadius: '10px', // More rounded corners
              boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
              transition: 'box-shadow 0.3s, transform 0.3s, filter 0.3s', // Transition effects
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
              e.currentTarget.style.filter = 'brightness(1.4)'; // Increase brightness on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
              e.currentTarget.style.filter = 'brightness(1.2)'; // Reset brightness
            }}
          />
        </a>
      );
    })}
  </div>
</div>




<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #1c1c1c, #2a2a2a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Database
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['MySQL', 'PostgreSQL', 'NoSQL'].map(skill => {
      // Define badge colors for each skill
      const badgeColors = {
        'MySQL': '#00758F',         // MySQL color
        'PostgreSQL': '#336791',    // PostgreSQL color
        'NoSQL': '#A3C940',         // NoSQL color
      };

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColors[skill].replace('#', '')}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
          alt={skill}
          style={{
            ...badgeStyle,
            filter: 'brightness(1.2)', // Slightly brighter badges
            transition: 'box-shadow 0.3s, transform 0.3s', 
            margin: '10px', 
            borderRadius: '10px', // More rounded corners
            cursor: 'pointer', 
            boxShadow: `0 0 10px ${badgeColors[skill]}`, // Shadow matching badge color
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColors[skill]}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          }}
        />
      );
    })}
  </div>
</div>



<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #1c1c1c, #333333)', // Gradient for added depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Shadow for depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Operating Systems
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Linux', 'Unix', 'Windows', 'Unix_Shell_Scripting'].map(skill => {
      // Define badge colors based on skill
      const badgeColor = {
        'Linux': '#E54B25',               // Red
        'Unix': '#A8C6E9',                // Light Blue
        'Windows': '#0078D4',             // Windows Blue
        'Unix_Shell_Scripting': '#F0DB4F', // Yellow
      };

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor[skill].replace('#', '')}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
          alt={skill}
          style={{
            ...badgeStyle,
            backgroundColor: badgeColor[skill], // Use defined badge color
            transition: 'box-shadow 0.3s, transform 0.3s', 
            margin: '10px', 
            cursor: 'pointer', 
            borderRadius: '10px', // Rounded corners for badges
            boxShadow: `0 0 5px ${badgeColor[skill]}`, // Initial shadow
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px rgba(255, 255, 255, 0.7)`; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 5px ${badgeColor[skill]}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          }}
        />
      );
    })}
  </div>
</div>



<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #1c1c1c, #282828)', // Gradient for added depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Frameworks
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Spring_Boot', 'Hibernate', 'JDBC', 'JSP', 'Servlets'].map(skill => {
      // Define badge color based on skill
      const badgeColor = {
        'Spring_Boot': '#6DB33F',   // Green
        'Hibernate': '#F46A6A',     // Red
        'JDBC': '#007396',          // Blue
        'JSP': '#FFC107',           // Amber
        'Servlets': '#673AB7',      // Purple
      };

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor[skill].replace('#', '')}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
          alt={skill}
          style={{
            ...badgeStyle,
            filter: 'brightness(1.2)', // Slightly brighter badges
            transition: 'box-shadow 0.3s, transform 0.3s', 
            margin: '10px', 
            borderRadius: '10px', // More rounded corners
            cursor: 'pointer', 
            boxShadow: `0 0 10px ${badgeColor[skill]}`, // Shadow matching badge color
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor[skill]}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          }}
        />
      );
    })}
  </div>
</div>


<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #1c1c1c, #333333)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the titles
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Web Technologies
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <img
      src="https://img.shields.io/badge/-RESTful_API-007396?style=flat&logo=rest&logoColor=white"
      alt="RESTful API"
      style={{
        ...badgeStyle,
        filter: 'brightness(1.2)', // Slightly brighter badge
        transition: 'box-shadow 0.3s, transform 0.3s', 
        margin: '10px', 
        borderRadius: '10px', // More rounded corners
        cursor: 'pointer', 
        boxShadow: '0 0 10px #007396', // Shadow matching badge color
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
        e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = '0 0 10px #007396'; // Restore shadow color
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale
      }}
    />
    {/* Additional Technologies */}
    {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-F05032?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
        alt={skill}
        style={{
          ...badgeStyle,
          filter: 'brightness(1.2)', // Slightly brighter badge
          transition: 'box-shadow 0.3s, transform 0.3s', 
          margin: '10px', 
          borderRadius: '10px', // More rounded corners
          cursor: 'pointer', 
          boxShadow: `0 0 10px #F05032`, // Shadow matching badge color
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
          e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = `0 0 10px #F05032`; // Restore shadow color
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
        }}
      />
    ))}
  </div>

  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the titles
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Security
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['Spring_Security', 'OAuth', 'JWT'].map(skill => (
      <img
        key={skill}
        src={`https://img.shields.io/badge/-${skill}-007396?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
        alt={skill}
        style={{
          ...badgeStyle,
          filter: 'brightness(1.2)', // Slightly brighter badge
          transition: 'box-shadow 0.3s, transform 0.3s', 
          margin: '10px', 
          borderRadius: '10px', // More rounded corners
          cursor: 'pointer', 
          boxShadow: '0 0 10px #007396', // Shadow matching badge color
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
          e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px #007396'; // Restore shadow color
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale
        }}
      />
    ))}
  </div>
</div>





<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Shadow for depth
}}>
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
  }}>
    Microsoft .NET Technologies
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['ASP.NET_MVC_Core', 'NET_Core', 'ADO.NET', 'CSharp', 'Web_API', 'Entity_Framework'].map(skill => {
      // Define badge color based on skill
      const badgeColor = {
        'ASP.NET_MVC_Core': '#4CAF50',  // Green
        'NET_Core': '#007396',           // Blue
        'ADO.NET': '#FF5722',            // Red
        'CSharp': '#f7b733',             // Orange
        'Web_API': '#673AB7',            // Purple
        'Entity_Framework': '#FF9800',   // Amber
      };

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor[skill].replace('#', '')}?style=flat&logo=${skill.toLowerCase().replace('_', '-')}&logoColor=white`}
          alt={skill}
          style={{
            ...badgeStyle,
            filter: 'brightness(1.2)', // Slightly brighter badges
            margin: '10px', 
            borderRadius: '10px', // More rounded corners
            cursor: 'pointer', 
            boxShadow: `0 0 10px ${badgeColor[skill]}`, // Shadow matching badge color
            transition: 'box-shadow 0.3s, transform 0.3s, filter 0.3s', // Smooth transition
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px rgba(255, 255, 255, 0.7)`; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            e.currentTarget.style.filter = 'brightness(1.4)'; // Increase brightness on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor[skill]}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            e.currentTarget.style.filter = 'brightness(1.2)'; // Reset brightness
          }}
        />
      );
    })}
  </div>
</div>





<div style={{ 
  ...skillsSectionStyle, 
  background: 'linear-gradient(135deg, #282c34, #1c1f24)', // Gradient background for depth
  padding: '20px', 
  borderRadius: '10px', 
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  {/* Project Management Tools Section */}
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
    marginBottom: '20px', // Spacing below the title
  }}>
    Project Management Tools
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['JIRA', 'Postman'].map(tool => (
      <img
        key={tool}
        src={`https://img.shields.io/badge/-${tool}-007396?style=flat&logo=${tool.toLowerCase()}&logoColor=white`}
        alt={tool}
        style={{
          ...badgeStyle,
          margin: '10px', // Space between badges
          transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transitions
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'; // Slightly increase size on hover
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)'; // Shadow on hover
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset size
          e.currentTarget.style.boxShadow = 'none'; // Remove shadow
        }}
      />
    ))}
  </div>

  {/* Methodologies Section */}
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
    margin: '20px 0 10px', // Spacing above and below the title
  }}>
    Methodologies
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#2b2b2b', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
    {['Agile', 'Scrum', 'Waterfall', 'Kanban'].map(methodology => {
      const badgeColor = {
        Agile: '#f56b00', // Orange
        Scrum: '#007396', // Blue
        Waterfall: '#007bff', // Bright Blue
        Kanban: '#28a745', // Green
      }[methodology];

      return (
        <img
          key={methodology}
          src={`https://img.shields.io/badge/-${methodology}-${badgeColor.slice(1)}?style=flat&logo=${methodology.toLowerCase().replace('_', '-')}&logoColor=white`}
          alt={methodology}
          style={{
            ...badgeStyle,
            margin: '10px', // Space between badges
            transition: 'transform 0.2s, box-shadow 0.2s', // Smooth transitions
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly increase size on hover
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)'; // Shadow on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Reset size
            e.currentTarget.style.boxShadow = 'none'; // Remove shadow
          }}
        />
      );
    })}
  </div>
</div>


          
<div style={{ 
 ...skillsSectionStyle, 
 background: 'linear-gradient(135deg, #282c34, #1c1f24)', // Gradient background for depth
 padding: '20px', 
 borderRadius: '10px', 
 boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
}}>
  {/* Cloud Section */}
  <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
    margin: '20px 0 10px', // Spacing above and below the title
  }}>
    Cloud
  </h3>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {['AWS', 'Azure', 'Jenkins'].map(skill => {
      const badgeColor = {
        AWS: '#FF9900',  // AWS orange
        Azure: '#0078D4', // Azure blue
        Jenkins: '#D00000', // Jenkins red
      }[skill];

      return (
        <img
          key={skill}
          src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
          alt={skill}
          style={{
            margin: '10px', 
            borderRadius: '10px', // Rounded corners
            cursor: 'pointer', 
            boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
            transition: 'box-shadow 0.3s, transform 0.3s', 
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)'; // Bright glow on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale
          }}
        />
      );
    })}
  </div>

  {/* DevOps Section */}
  <div style={{ 
   ...skillsSectionStyle, 
   background: 'linear-gradient(135deg, #282c34, #1c1f24)', // Gradient background for depth
   padding: '20px', 
   borderRadius: '10px', 
   boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', // Deeper shadow for more depth
 }}>
    <h3 style={{ 
    ...sectionTitleStyle, 
    color: '#ffcc00', // Bright yellow for the title
    textAlign: 'center', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Text shadow for effect
    margin: '20px 0 10px', // Spacing above and below the title
  }}>
    Devops
  </h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {['Docker', 'Kubernetes', 'Jenkins', 'Terraform'].map(skill => {
        const badgeColor = {
          Docker: '#2496ED',      // Docker blue
          Kubernetes: '#326ce5',  // Kubernetes blue
          Jenkins: '#D00000',     // Jenkins red
          Terraform: '#623CE4',   // Terraform purple
        }[skill];

        return (
          <img
            key={skill}
            src={`https://img.shields.io/badge/-${skill}-${badgeColor.slice(1)}?style=flat&logo=${skill.toLowerCase()}&logoColor=white`}
            alt={skill}
            style={{
              margin: '10px', // Added margin for spacing between badges
              borderRadius: '10px', // Rounded corners
              boxShadow: `0 0 10px ${badgeColor}`, // Shadow matching badge color
              transition: 'transform 0.3s, box-shadow 0.3s', // Transition for smooth effects
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px rgba(${badgeColor.slice(1)}, 0.7)`; // Glow on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Slightly larger on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = `0 0 10px ${badgeColor}`; // Restore shadow color
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            }}
          />
        );
      })}
    </div>
  </div>
</div>






        </div>
      </div>
    </section>
  );
};

export default Skills;
