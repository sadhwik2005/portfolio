import "./styles/CVSections.css";

const Study = () => {
  return (
    <div className="cv-section" id="study">
      <h2 className="cv-section-title">Education</h2>
      <div className="cv-timeline">
        <div className="cv-timeline-item">
          <div className="cv-card">
            <h3 className="cv-card-title">Lovely Professional University</h3>
            <div className="cv-card-meta">
              <span>Phagwara, Punjab</span>
              <span>Aug 2023 - Present</span>
            </div>
            <p className="cv-card-subtitle">Bachelor of Technology Computer Science and Engineering</p>
            <div className="cv-tags">
              <span className="cv-tag">Pursuing</span>
            </div>
          </div>
        </div>
        
        <div className="cv-timeline-item">
          <div className="cv-card">
            <h3 className="cv-card-title">Narayana Junior College</h3>
            <div className="cv-card-meta">
              <span>Hyderabad, Telangana</span>
              <span>Jun 2021 - Mar 2023</span>
            </div>
            <p className="cv-card-subtitle">Intermediate Education</p>
            <div className="cv-tags">
              <span className="cv-tag">Percentage: 96%</span>
            </div>
          </div>
        </div>

        <div className="cv-timeline-item">
          <div className="cv-card">
            <h3 className="cv-card-title">Vasant Valley High School</h3>
            <div className="cv-card-meta">
              <span>Karimnagar, Telangana</span>
              <span>Jun 2019 - Mar 2021</span>
            </div>
            <p className="cv-card-subtitle">Matriculation</p>
            <div className="cv-tags">
              <span className="cv-tag">Percentage: 100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
