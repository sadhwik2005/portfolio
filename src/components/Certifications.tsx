import "./styles/CVSections.css";

const Certifications = () => {
  return (
    <div className="cv-section" id="certifications">
      <h2 className="cv-section-title">Training & Certifications</h2>
      <div className="cv-grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="cv-card">
          <h3 className="cv-card-title">Certified AI Security Specialist (CAISS)</h3>
          <div className="cv-card-meta">
            <span>AMPCUS CYBER</span>
            <span>Nov 2025</span>
          </div>
          <p>
            Trained in integrating AI for enhanced Vulnerability Assessment and real-time Threat Intelligence in a SOC environment. Focused on securing AI/ML systems and mitigating risks associated with adversarial attacks and model extraction.
          </p>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title">Ethical Hacking: Beginner to Advanced</h3>
          <div className="cv-card-meta">
            <span>IHack Academy</span>
            <span>Sep 2025</span>
          </div>
          <p>
            Focus: Gained comprehensive skills in Ethical Hacking, including practical training in Capture The Flag (CTF) challenges and Bug Bounty methodologies.
          </p>
        </div>
      </div>

      <div className="cv-grid" style={{ marginTop: '30px' }}>
         <div className="cv-card">
          <h3 className="cv-card-title" style={{ fontSize: '1.2rem' }}>Introduction to Hardware and Operating System</h3>
          <div className="cv-card-meta" style={{ borderBottom: 'none', marginBottom: 0 }}>
            <span>Coursera | Sep 2025</span>
          </div>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title" style={{ fontSize: '1.2rem' }}>Python (Basics)</h3>
          <div className="cv-card-meta" style={{ borderBottom: 'none', marginBottom: 0 }}>
            <span>HackerRank | Oct 2025</span>
          </div>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title" style={{ fontSize: '1.2rem' }}>The Bits and Bytes of Computer Networking</h3>
          <div className="cv-card-meta" style={{ borderBottom: 'none', marginBottom: 0 }}>
            <span>Google / Coursera | Sep 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
