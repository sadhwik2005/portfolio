import "./styles/CVSections.css";

const Projects = () => {
  return (
    <div className="cv-section" id="projects">
      <h2 className="cv-section-title">Projects</h2>
      <div className="cv-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="cv-card">
          <h3 className="cv-card-title">Secure Authentication with AI Detection</h3>
          <div className="cv-card-meta">
            <span>Tech: Python</span>
          </div>
          <p>
            AI-Enhanced Secure User System: Developed a robust user authentication system featuring salted SHA-256 password hashing and mandatory strong password checks. Integrated an Intelligent Anomaly detection layer that monitors and alerts on suspicious login attempts (outside 9 AM-5PM) by comparing current IP address and login time against a user's established baseline.
          </p>
          <a href="https://github.com/sadhwik2005" target="_blank" rel="noreferrer" className="cv-link">GitHub</a>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title">Stealth Scan: Network & OWASP Report Tool</h3>
          <div className="cv-card-meta">
            <span>Tech: Python</span>
            <span>Aug 2025</span>
          </div>
          <p>
            Performs a Ping Sweep to identify live hosts and then uses two distinct port scanning techniques: the noisy TCP Connect Scan and a simulation of a more Stealthy Scan to check the status of a specific port on those hosts. All scan results are documented in a file alongside the OWASP Top 10 Checklist, providing a foundational report for identifying potential Security Misconfigurations and guiding further manual testing.
          </p>
          <a href="https://github.com/sadhwik2005" target="_blank" rel="noreferrer" className="cv-link">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
