import AboutIcon from '@/lib/svg/About.svg';
import ARPortal from '@/lib/svg/arPortal.svg';
import InstaFilters from '@/lib/svg/sparkles.svg';
import CycladicIcon from '@/lib/svg/cycladic.svg';
import GruppoIcon from '@/lib/svg/gruppo.svg';
import Spiral from '@/lib/svg/Spiral.svg';

const projects = [
    {
        id: 0,
        title: "State App",
        alt: "A breathing application",
        image: AboutIcon,
        description: ["Develop the website and lead customer support"],
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
        description: ["Develop instagram filters using SparkAR for various  brands"],
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
                linkTitle: "PR link?",
                url: "", //link from linkedin?
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
                linkTitle: "PR link?",
                url: "", //link to app?
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
