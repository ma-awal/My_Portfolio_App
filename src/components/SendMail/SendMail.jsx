import React from 'react';
import './SendMail.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const SendMail = ({ isFooter }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nwft8ci',
        'template_7wtoevd',
        form.current,
        'Ll7D219ac6PdEGGgk'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="send_mail text-start   ">
      <h1 className="heading  mb-4">Get In Touch</h1>
      <p className="custom_text mb-4  ">
        Don't forget to send your message. Feel free to connect any time in your
        need
      </p>
      <form className=" " ref={form} onSubmit={sendEmail}>
        <div className="form-group mb-4">
          <input
            type="name"
            className="form-control"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-group mb-5">
          <textarea
            type="text"
            className="form-control"
            placeholder="Message"
            name="message"
            rows={4}
          />
        </div>
        <div className="text-end ">
          <button
            type="submit"
            className="custom_btn font-semibold rounded-pill     "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
