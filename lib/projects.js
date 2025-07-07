import SunoDemo from '@/lib/img/suno-demo.gif';
import StateWebsite from '@/lib/img/state-website-landscape.png';
import InstaFilters from '@/lib/img/insta-filters.png'
import ARPortal from '@/lib/img/portal.gif';
import CycladicIcon from '@/lib/img/cycladic.png';
import GruppoIcon from '@/lib/img/GCdemo.gif';

const projects = [
    {
        id: 0,
        title: "Automating Hazardous Waste Tracking with AI",
        alt: "An AI Application to automate the hazardous waste manifest tracking process for industrial facilities.",
        image: ,
        description: ["At Mapistry, I led the development of an AI-powered tool that automates hazardous waste manifest processing for industrial facilities. The feature uses a fine-tuned GPT-4o model to extract structured data from scanned or photographed manifests, eliminating manual entry and enabling real-time compliance tracking. We later integrated the EPA’s e-Manifest API to compare shipped vs. recorded data—closing a critical loop in hazardous waste management. This was the first AI feature in the environmental compliance space of its kind, and it has already seen rapid adoption among Mapistry customers. I presented this work at the 2025 A&WMA Conference and continue to drive its roadmap as part of Mapistry’s product team."],
        links: [
            {
                id: 1,
                linkTitle: "Waste Tracking Using AI Paper",
                url: "https://bit.ly/ai-waste-tracking-paper",
            },
            {
                id: 2,
                linkTitle: "A&WMA Talk Slides",
                url: "https://bit.ly/4l5fXC8",
            },
            {
                id: 3,
                linkTitle: "Mapistry Blog Post",
                url: "",
            },
            {
                id: 4,
                linkTitle: "Mapistry — 2025",
            },
        ],
    },
    {
        id: 1,
        title: "Suno AI",
        alt: "Interactive website",
        image: SunoDemo,
        description: ["Webby Award Winning Website for Best Home Page. Developed the interactive landing page with React and Typescript, and used Framer Motion for smooth animations. Closely collaborated with the design team during the development cycles and communicated with the clients during the Q&A and delivery stages to ensure optimal function of the website, accessibility and responsiveness."],
        links: [
            {
                id: 1,
                linkTitle: "suno.com",
                url: "https://suno.com/about",
            },
            {
                id: 2,
                linkTitle: "Webby Award: Best Home Page 2024",
                url: "https://winners.webbyawards.com/2024/websites-and-mobile-sites/features-design/best-home-page/295084/make-a-song-with-suno",
            },
            {
                id: 3,
                linkTitle: "B-Reel — 2024",
            },
        ],
    },
    {
        id: 2,
        title: "State App",
        alt: "A breathing application",
        image: StateWebsite,
        description: ["Developed a user-friendly interface to rebuild the online presence of the State App and enhanced user engagement. Monitored correspondence with users of the StateApp using CRM and analyzed data insights from the app usage to propose strategic updates and optimizations."],
        links: [
            {
                id: 1,
                linkTitle: "shiftstate.io",
                url: "https://shiftstate.io/",
            },
            {
                id: 2,
                linkTitle: "B-Reel — 2023",
            },
        ],
    },
    {
        id: 3,
        title: "AR Portal",
        alt: "An AR Portal for MegaTV's series Siopilos Dromos",
        image: ARPortal,
        description: [
            "In 2021 I designed and developed an AR Portal for MegaTVs limited series Siopilos Dromos.", 
            "The assets for this project were designed in Blender while the animations and composition of those assets was made in SparkAR as the portal was distributed through Instagram.",
        ],
        links: [
            {
                id: 1,
                linkTitle: "To Vima Article",
                url: "https://www.tovima.gr/2021/04/14/culture/siopilos-dromos-i-proti-elliniki-seira-me-apokleistiko-ar-filtro-sto-instagram/",
            },
            {
                id: 2,
                linkTitle: "MegaTV — 2021",
            },
        ],
    },
    {
        id: 4,
        title: "AR Filters",
        alt: "Instagram Filters made for Greek Fashion brands",
        image: InstaFilters,
        description: [
            "I led the development of AR filters for Greek fashion brands, handling the entire process from client brainstorming to the final filter creation. ",
            "My involvement included designing 2D and 3D assets and presenting to clients. This project, which I initiated, became our company's top revenue contributor."
        ],
        links: [
            {
                id: 1,
                linkTitle: "Wonder Immersive Instagram",
                url: "https://www.instagram.com/wonderimmersive/",
            },
            {
                id: 2,
                linkTitle: "Various Brands — 2021",
            },
        ],
    },
    {
        id: 5,
        title: "Cycladic",
        alt: "An educational and entertaining AR Application for the Museum of Cycladic Art in Athens",
        image: CycladicIcon,
        description: [
            "In the Museum of Cycladic Art's program, we launched an AR app for visualizing Cycladic figurines in original colors. It brings a 1.5m tall figurine to life via tablet scans, allowing users to add features, tattoos, and accessories. This educational yet fun app suits all ages, fostering creativity and teaching Cycladic art history."],
        links: [
            {
                id: 1,
                linkTitle: "Cycladic AR",
                url: "https://cycladic.gr/en/cycladic-ar/",
            },
            {
                id: 2,
                linkTitle: "Museum of Cycladic Art — 2021",
            },
        ],
    },
    {
        id: 6,
        title: "Gruppo",
        alt: "An AR application that allows customers to view and customize Gruppo Cucine's products in their own space",
        image: GruppoIcon,
        description: [
            "Gruppo Cucine's AR app allows real-time visualization and customization of kitchens in personal spaces. Users can choose from four models, adjust configurations and materials, and manipulate size and orientation. The app enables saving designs, sharing photos, and inquiring about models."
        ],
        links: [
            {
                id: 1,
                linkTitle: "App Advice Article",
                url: "https://appadvice.com/app/gruppo-cucine-ar/1562622959",
            },
            {
                id: 2,
                linkTitle: "Gruppo Cucine — 2021",
            },
        ],
    },
]

export function getAllProjects() {
    return projects;
}

