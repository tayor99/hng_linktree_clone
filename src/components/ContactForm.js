const ContactForm = () => {
  return (
    <>
      <div className="contact__form">
        <form>
          <div className="names">
            <div className="form-details firstName">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-details lastName">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
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
