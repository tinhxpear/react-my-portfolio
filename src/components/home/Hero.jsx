import TypewriterComponent from "typewriter-effect";
import { home } from "../../assets/dummyData";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, index) => (
          <div className="heroContainer" key={index}>
            <h3>{val.text}</h3>
            <h1>
              <TypewriterComponent
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>{val.desc}</p>
            <button className="primaryBtn">Download CV</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
