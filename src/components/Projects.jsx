import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import projImg5 from "../assets/img/image5.png";
import projImg6 from "../assets/img/image6.png";
import projImg7 from "../assets/img/image7.png";
import projImg8 from "../assets/img/image8.png";
import projImg9 from "../assets/img/image9.png";
import projImg10 from "../assets/img/image10.png";
import projImg11 from "../assets/img/image11.png";
import projImg12 from "../assets/img/image12.png";
import projImg13 from "../assets/img/image13.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "HTML ONLY",
      description: "Design & Development",
      imgUrl: projImg1,
      codeUrl: "https://github.com/Andyfer004/Lab-3-HTML-only",
      projectUrl: "https://tiburoncin.lat/22944/Lab-3-HTML-only/html/"
    },
    {
      title: "CSS Only",
      description: "Design & Development",
      imgUrl: projImg2,
      codeUrl: "https://github.com/Andyfer004/Lab-4-CSS-only",
      projectUrl: "https://tiburoncin.lat/22944/Lab-4-CSS-only/animation.html"
    },
    {
      title: "Chat Server",
      description: "Design & Development",
      imgUrl: projImg3,
      codeUrl: "https://github.com/Andyfer004/Lab-5-JS-only",
      projectUrl: "https://tiburoncin.lat/22944/Lab-5-JS-only/"
    },
    {
      title: "Api Node JS",
      description: "Backend Development",
      imgUrl: projImg5,
      codeUrl: "https://github.com/Andyfer004/Lab-5-Server-Side-Javascript",
      projectUrl: "http://3.129.191.211/api/22944/posts"
    },
    {
      title: "Blog Website Car", 
      description: "Design & Development",
      imgUrl: projImg6,
      codeUrl: "https://github.com/Andyfer004/Lab_6_react",
      projectUrl: "http://3.129.191.211/22944/Lab_6_react/index.html"
    },
    {
      title: "Project website car Crud",
      description: "Design & Development",
      imgUrl: projImg7,
      codeUrl: "https://github.com/Andyfer004/Proyecto_Blog_Web",
      projectUrl: "https://blogcarros.netlify.app/"
    },
    {
      title: "Calculator with tests", 
      description: "Design & Development",
      imgUrl: projImg8,
      codeUrl: "https://github.com/Andyfer004/Lab7_Calculadora",
      projectUrl: "https://calcandy1.netlify.app/"
    },
    {
      title: "Project Mobile supermarket", 
      description: "Design & Development",
      imgUrl: projImg9,
      codeUrl: "https://github.com/Andyfer004/Proyecto_plataformas_moviles",
      projectUrl: "#"
    },
    {
      title: "Case UX, UI Tik Tok", 
      description: "Design & Development",
      imgUrl: projImg10,
      projectUrl: "https://www.behance.net/gallery/191081811/Use-Case-Study-Tik-Tok"
    },
    {
      title: "Case UX, UI WhatsApp Pay", 
      description: "Design & Development",
      imgUrl: projImg11,
      projectUrl: "https://www.behance.net/gallery/193744463/Whatsapp-Pay-UI-UX-design"
    },
    {
      title: "Case UX, UI Steam for mom", 
      description: "Design & Development",
      imgUrl: projImg12,
      projectUrl: "https://www.behance.net/gallery/197058141/USE-CASE-STUDY-UXUI-STEAM-FOR-MOM"
    },
    {
      title: "Case UX, UI Creatimer", 
      description: "Design & Development",
      imgUrl: projImg13,
      projectUrl: "https://www.behance.net/gallery/198933581/Proyecto-gestor-de-tiempo-caso-ux-ui"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>En mi trayectoria como desarrollador, he completado una variedad de proyectos que abarcan desde aplicaciones web hasta soluciones de software personalizadas. Mi enfoque se centra en la utilización de tecnologías modernas para crear soluciones eficientes y escalables que satisfagan las necesidades específicas de cada cliente. Desde sistemas de gestión empresarial hasta interfaces interactivas de usuario, cada proyecto es un paso hacia la innovación tecnológica y la excelencia en programación.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
