import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/JobBoard"; // Change to your backend URL

function ApplyForm({ jobTitle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cover, setCover] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API}/applications`, {
        name,
        email,
        cover,
        jobTitle
      });
      setSubmitted(true);
    } catch (err) {
      alert("Failed to submit application.");
    }
  };

  if (submitted) {
    return <div className="success">Application submitted for <strong>{jobTitle}</strong>! Thank you.</div>;
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <h3>Apply for {jobTitle}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Cover Letter"
        value={cover}
        onChange={e => setCover(e.target.value)}
        required
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default ApplyForm; 