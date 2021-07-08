import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle form submission
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const reqBody = { email, message };
    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">You Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            rows="5"
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default Home;
