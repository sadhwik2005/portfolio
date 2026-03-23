import "./styles/CVSections.css";

const Skills = () => {
  return (
    <div className="cv-section" id="skills">
      <h2 className="cv-section-title">Skills</h2>
      <div className="cv-grid">
        <div className="cv-card">
          <h3 className="cv-card-title">Languages</h3>
          <div className="cv-tags">
            <span className="cv-tag">Python (Scripting)</span>
            <span className="cv-tag">Bash</span>
            <span className="cv-tag">SQL</span>
          </div>
        </div>

        <div className="cv-card">
          <h3 className="cv-card-title">Tools & Platforms</h3>
          <div className="cv-tags">
            <span className="cv-tag">Wireshark</span>
            <span className="cv-tag">Nmap</span>
            <span className="cv-tag">VMware</span>
            <span className="cv-tag">SIEM</span>
          </div>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title">Soft Skills</h3>
          <div className="cv-tags">
            <span className="cv-tag">Problem-Solving</span>
            <span className="cv-tag">Project Management</span>
            <span className="cv-tag">Adaptability</span>
            <span className="cv-tag">Attention-to-Detail</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
