import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Certificates = () => {
  const certificates = [
    {
      title: "Data Analyst - Internshala",
      file: "cert1.pdf",
      preview: "cert1.png", 
    },
    {
      title: "Java Full Stack - Qspider",
      file: "cert2.pdf",
      preview: "cert2.png",
    },
  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "42px", fontWeight: "700" }}>Certificates</h2>
                  <p style={{ fontSize: "18px", marginBottom: "40px" }}>
                    Verified certifications showcasing hands-on skills and achievements.
                  </p>

                  <Row>
                    {certificates.map((cert, index) => (
                      <Col key={index} sm={12} md={6} lg={4}>
                        <div className="cert-card animate__animated animate__zoomIn">
                          <img
                            src={cert.preview ? cert.preview : "/default-cert.png"}
                            alt="certificate preview"
                            className="cert-preview"
                          />

                          <h4 className="cert-title">{cert.title}</h4>

                          <a href={cert.file} target="_blank" rel="noopener noreferrer">
                            <button className="cert-btn">View Certificate</button>
                          </a>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
