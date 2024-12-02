import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", gap: "2rem" }}>
      <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
        Días de <strong className="purple">codificación</strong> personal
      </h1>
      <footer className='blockquote-footer'>
        <cite title='Source Title'>En el 2024 he dedicado mas tiempo a codificación para empresas, por lo que no se refleja en mi github personal </cite>.
			</footer>
      <GitHubCalendar
        username="edinsondevs"
        year={2024}
        blockSize={15}
        blockMargin={5}
        color="#1189ec"
        fontSize={16}
      />
      
      <GitHubCalendar
        username="edinsondevs"
        year={2023}
        blockSize={15}
        blockMargin={5}
        color="#1189ec"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
