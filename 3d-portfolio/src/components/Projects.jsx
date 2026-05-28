import React from 'react';

const projects = [
  {
    title: 'mStock',
    period: '02/2024 - Present',
    company: 'Mirae Asset',
    description:
      'Created and maintained the mStock trading platform, a robust and scalable solution for financial trading. Developed database-driven web applications using ASP.NET MVC, C#, and OOPS. Leveraged SQL Server for data management, Angular for the front-end, and Redis for high-performance caching of large volumes of real-time trading data.',
    techs: ['ASP.NET MVC', 'C#', 'SQL Server', 'Angular', 'Redis'],
  },
  {
    title: 'Asset Based Journey (HDFC BANK)',
    period: '04/2021 - 01/2024',
    company: 'Businessnext',
    description:
      'Developed and implemented asset-based journeys including credit card, auto loan, and home loan journeys for HDFC Bank. Utilized ASP.NET MVC, C#, and ASP.NET Core for robust communication between applications. Enhanced the user interface using ReactJs, ES6, and NodeJs.',
    techs: ['ASP.NET Core', 'C#', 'SQL Server', 'ReactJs', 'NodeJs'],
  },
  {
    title: 'Voice Controlled Home Automation',
    period: 'Academic Project',
    company: 'Personal Project',
    description:
      'System where you can use simple voice commands like "lights on" to control room lights, fans, and TV.',
    techs: ['IoT', 'Voice Recognition'],
  },
  {
    title: 'Transmitting and Receiving data from cloud',
    period: 'Academic Project',
    company: 'Personal Project',
    description:
      'IoT based project comprising of two FRDM-KL25z modules where one transmits sensor data to an IoT cloud and the other receives it.',
    techs: ['IoT', 'FRDM-KL25z', 'Cloud'],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">What I have built</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="project-card-title">{project.title}</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.period}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{project.company}</p>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-techs">
              {project.techs.map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
