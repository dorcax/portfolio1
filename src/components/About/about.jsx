import "./about.css";
export default function About() {
  return (
    <div className="container" id="about">
      <div className="about-container">
        <div className="about-section"></div>
        <div>
          <h2>about me </h2>
          <div className="about-text">
            <p >
              I am an innovative and strategic software developer with an
              experience in both client-side and server-side development and
              database design. I have an analytical mindset and a deep
              understanding of front-end technologies, back-end frameworks, and
              both relational and non-relational databases. My resourceful skill
              set allows me to build data-driven full-stack applications,
              enhance performance and ensure scalability. <br />I thrive in
              collaborative, client-focused settings where I can apply my
              strategic mindset and analytical expertise to create, implement,
              deliver resilient and user-oriented software solutions.
            </p>

            <div>
              <button className="hire">hire me</button>
              <a href="/images/_dorcasResume.pdf" className="resume" download>
                Resume
              </a>
            </div>
          </div>

          {/* hello */}
        </div>
      </div>
    </div>
  );
}
