import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you have any questions or inquiries, feel free to get in touch with me!</p>
        <form
          className="contact-form"
          action="https://formspree.io/f/xnqegwpg"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" className="form-input" />
          <input type="email" name="email" placeholder="Your Email" className="form-input" />
          <textarea name="message" placeholder="Your Message" className="form-textarea"></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;