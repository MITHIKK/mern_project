import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description.slice(0, 80)}...</p>
      <Link to={`/jobs/${job.id}`}><button>View Details</button></Link>
    </div>
  );
}

export default JobCard; 