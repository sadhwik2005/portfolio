import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Ikshan</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Assisted in vulnerability assessments and penetration testing on web applications. Learned to identify security flaws and drafted actionable remediation strategies under senior guidance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Penetration Testing Intern</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Supported security analysts in enterprise platform testing. Conducted basic penetration testing, threat modeling, and assisted in secure code reviews to meet modern security standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Security Consultant & CTF Player</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively participating in bug bounty programs and CTF challenges. Building practical skills in automated vulnerability scanning, network defense, and incident response planning while continuing academic studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
