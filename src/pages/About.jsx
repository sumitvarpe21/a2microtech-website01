import { Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide reliable technology products and solutions that help individuals, businesses and developers build better projects.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    text: "We focus on dependable products, practical solutions and a customer-first approach.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "We aim to understand customer requirements and provide solutions that match their specific needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We continuously explore modern technologies, electronics and digital solutions.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>ABOUT A2MICROTECH INDIA PVT. LTD</p>
        <h1>
          Technology built
          <br />
          around your needs.
        </h1>
        <p className="about-intro">
          A2MICROTECH INDIA PVT. LTD provides electronics, technology products and development solutions for
          students, developers, businesses and technology enthusiasts.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <p className="section-label">WHO WE ARE</p>
          <h2>
            Building solutions
            <br />
            for a connected world.
          </h2>
          <p>
            A2 Microtech is focused on providing electronic components, development boards,
            sensors, accessories and technology solutions.
          </p>
          <p>
            From individual components to complete technology solutions, our goal is to make the
            products and support needed for innovation more accessible.
          </p>
        </div>
        <div className="about-story-box">
          <span>A2</span>
          <strong>MICROTECH INDIA PVT. LTD</strong>
          <p>Technology • Electronics • Solutions</p>
        </div>
      </section>

      <section className="about-highlights">
        <div className="about-section-heading">
          <p className="section-label">WHAT DRIVES US</p>
          <h2>Our Values</h2>
        </div>

        <div className="about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div className="about-value-card" key={value.title}>
                <div className="about-value-icon">
                  <Icon size={25} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-cta">
        <p>READY TO GET STARTED?</p>
        <h2>
          Let's create something
          <br />
          meaningful together.
        </h2>
        <Link to="/contact" className="about-cta-button">
          Contact Us →
        </Link>
      </section>
    </main>
  );
}
