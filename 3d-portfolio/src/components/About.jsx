import React from 'react';

const About = () => {
  const techStack = [
    'C#', '.NET Core', '.NET MVC', 'Azure Services', 'SQL Server', 
    'MySQL', 'Angular', 'React', 'JavaScript', 'TypeScript', 'Python'
  ];

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me</p>

      <div className="card">
        <p>
          I'm Yashas, a Senior Software Developer with 5 years of experience in software engineering. I have deep expertise in the Microsoft technology stack, Azure cloud migration, and Agile Methodology. 
          <br /><br />
          I have spearheaded the development and modernization of critical applications within the energy sector, optimizing operational processes and ensuring high availability. Whether I'm re-architecting monolithic on-premise APIs into scalable Azure Cloud APIs, or orchestrating secure DevSecOps pipelines, I bring a detail-oriented and solutions-driven approach to every project. My skills range from backend architecture with C# and .NET Core, to front-end integrations with React and Angular, and implementing robust AI-driven development practices.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem', justifyContent: 'center' }}>
        {techStack.map((tech) => (
          <span key={tech} className="tech-pill">{tech}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
