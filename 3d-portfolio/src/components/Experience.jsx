import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My professional journey</p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">12/2024 - 04/2026</div>
          <h3 className="timeline-title">Sr. Software Engineer</h3>
          <div className="timeline-company">Accenture (Hyderabad, HYD)</div>
          <p className="timeline-desc">
            Spearheaded legacy modernization from VB.NET to C#/.NET Core achieving 4x performance improvement. Re-architected monolithic on-premise APIs into scalable Azure Cloud APIs using Azure Key Vault. Orchestrated secure CI/CD pipelines in Azure DevOps with GHAS/SAST, and implemented Azure Entra ID and Application Insights for observability. Leveraged GitHub Copilot for AI-driven development.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">02/2024 - 09/2024</div>
          <h3 className="timeline-title">Software Engineer</h3>
          <div className="timeline-company">Mirae Asset (VersionNext) (Mumbai, MH)</div>
          <p className="timeline-desc">
            Created software using the Microsoft technology stack, including C#, .NET Framework, .NET Core 6/7/8, .NET MVC, SQL, Web API, REST API, and JavaScript. Engaged in product development utilizing Agile Methodology within the diverse Trading business domain.
          </p>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">04/2021 - 01/2024</div>
          <h3 className="timeline-title">Software Engineer</h3>
          <div className="timeline-company">Businessnext (Bangaluru, KA)</div>
          <p className="timeline-desc">
            Actively involved in creating software using C#, .NET Framework, .NET Core, SQL Server, Web API, and React. Participated in projects within the diverse BFSI (Banking, Financial Services, and Insurance) business domain, utilizing Agile Methodology and best product development practices.
          </p>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-date">05/2019 - 06/2019</div>
          <h3 className="timeline-title">Intern</h3>
          <div className="timeline-company">Knowledge Lens</div>
          <p className="timeline-desc">
            Worked on iLens device and different M2M communication channels including MODBUS, APIs, HTTP, rs232, and rs485.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
