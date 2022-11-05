import ContactForm from "../components/ContactForm";
const Contact = () => {
  // const [contactInput, setContactInput] = useState( )

  return (
    <div className="contact__container">
      <div className="contact__header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
