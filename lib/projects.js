import AboutIcon from '@/lib/svg/About.svg';
import ARPortal from '@/lib/svg/arPortal.svg';
import InstaFilters from '@/lib/svg/sparkles.svg';
import CycladicIcon from '@/lib/svg/cycladic.svg';
import GruppoIcon from '@/lib/svg/gruppo.svg';
import Spiral from '@/lib/svg/Spiral.svg';

const projects = [
    {
        id: 1,
        icon: AboutIcon,
        title: "About",
        description: "Some info about me :)",
        content: ["Hello! My name is Ino. I am a Junior Developer at B-Reel. I studied Computer Science and Art History at Pomona College and here are some of the projects I have done over the past few years."],
        image: "",
        links: [
            {
                id: 1,
                linkTitle: "CV",
                linkIcon: "",
                url: "https://docs.google.com/document/d/148RW4-iuBNp_FHKHz-JH4NfTHf2vdbwmEfEFvn0XXuw/edit?pli=1",
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
                url: "https://www.linkedin.com/in/ino-tsichrintzi-8895b2193/",
            },
        ],
    },
    {
        id: 2,
        icon: ARPortal,
        title: "AR Portal",
        description: "An AR Portal for MegaTV's series Siopilos Dromos",
        content: [
            "In 2021 I designed and developed an AR Portal for MegaTVs limited series Siopilos Dromos.", 
            "The assets for this project were designed in Blender while the animations and composition of those assets was made in SparkAR as the portal was distributed through Instagram.",
        ],
        image: "",
        links: [], //add PR link
    },
    {
        id: 3,
        icon: InstaFilters,
        title: "AR Filters",
        description: "Instagram Filters made for Greek Fashion brands",
        content: ["While working at Wonder Immersive I designed and developed a number of instagram filters for Greek fashion brands."],
        image: "",
        links: [],
    },
    {
        id: 4,
        icon: CycladicIcon,
        title: "Cycladic",
        description: "An educational and entertaining AR Application for the Museum of Cycladic Art in Athens",
        content: [
            "In the context of the Museum of Cycladic Art Educational Program, we developed an Augmented Reality application that allows users to reimagine Cycladic figurines in their original painted form.",
            "This application gives users the opportunity to freely express their own artistic moods on one of the most iconic symbols of classical art. Once in the museum, the users can use tablets provided by the museum to scan the target image on the floor in front of the 1.5 meter tall cycladic figurine in order to see it come to life. The figurine jumps out of its case to come closer to the user who can then use the application to add facial features, tattoos, and accessories to the figurine.",
            "As this application is targeted to both childern and adults visiting the museum, there is a combination of educational and playful accessories that can be added to the figurine allowing the visitors to freely express themselves while also learning about the history of those figurines."
        ],
        image: "",
        links: [], //link to post from cycladic
    },
    {
        id: 5,
        icon: GruppoIcon,
        title: "Gruppo",
        description: "An AR application that allows customers to view and customize Gruppo Cucine's products in their own space",
        content: [
            "This AR application allows users to visualize Gruppo Cucine's products in their environment enabling them to make customizations and see changes in real time in their personal space.",
            "Users are be able to choose from a selection of four kitchen models to place in their space. After selecting a kitchen model they can choose to change the model's configuration and two materials for the kitchen tops and cabinets.Users can move the kitchen around their space, rotate it and resize it in order to view it from all perspectives.",
            "They can capture a photo with their favorite Gruppo Cucine kitchen to share it with their friends or choose to save specific models and configurations on their device and place inquiries about them with Gruppo Cucine."
        ],
        image: "",
        links: [], //link to appstore & google store
    },
    {
        id: 6,
        icon: Spiral,
        title: "Misc",
        description: "Some other fun projects/explorations",
        content: ["Some other fun projects/explorations"],
        image: "",
        links: [],
    },
]

export function getAllProjects() {
    return projects;
}
