
import "../styles/experience.css"

export default function Experience() {

    const experiences = [
        {
            title: "3rd Place — TSL President University 2024",
            category: "Competition",
            description: "Write your competition experience and achievements here.",
            images: [
                // "/images/tsl-certificate.jpg",
                // "/images/tsl-documentation.jpg"
            ],
            link: "",
            linkText: "View Certificate"
        },
        {
            title: "Church Data & News Management App",
            category: "Project",
            description: "Write your project description here.",
            images: [
                // "/images/church-app-1.png",
                // "/images/church-app-2.png"
            ],
            link: "",
            linkText: "View Repository"
        },
        {
            title: "Digital Signal Processing (DSP)",
            category: "Project",
            description: "Write your project description here.",
            images: [],
            link: "",
            linkText: "View Project"
        }
    ];

    return (
        <section id="experience">
            <div className="container-experience">

                {/* SECTION HEADER */}
                <div className="header-experience">
                    <p className="section-label">
                        04 / EXPERIENCE & PROJECTS
                    </p>

                    <h2>Things I've Worked On.</h2>

                    <p>
                        A collection of projects, achievements,
                        certifications, and experiences throughout my journey.
                    </p>
                </div>

                {/* EXPERIENCE CARDS */}
                <div className="experience-grid">

                    {experiences.map((item, index) => (
                        <div className="experience-card" key={index}>

                            {/* CATEGORY */}
                            <span className="experience-tag">
                                {item.category}
                            </span>

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
