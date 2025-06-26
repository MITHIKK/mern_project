import React from 'react';
import jobs from '../data/jobs'; // Import static jobs data
import JobCard from './JobCard';
import { Link } from 'react-router-dom';

function JobList() {
  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map(job => (
          <Link to={`/jobs/${job.id}`} key={job.id} className="job-link">
            <JobCard job={job} />
          </Link>
        ))
      )}
    </div>
  );
}

export default JobList; 