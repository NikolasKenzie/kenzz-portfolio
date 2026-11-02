import "../styles/experience.css";
import tsl_certificate from "../assets/TSL_certificate.jpg";
import tsl_pic1 from "../assets/tsl_pic1.jpeg";
import tsl_pic2 from "../assets/tsl_pic2.jpeg";
import wilma_project from "../assets/wilma_project.png";
import dsp_pic from "../assets/dsp_pic.png";
import chordProg_pic from "../assets/chordProg_pic.png";
import bootcamp_pic1 from "../assets/bootcamp_pic1.png"
import bootcamp_pic2 from "../assets/bootcamp_pic2.png"
import bootcamp_pic3 from "../assets/bootcamp_pic3.png"
import bootcamp_pic4 from "../assets/bootcamp_pic4.png"

export default function Experience() {
  const experiences = [
    {
      title: "3rd Place — TSL President University 2024",
      category: "Competition",
      description:
        "For this competition, we developed a poaching detection device using Python TensorFlow AI, integrated with IoT.",
      tech_stack: "C, Python",
      images: [
        tsl_certificate,
        tsl_pic1,
        tsl_pic2,
        // "/images/tsl-certificate.jpg",
        // "/images/tsl-documentation.jpg"
      ],
      link: "https://www.instagram.com/p/C6Der5YSAev/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      linkText: "Visit the event",
    },
    {
      title: "Church Data & News Management App",
      category: "Project",
      description:
        "A web application that streamlines congregation data management and church news publishing. Built with three role-based interfaces user, admin, and superadmin.",
      tech_stack: "ReactJs, Native PHP",
      images: [
        wilma_project,
        // "/images/church-app-1.png",
        // "/images/church-app-2.png"
      ],
      link: "https://gki-wilma.top/",
      linkText: "View App",
    },
    {
      title: "Digital Signal Processing (DSP)",
      category: "Project Gabut",
      description:
        "A Digital Signal Processing (DSP) project focused on developing a real-time guitar effects processor using Python and the SoundDevice library. The application implements several guitar effects, including Amplifier, Equalizer (EQ), Distortion, and Delay. Some components, particularly the Amplifier and EQ, are still under development and require further improvements.",
      tech_stack: "Python, SoundDevice Lib",
      images: [dsp_pic],
      link: "https://github.com/NikolasKenzie/guitar-effect.git",
      linkText: "View Repo",
    },
    {
      title: "Chord Progression with Hand Tracker",
      category: "Project Gabut",
      description:
        "An experimental hand gesture-controlled chord progression system built using MediaPipe. The left hand is used to select chord progressions 1–6, while the right hand controls guitar strumming gestures to produce sound. This project explores the use of hand tracking and computer vision to create an interactive musical experience.",
      tech_stack: "Python, Mediapipe, OpenCv",
      images: [chordProg_pic],
      link: "https://github.com/NikolasKenzie/chordProgression.git",
      linkText: "View Repo",
    },
    {
      title: "Dicoding Bootcamp",
      category: "bootcamp",
      description:
        "",
      tech_stack: "-",
      images: [bootcamp_pic1, bootcamp_pic2, bootcamp_pic3, bootcamp_pic4],
      link: "https://www.dicoding.com/",
      linkText: "View Event",
    },
  ];

  return (
    <section id="experience">
      <div className="container-experience">
        {/* SECTION HEADER */}
        <div className="header-experience">
          <p className="section-label">EXPERIENCE & PROJECTS</p>

          <h2>Things I've Worked On.</h2>

          <p>A collection of projects and experiences throughout my journey.</p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              {/* CATEGORY */}
              <span className="experience-tag">{item.category}</span>

              {/* IMAGE GALLERY */}
              {item.images.length > 0 && (
                <div className="experience-images">
                  {item.images.map((image, imageIndex) => (
                    <img
                      src={image}
                      alt={`${item.title} ${imageIndex + 1}`}
                      key={imageIndex}
                    />
                  ))}
                </div>
              )}

              {/* CONTENT */}
              <div className="experience-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
                <p>
                  <b>Tech Stack: {item.tech_stack}</b>
                </p>

                {/* LINK BUTTON */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-link"
                  >
                    {item.linkText}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
