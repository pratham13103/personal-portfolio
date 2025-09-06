import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Please Check Out My Resume for hire!!</h2>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="/Prathamesh_Jaiswal_Resume.pdf"  // Make sure resume.pdf is in the `public/` folder
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button style={{
                        backgroundColor: '#fff',
                        padding: '12px 24px',
                        border: '2px solid black',
                        fontSize: '16px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}>
                        Resume
                      </button>
                    </a>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p>Contact Me at my mail</p>
                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&to=pangaonkar.svc424@gmail.com&tf=cm"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '18px', color: '#fff', textDecoration: 'underline' }}
                    >
                      prathamesh.r.jaiswal@gmail.com
                    </a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
