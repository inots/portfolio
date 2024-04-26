const about =
    {
        id: 0,
        title: "About",
        description: "Some info about me :)",
        content: [
            "Hello! My name is Ino. I am a technologist with a BA from Pomona College where I researched sustainable and innovative technology solutions.",
            // "Recently, I took the Clifton Strengths test, which identified my top qualities as an Arranger, Learner, responsible, Developer, and someone who excels in Winning Others Over (Woo). These strengths highlight my ability to organize teams and tasks effectively, my eagerness to learn and grow, my commitment to my responsibilities, my skill in developing potential in others, and my talent for building rapport and inspiring others.",
            // "In every project, I bring a blend of technical expertise, creative problem-solving, and a collaborative spirit.",
            "Currently, I am working in the intersection of sustainability and tech as a Climatebase Fellow.",
            "I believe teamwork and innovation make for impactful digital experiences. Lets connect and explore how we can create something together!",
            ],
        links: [
            {
                id: 0,
                linkTitle: "CV",
                linkIcon: "",
                url: "/Ino-resume-compressed.pdf",
            },
            {
                id: 1,
                linkTitle: " ❋ ",
                linkIcon: "",
                url: "",
            },
            {
                id: 2,
                linkTitle: "Email",
                linkIcon: "",
                url: "mailto:ino.tsich@gmail.com",
            },
            {
                id: 3,
                linkTitle: " ❋ ",
                linkIcon: "",
                url: "",
            },
            {
                id: 4,
                linkTitle: "LinkedIn",
                linkIcon: "",
                url: "https://www.linkedin.com/in/ino-tsichrintzi/",
            },
        ],
    }

export function getAbout() {
    return about;
}
