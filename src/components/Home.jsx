import "../styles/home.css";
import KenzPicture from '../assets/26102500526_NIKOLAS KENZIE WINATA.jpg'
export default function Home() {
  return (
    <section id="home">
      <div id="con-cardHome">
        {/* LEFT CONTENT */}
        <div className="content-home">
          <div className="terminal-status">
            <span className="status-dot"></span>
            <p>npm run dev</p>
          </div>

          <div className="intro-home">
            <p className="greeting">HELLO, WORLD! I'M</p>

            <h1>
              Nikolas Kenzie <br></br>
              <span> Winata</span>
            </h1>

            <p className="nickname">Just call me Kenzie for short.</p>
          </div>

          <div className="role-home">
            <span className="line-accent"></span>
            <p>Information Technology Student</p>
          </div>

          <p className="description-home">
            Technology enthusiast. highly curious, always learning, and always
            building something new.
          </p>

          <div className="button-home">
            <a href="#about" className="btn-primary">
              About Me <span>&#8599;</span>
            </a>

            <a href="#skills" className="btn-secondary">
              Skills &rarr;
            </a>
          </div>

          <div className="tech-interests">
            <span>INTERESTED IN</span>
            <p>Software Development</p>
            <p>IOT</p>
            <p>Music & Audio</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="visual-home">
          <div className="profile-frame">
            <img src={KenzPicture} alt="Nikolas Kenzie Winata" />

            <div className="image-overlay"></div>

            <div className="profile-tag">
              <span className="status-dot"></span>
              <p>President University Student</p>
            </div>
          </div>

          {/* <div className="floating-card">
            <span>01 / ABOUT ME</span>
            <p>Curiosity drives innovation.</p>
          </div> */}

          <div className="decorative-circle"></div>
        </div>
      </div>
    </section>
  );
}
