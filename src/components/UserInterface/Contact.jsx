import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for alerts
  const [alert, setAlert] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to send email
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Use EmailJS to send email
      await emailjs.send(
        'service_bwhv55s',  // Replace with your actual EmailJS Service ID
        'template_b8zkcmg', // Replace with your actual EmailJS Template ID
        formData,          // Form data containing name, email, subject, and message
        'yJBCEfYLLYyRuMnFo' // Replace with your actual EmailJS User ID
      );
      setAlert('Message sent successfully!');
    } catch (error) {
      setAlert('An error occurred, please try again.');
      console.error('EmailJS Error:', error); // Log the error for debugging
    }

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={globalStyles}>
      <section id="contact" style={styles.container}>
        <h2 style={styles.heading}>Let's Talk</h2>
        {alert && (
          <div style={{ ...styles.alert, ...(alert.includes('error') ? styles.alertError : {}) }}>
            {alert}
          </div>
        )}
        <div style={styles.formWrapper}>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
              style={styles.inputField}
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
              style={styles.inputField}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder='Subject'
              value={formData.subject}
              onChange={handleInputChange}
              style={styles.inputField}
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
              style={styles.textarea}
              required
            />
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Define styles within the same file
const styles = {
  container: {
    width: '100%',
    maxWidth: '900px',
    padding: '2rem',
    margin: '0 auto',
    backgroundColor: '#ffdab9',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    color: '#ff5733',
    fontWeight: '700',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  formWrapper: {
    padding: '2rem',
  },
  inputField: {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#f0f4ff',
  },
  textarea: {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '1rem',
    resize: 'vertical',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#f0f4ff',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '8px',
    backgroundColor: '#000000',
    color: '#ff7f50',
    border: 'none',
    width: '100%',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  alert: {
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#bfff00',
    color: '#155724',
  },
  alertError: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
};

// Global styles for full-page background and centering
const globalStyles = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffc0cb',
};

export default Contact;
