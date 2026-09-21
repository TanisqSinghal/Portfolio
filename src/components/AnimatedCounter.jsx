import { useEffect, useState } from "react";

const TypewriterText = ({ text, className = "", speed = 24, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timer;
    let index = 0;

    const startTyping = () => {
      timer = setInterval(() => {
        index += 1;
        setDisplayText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(timer);
        }
      }, speed);
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, speed, delay]);

  return <p className={className}>{displayText}</p>;
};

const AnimatedCounter = () => {
  return (
    <div id="about" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-2-cols items-start">
        <div className="w-full bg-zinc-900 rounded-lg p-10 flex flex-col justify-start h-full">
          <TypewriterText
            text="About"
            className="counter-number text-white-50 text-5xl font-bold mb-2"
            speed={40}
          />
          <TypewriterText
            text="I'm a final-year Computer Science student in Delhi. At the moment I work at Awign, where I build pipelines that turn messy raw capture into clean datasets a model can actually train on, plus small internal tools so the ops and annotation teams can run that work without waiting on an engineer."
            className="text-white-50 text-lg mt-5"
            speed={12}
            delay={250}
          />

          <TypewriterText
            text="Before that I spent a summer at IBM on data science and machine learning, and six months as a DSA teaching assistant at Apna College, mostly debugging other people's Java. On my own time I build full-stack things with React, Next.js and Node, usually with an LLM wired in somewhere. Away from the screen it's cooking, singing and cricket."
            className="text-white-50 text-lg mt-5"
            speed={12}
            delay={250}
          />

          <TypewriterText
            text="Open to software engineering, AI/ML and data-focused internship or full-time roles."
            className="text-white-50 text-lg mt-10"
            speed={12}
            delay={250}
          />
        </div>

        <div className="w-full bg-zinc-900 rounded-lg p-10 flex flex-col justify-start h-full">
          <TypewriterText
            text="Education"
            className="counter-number text-white-50 text-5xl font-bold mb-2"
            speed={40}
          />

          <div className="text-white-50 text-lg">
            <TypewriterText
              text="B.Tech in Computer Science"
              className="mb-2 text-white-50 text-lg font-bold mt-5"
              speed={20}
              delay={250}
            />
            <TypewriterText
              text="Guru Gobind Singh Indraprastha University"
              className="text-white-50 text-lg"
              speed={14}
              delay={700}
            />
            <TypewriterText
              text="Aug 2023 - Present · CGPA : 9.45"
              className="text-white-50 text-lg"
              speed={20}
              delay={1200}
            />
          </div>

          <div className="text-white-50 text-lg mt-5">
            <TypewriterText
              text="Senior Secondary School (CBSE)"
              className="mb-2 text-white-50 text-lg font-bold mt-5"
              speed={20}
              delay={1700}
            />
            <TypewriterText
              text="North Delhi Public School"
              className="text-white-50 text-lg"
              speed={14}
              delay={2200}
            />
            <TypewriterText
              text="April 2022 - March 2023 · Score : 85%"
              className="text-white-50 text-lg"
              speed={20}
              delay={2600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;