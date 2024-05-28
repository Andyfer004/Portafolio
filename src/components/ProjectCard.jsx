import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, codeUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="mt-3">
            <Button variant="primary" href={codeUrl} target="_blank" style={{background:'black'}}>Ver Código</Button>
            <Button variant="secondary" href={projectUrl} target="_blank" className="ms-2" style={{background:'black'}}>Ver Proyecto</Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

