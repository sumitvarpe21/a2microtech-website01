import { Code2, Cpu, Globe, Headphones, Lightbulb, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern and responsive websites for businesses, organizations and technology companies.",
  },
  {
    icon: Cpu,
    title: "Embedded & IoT Solutions",
    description:
      "Development boards, sensors and IoT solutions for automation, monitoring and smart systems.",
  },
  {
    icon: Wrench,
    title: "Electronics Prototyping",
    description:
      "Components and prototyping support for electronics projects, experiments and product development.",
  },
  {
    icon: Lightbulb,
    title: "Technology Solutions",
    description:
      "Customized technology solutions designed around specific business and project requirements.",
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description:
      "Digital tools and solutions that help businesses improve their online presence and operations.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Support and guidance for selecting components, developing projects and solving technical requirements.",
  },
];

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-header">
        <p>WHAT WE OFFER</p>
        <h1>Our Services</h1>
        <p className="services-intro">
          Technology solutions, electronics and development services designed to support your
          projects and business needs.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={28} />
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span className="service-arrow">Learn More →</span>
            </div>
          );
        })}
      </section>

      <section className="services-cta">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's build something
          <br />
          together.
        </h2>
        <Link to="/contact" className="services-cta-button">
          Contact Us →
        </Link>
      </section>
    </main>
  );
}
