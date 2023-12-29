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
        content: ["Hello! My name is Ino. I am a Junior Developer at B-Reel. I studied Computer Science and Art History at Pomona College and here are some of the projects I have done over the past few years."],
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
