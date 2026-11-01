
import "../styles/skills.css";

export default function Skills() {

    const categories = [
        {
            number: "01",
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", level: "Intermediate" },
                { name: "PHP", level: "Beginner" },
                { name: "Python", level: "Intermediate" },
                { name: "SQL", level: "Beginner" },
                { name: "Arduino", level: "beginner" }
            ]
        },
        {
            number: "02",
            title: "Libraries & Frameworks",
            skills: [
                { name: "Tailwind CSS", level: "Beginner" },
                { name: "TensorFlow", level: "Beginner" },
                { name: "OpenCV", level: "Beginner" },
                { name: "MediaPipe", level: "Beginner" }
            ]
        },
        {
            number: "03",
            title: "Tools & Software",
            skills: [
                { name: "Visual Studio Code", level: "Advanced" },
                { name: "Arduino IDE", level: "Intermediate" },
                { name: "Laragon", level: "Beginner" },
                { name: "OBS Studio", level: "Beginner" },
                { name: "GP-Mix", level: "Beginner" }
            ]
        }
    ];

    return (
        <section id="skills">
            <div className="container-skills">

                <div className="header-skills">
                    <p className="section-label">SKILLS</p>
                    <h2>What I Work With.</h2>
                    <p>
                        Technologies and tools I have explored
                        and used throughout my learning journey.
                    </p>
                </div>

                {categories.map((category) => (
                    <div className="skill-section" key={category.number}>

                        <div className="skill-section-header">
                            <span>{category.number}</span>
                            <h3>{category.title}</h3>
                        </div>

                        <div className="skill-cards">
                            {category.skills.map((skill) => (
                                <div className="skill-card" key={skill.name}>
                                    <h4>{skill.name}</h4>
                                    <p>{skill.level}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}
