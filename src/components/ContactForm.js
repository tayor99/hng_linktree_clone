import { useState } from "react";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success");
  };
  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="contact__form">
        <form onSubmit={handleSubmit}>
          <div className="names">
            <div className="form-details firstName">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
                onChange={handleChange}
                value={contactDetails.first_name}
              />
            </div>
            <div className="form-details lastName">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                onChange={handleChange}
                value={contactDetails.last_name}
              />
            </div>
          </div>
          <div className="form-details">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              onChange={handleChange}
              value={contactDetails.email}
            />
          </div>

          <div className="form-details">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              onChange={handleChange}
              value={contactDetails.message}
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              {`You agree to providing your data to {name} who may contact you`}
            </label>
          </div>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
