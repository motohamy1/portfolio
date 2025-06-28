import React from 'react';
import './Resume.css';

const Resume = () => {


return (
        <div className="resume-container">
                <header className="resume-header">
                    <h1>My CV</h1><hr />
                    <div className='name'>
                        <h2>Mahmoud eltohamy</h2>
                        <p>City, State | Phone Number | Email | LinkedIn URL</p>
                    </div>
                </header>
            

            
                <section className="resume-section">
                    <h2>Professional Summary</h2>
                    <p>
                        A brief, powerful summary of your skills, experience, and career goals. Tailor this to the job you are applying for. For example: "Results-driven Web Developer with 5+ years of experience in creating and maintaining responsive websites..."
                    </p>
                </section>
                <section className="resume-section">
                    <h2>Work Experience</h2>
                    <div className="job">
                        <h3>Job Title - Company Name</h3>
                        <p className="job-dates">Month Year - Month Year</p>
                        <ul>
                            <li>Describe your responsibilities and achievements. Use action verbs.</li>
                            <li>Quantify your accomplishments whenever possible (e.g., "Increased user engagement by 15%").</li>
                            <li>Focus on skills relevant to the job you want.</li>
                        </ul>
                    </div>
                </section>
            
                <div className="job">
                    <h3>Another Job Title - Company Name</h3>
                    <p className="job-dates">Month Year - Month Year</p>
                    <ul>
                        <li>Keep the format consistent across all job entries.</li>
                    </ul>
                </div>
                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="education-entry">
                        <h3>Your Degree - University Name</h3>
                        <p className="education-dates">Month Year - Month Year</p>
                        <p>Any honors or relevant coursework can go here.</p>
                    </div>
                </section>
                <section className="resume-section">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>Programming Languages: JavaScript, Python, etc.</li>
                        <li>Frameworks & Libraries: React, Node.js, etc.</li>
                        <li>Tools: Git, Webpack, Docker, etc.</li>
                        <li>Soft Skills: Communication, Teamwork, etc.</li>
                    </ul>
                </section>
        </div>
    );
};

export default Resume;
