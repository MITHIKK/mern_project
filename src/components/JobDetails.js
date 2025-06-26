import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobs from '../data/jobs';
import ApplyForm from './ApplyForm';

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === parseInt(id));
  const navigate = useNavigate();

  if (!job) {
    return <div>Job not found. <button onClick={() => navigate('/jobs')}>Back to Jobs</button></div>;
  }

  return (
    <div className="job-details">
      <ApplyForm jobTitle={job.title} />
      <button onClick={() => navigate('/jobs')} className="back-btn">Back to Jobs</button>
    </div>
  );
}

export default JobDetails;
