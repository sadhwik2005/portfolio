import "./styles/CVSections.css";

const Achievements = () => {
  return (
    <div className="cv-section" id="achievements">
      <h2 className="cv-section-title">Achievements</h2>
      <div className="cv-grid">
        <div className="cv-card">
          <h3 className="cv-card-title">HackEthics Workshop Competition</h3>
          <p>
            Achieved Top 5 ranking (out of 200 participants) in an Ethical Hacking
            workshop demonstrating strong technical execution and awarded a Certificate of Merit.
          </p>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title">TryHackMe</h3>
          <p>
            Successfully completed over 50 hands-on rooms, building practical proficiency with security tools (e.g.,
            Nmap, Metasploit, Burp Suite).
          </p>
        </div>
        <div className="cv-card">
          <h3 className="cv-card-title">School Champion (Sports & Games)</h3>
          <p>
            Recognized as the school champion in Sports and Games in 2020
            demonstrating leadership, teamwork, and commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
