import StateWebsite from '@/lib/img/state-website.png';
import InstaFilters from '@/lib/img/insta-filters.png'
import ARPortal from '@/lib/img/portal.gif';
import CycladicIcon from '@/lib/img/cycladic.png';
import GruppoIcon from '@/lib/img/gruppo.png';

const projects = [
    {
        id: 0,
        title: "State App",
        alt: "A breathing application",
        image: StateWebsite,
        description: ["Working closely with designers, we created a user-friendly interface to rebuild the online presence of the State App and enhanced user engagement. I also managed customer support, resolving subscription and account access issues by directly interacting with users and updating our database."],
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
