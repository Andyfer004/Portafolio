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
import apuesta1 from "../assets/img/apuesta1.png";
import apuesta2 from "../assets/img/apuesta2.png";
import apuesta3 from "../assets/img/apuesta3.png";
import apuesta4 from "../assets/img/apuesta4.png";
import apuesta5 from "../assets/img/apuesta5.png";
import apuesta6 from "../assets/img/apuesta6.png";
import apuesta7 from "../assets/img/apuesta7.png";
import apuesta8 from "../assets/img/apuesta8.png";
import apuesta9 from "../assets/img/apuesta9.png";
import apuesta10 from "../assets/img/apuesta10.png";
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

  const imageStyle = {
    width: '100%', 
    maxWidth: '30%', 
    height: 'auto', 
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
    marginBottom: '20px',
    padding: '10px'
  };

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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
  <Row>
    <Col size={12}>
      <h3>Mi Experiencia Profesional</h3>
      <div className="experience-item">
        <h4>Programador Jr - Recursos de Ingeniería Total S.A</h4>
        <p><strong>Periodo:</strong> Enero 2023 - Julio 2023</p>
        <p>En este puesto, realice un sistema de registro para los trabajadores, para marcar su entrada y salida, con interfza, backend y frontend, y algunos otros proyectos de gestión de documentos</p>
      </div>
      <div className="experience-item">
        <h4>Ingeniero de Software - Jadens</h4>
        <p><strong>Periodo:</strong> Enero 2024 - Junio 2024</p>
        <p>Encargado de un proyecto de ingeniería de software donde dirige con otra persona para hacer una app de gestión de tiempo mucho más cómoda que otras herramientas.</p>
      </div>
    </Col>
  </Row>
</Tab.Pane>
<Tab.Pane eventKey="third">
                      <Row>
                        <Col size={12}>
                          <h3>Análisis de Datos en Apuestas en Línea</h3>
                          <p>Mi habilidad para analizar datos no solo se ha aplicado en el ámbito profesional, 
        sino también en decisiones personales y actividades de ocio, como las apuestas en línea. 
        Utilizando técnicas avanzadas de análisis y modelado estadístico, he logrado resultados 
        notables que demuestran la eficacia de combinar pasión por el deporte con una sólida 
        comprensión de los datos.</p>
                          <div>
                            <img src={apuesta1} alt="Análisis de Apuesta 1" style={imageStyle} />
                            <img src={apuesta3} alt="Análisis de Apuesta 3" style={imageStyle} />
                            <img src={apuesta4} alt="Análisis de Apuesta 4" style={imageStyle} />
                            <img src={apuesta5} alt="Análisis de Apuesta 5" style={imageStyle} />
                            <img src={apuesta6} alt="Análisis de Apuesta 6" style={imageStyle} />
                            <img src={apuesta7} alt="Análisis de Apuesta 7" style={imageStyle} />
                            <img src={apuesta8} alt="Análisis de Apuesta 8" style={imageStyle} />
                            <img src={apuesta9} alt="Análisis de Apuesta 9" style={imageStyle} />
                            <img src={apuesta10} alt="Análisis de Apuesta 10" style={imageStyle} />
                          </div>
                        </Col>
                      </Row>
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
