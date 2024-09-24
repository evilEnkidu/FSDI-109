import "./Contact.css";
import { useState } from "react";
function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleMessage(e) {
    const text = e.target.value;
    const name = e.target.name;
    const copy = { ...message };
    copy[name] = text;
    setMessage(copy);
    console.log(copy);
  }

  return (
    <div className="contact page">
      <h2>Do you want to say hello?</h2>
      <p>Use this form to get in touch!</p>
      <div className="form">
        <div>
          <label htmlFor="" className="form-label">
            Your name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            onBlur={handleMessage}
          />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Your e-mail
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            onBlur={handleMessage}
          />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            onBlur={handleMessage}
            rows={4}
          />
        </div>
        <div className="controls">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
