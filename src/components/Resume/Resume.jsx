import React from 'react';
import './Resume.css';

const Resume = () => {


return (
        <div id="resume" className="resume-container">
                <header className="resume-header">
                    <h1>My CV</h1>
                    <div className='name'>
                        <h2>Mahmoud eltohamy</h2>
                        <p><span>-- </span>Mansoura, Egypt  |  01551936045  | meltohamy080@gmail.com | LinkedIn URL</p>
                    </div>
                </header>
            

            
                <section className="resume-section">
                    <h2>Professional Summary</h2>
                    <h3>
                        <dev className="summary-item">
                            -- Web development :
                            <br />
                            "Results-driven Web Developer with 1+ years of experience in creating and maintaining responsive websites..."
                            <br />
                            "Skilled in using React, Next.js, and Tailwind CSS to build modern, user-friendly web applications..."
                            <br />
                            "Proficient in utilizing Git and GitHub for efficient version control and collaboration..."     
                            <br />
                            "Passionate about learning new technologies and improving user experiences through innovative solutions."
                            <br />
                        </dev>
                        <dev className="summary-item">
                            -- AI automation : 
                            <br />
                            "Experienced in implementing AI-driven solutions to automate repetitive tasks and improve efficiency."
                            <br />
                            "Skilled in using Python and TensorFlow for developing machine learning models."
                            <br />
                        </dev>
                        <dev className="summary-item">
                            -- video editing :
                            <br />
                            "New vesion of montage, Proficient in using Davinci resolve for editing and producing high-quality video content."
                        </dev>
                    </h3>
                </section>
                {/* <section className="resume-section">
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
                </section> */}
            
                <div className="job">
                    <h2>Job</h2>
                    <dev className="job-entry">
                        <ul>
                            <li>web developer - freelancer</li>
                            <li>Internship Doctor - mansoura hospitals</li>
                            <li>AI automation - freelancer</li>
                            <li>video editor - freelancer</li>
                        </ul>
                    </dev>
                </div>
                <section className="resume-section">
                    <h2>Education</h2>
                    <div className="education-entry">
                        <h3>bachelor of medicine - faculty of medicine Mansoura university</h3>
                        <p className="education-dates">september 2019 - november 2024</p>
                        <p className='education-dates'>working in mansoura hospitals</p>
                    </div>
                </section>
                <section className="resume-section">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>Programming Languages: JavaScript, Python, etc.</li>
                        <li>Frameworks & Libraries: node.js, React, Nextjs, Tailwind CSS, etc.</li>
                        <li>Tools: Git, Webpack, Docker, etc.</li>
                        <li>Soft Skills: Communication, Teamwork, leadership, etc.</li>
                    </ul>
                </section>
        </div>
    );
};

export default Resume;
