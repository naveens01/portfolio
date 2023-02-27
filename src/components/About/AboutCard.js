import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Naveen</span> from BIT. I am a AI enthusiastic and a passionate programmer.
            <br />
            <br />
            In addition to Field, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Tech blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Web surffing
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Chess
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
