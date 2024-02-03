const content = [
    {
        id: 0,
        title: "Home",
        description: "Some projects I've worked on",
    },
    {
        id: 1,
        title: "About",
        description: "Some info about me :)",
        content: [
            "Hello! My name is Ino. I am a Junior Developer at B-Reel where I specialize in creating dynamic and interactive websites. I studied Computer Science and Art History at Pomona College where I researched sustainable and innovative technology solutions.",
            "Recently, I took the Clifton Strengths test, which identified my top qualities as an Arranger, Learner, responsible, Developer, and someone who excels in Winning Others Over (Woo). These strengths highlight my ability to organize teams and tasks effectively, my eagerness to learn and grow, my commitment to my responsibilities, my skill in developing potential in others, and my talent for building rapport and inspiring others.",
            "In every project, I bring a blend of technical expertise, creative problem-solving, and a collaborative spirit.",
            "I believe in the power of teamwork and innovation to create impactful digital experiences. Lets connect and explore how we can create something extraordinary together!",
            ],
        links: [
            {
                id: 1,
                linkTitle: "CV",
                linkIcon: "",
                url: "/Ino-resume-compressed.pdf",
            },
            {
                id: 2,
                linkTitle: "email",
                linkIcon: "",
                url: "mailto:ino.tsich@gmail.com",
            },
            {
                id: 3,
                linkTitle: "LinkedIn",
                linkIcon: "",
                url: "https://www.linkedin.com/in/ino-tsichrintzi/",
            },
        ],
    }
]

export function getAllContent() {
    return content;
}
