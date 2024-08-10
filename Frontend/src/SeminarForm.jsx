import React, { useState } from 'react';
import "./SeminarForm.css";

const SeminarForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    organizerName: '',
    organizerContactEmail: '',
    organizerContactPhone: '',
    date: '',
    duration: '',
    location: '',
    description: '',
    targetAudience: ''
  });

  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);

    setSubmissionMessage('Your seminar has been successfully submitted! We will contact you soon');
    setIsMessageVisible(true);

    setTimeout(() => {
      setIsMessageVisible(false);
    }, 5000);

    setFormData({
      title: '',
      organizerName: '',
      organizerContactEmail: '',
      organizerContactPhone: '',
      date: '',
      duration: '',
      location: '',
      description: '',
      targetAudience: ''
    });
  };

  return (
    <div className="seminar-form-container">
        <h2 className='register-seminar'>Register a seminar</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="organizerName">Organizer Name:</label>
        <input
          type="text"
          id="organizerName"
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
          required
        />

        <label htmlFor="organizerContactEmail">Contact Email:</label>
        <input
          type="email"
          id="organizerContactEmail"
          name="organizerContactEmail"
          value={formData.organizerContactEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="organizerContactPhone">Contact Phone:</label>
        <input
          type="tel"
          id="organizerContactPhone"
          name="organizerContactPhone"
          value={formData.organizerContactPhone}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="duration">Duration:</label>
        <input
          type="time"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="targetAudience">Target Audience:</label>
        <input
          type="text"
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
        />

        <button type="submit" className='submit-btn'>Submit</button>
      </form>

      {isMessageVisible && (
        <div className="submission-message">
          <p>{submissionMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SeminarForm;
