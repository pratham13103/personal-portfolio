import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const tab1Projects = [
    {
      title: "Whatsapp Chat Analyzer",
      description: "Analyze & automate WhatsApp chats",
      imgUrl: projImg1,
      link: "https://python-wca.streamlit.app/",
    },
    {
      title: "Edudiagno.com",
      description: "Career guidance & skill development",
      imgUrl: projImg2,
      link: "https://edudiagno.com/",
    },
    {
      title: "Jaiswal Arts",
      description: "Traditional & custom art gallery",
      imgUrl: projImg3,
      link: "https://www.jaiswalart.in/",
    },
  ];

  const tab2Projects = [
    {
      title: "Driver Drowsiness Detection",
      description: "Real-time driver alertness monitoring",
      imgUrl: projImg4,
      link: "https://github.com/pratham13103/Driver-Drowsiness-Detection",
    },
  ];
  const tab3Projects = [
    {
      title: "Tableau Real-Time Job Analytics Portal",
      description:
        "Developed interactive dashboards for real-time job data analytics and visualization using Tableau.",
      imgUrl: projImg5,
      link: "https://jobportall13.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Projects highlighting development, data analysis, and
                    creative design. Each demonstrates technical skills and
                    problem-solving.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Python Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analytics Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {tab3Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      />
    </section>
  );
};
