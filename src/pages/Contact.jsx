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
  }

  return (
    <div className="contact page">
      <h1>Do you want to say hello?</h1>
      <p>Use the form bellow to get in touch</p>
      <div className="form">
        <div>
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" onBlur={handleMessage} />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" onBlur={handleMessage} />
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" onBlur={handleMessage} />
        </div>
        <div className="controls">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
