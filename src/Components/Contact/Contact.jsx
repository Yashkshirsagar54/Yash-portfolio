import React, { useState } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";

import "./Contact.css";
import helloIcon from "/iconsImg/hello.png";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [isEmailRequired, setIsEmailRequired] = useState(true);
  const [isMessageRequired, setIsMessageRequired] = useState(true);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) return;

    setLoading(true);
    setErr(false);

    const submitUrl =
      import.meta.env.VITE_FORM_SUBMIT_LINK ||
      "https://formsubmit.co/ajax/yashkshirsagar5421@gmail.com";

    const data = {
      email: email,
      message: message,
      _subject: `New Portfolio Message from ${email}`,
      _template: "table",
      _captcha: "false",
      _autoresponse:
        "Thank you for contacting Yash Kshirsagar! I have received your message and will get back to you shortly.",
    };

    try {
      const response = await axios.post(submitUrl, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (
        response.data.success === "true" ||
        response.data.success === true ||
        response.status === 200
      ) {
        setSend(true);
        setEmail("");
        setMessage("");
      } else {
        setErr(true);
      }
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailCheck = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsEmailRequired(val === "");
    setValidEmail(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val));
  };

  const handleMessageCheck = (e) => {
    const val = e.target.value;
    setMessage(val);
    setIsMessageRequired(val === "");
  };

  return (
    <div className="Contact" id="contact">
      <div className="main-title">Contact Me</div>
      <div className="heading">
        <b>let's talk about something...</b>
      </div>
      <div className="middle">
        <form onSubmit={formSubmit} method="POST" className="form">
          <Tilt
            className="tilt-img"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={900}
            scale={1}
            tiltReverse={true}
            transitionSpeed={800}
            gyroscope={false}
          >
            <div className={isEmailRequired ? "tip" : "tip hide"}>
              *required
            </div>
            <input
              className={validEmail ? "input " : "input valid"}
              type="email"
              name="email"
              value={email}
              onChange={handleEmailCheck}
              placeholder="Enter your Email"
              required
            />
          </Tilt>
          <Tilt
            className="tilt-img"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={900}
            scale={1}
            tiltReverse={true}
            transitionSpeed={800}
            gyroscope={false}
          >
            <div className={isMessageRequired ? "tip" : "tip hide"}>
              *required
            </div>
            <div className="textarea-container">
              <textarea
                className="input"
                name="message"
                cols="30"
                rows="10"
                value={message}
                placeholder="👋🏻 Say hellooo..."
                onChange={handleMessageCheck}
                required
              ></textarea>
              <img src={helloIcon} alt="" className="imgIcon helloIcon" />
            </div>
          </Tilt>

          {err && (
            <div
              className="heading"
              style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#ff5252" }}
            >
              <b>Failed to send message. Please try again!</b>
            </div>
          )}

          {send ? (
            <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
              <div
                className="heading"
                style={{ fontSize: "1.3rem", color: "var(--primary-color)" }}
              >
                <b>Message sent successfully! 🎉</b>
              </div>
              <p style={{ marginTop: "0.5rem", color: "var(--light-text-c)", fontSize: "0.95rem" }}>
                Your message has been delivered to Yash's email.
              </p>
              <button
                type="button"
                className="button contactSubmit"
                style={{ marginTop: "1rem", padding: "0.5rem 1.2rem" }}
                onClick={() => setSend(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : loading ? (
            <div className="small-loader" style={{ margin: "1.5rem auto" }}></div>
          ) : (
            <div>
              <button
                type="submit"
                className="button contactSubmit"
                id="button"
              >
                Send Message <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
