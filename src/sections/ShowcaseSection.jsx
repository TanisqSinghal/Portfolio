import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <picture>
                {/* Mobile image */}
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/project1-libroAi.png"
                />

                {/* Laptop / Desktop image */}
                <img src="/images/LibroAi.jpg" alt="App Interface" />
              </picture>
            </div>
            <div className="text-content">
              <h2>
                LibroAI is a full-stack AI application that transforms static
                books into interactive conversational experiences.
              </h2>
              <p className="text-white-50 md:text-xl">
                An App built with Next.js (App Router),React,Tailwind
                CSS,Backend:Next Server Actions,MongoDB (Mongoose), Clerk,Vercel
                Blob,Vapi,Deployment: Vercel
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div>
                <img
                  src="/images/project-ATSight.png"
                  alt="AI-Powered Resume Analyzer and ATS Scoring Tool"
                />
              </div>
              <h2>AI-Powered Resume Analyzer and ATS Scoring Tool</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div >
                <img src="/images/Havensite.png" alt="YC Directory App" />
              </div>
              <h2>
                Full-stack booking application using Node.js, Express. js,
                MongoDB, and EJS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
