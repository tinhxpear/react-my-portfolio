import { about } from "../../assets/dummyData";
import Heading from "../common/Heading";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, index) => (
            <>
              <div className="left">
                <img src={val.cover} alt="Cover" />
              </div>
              <div className="right">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className="primaryBtn">Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
