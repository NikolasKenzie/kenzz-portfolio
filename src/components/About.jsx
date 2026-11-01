import "../styles/about.css";

export default function About() {
  return (
    <section id="about">
      <div className="container-about">
        <div className="about-intro">
          <div className="section-label">
            <span></span>
            ABOUT ME
          </div>

          <h2>
            Beyond the <span>Code.</span>
          </h2>

          <h3>Curiosity has always been part of who I am.</h3>

          <div className="about-description">
            <p>
              Since childhood, I've always been curious about how things work. I
              often find myself asking questions, exploring unfamiliar ideas,
              and trying to understand what happens behind the things I
              encounter every day.
            </p>

            <p>
              As I grew older, that curiosity gradually led me toward
              technology. From computers and electronics to software development
              and robotics, I enjoy exploring different fields and discovering
              how they connect with one another.
            </p>

            <p>
              I'm currently an Information Technology student, continuously
              learning and developing my skills. I consider myself a beginner in
              many areas, but I believe that every project, experiment, and
              challenge is an opportunity to grow. I'm always eager to learn
              something new, turn ideas into reality, and explore possibilities
              beyond what I already know.
            </p>
          </div>
        </div>

        <div className="hobby-section">
          <div className="section-label">
            <span></span>
            PERSONAL INTERESTS
          </div>

          <h2>
            Touch Some <span>Grass</span> Dude
          </h2>

          <div className="hobby-container">
            <div className="hobby-card">
              <div className="hobby-icon">
                <i className="fa-solid fa-guitar"></i>
              </div>

              <h3>Music</h3>

              <p>
                Some feelings are better expressed through strings than words.
              </p>

              <span className="hobby-number">03</span>
            </div>

            <div className="hobby-card">
              <div className="hobby-icon">
                <i className="fa-solid fa-trophy"></i>
              </div>

              <h3>Badminton</h3>

              <p>servis, smash, dropshot</p>

              <span className="hobby-number">01</span>
            </div>

            <div className="hobby-card">
              <div className="hobby-icon">
                <i className="fa-solid fa-gamepad"></i>
              </div>

              <h3>Gaming</h3>

              <p>
                I love story-driven games with touching storylines. I also love
                Formula 1 and I'm a Tifosi 🐎.
              </p>

              <div className="game-tags">
                <span>Valorant</span>
                <span>The Last of Us</span>
                <span>F1 24</span>
              </div>

              <span className="hobby-number">02</span>
            </div>

            {/* MUSIC */}
          </div>
        </div>
      </div>
    </section>
  );
}
